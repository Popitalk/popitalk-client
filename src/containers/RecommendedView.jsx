import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "react-helmet";

import ChannelCardList from "../components/ThumbnailCardLists/ChannelCardList.jsx";
import ChannelSearchList from "../components/ThumbnailCardLists/ChannelSearchList.jsx";
import VideoCardList from "../components/ThumbnailCardLists/VideoCardList.jsx";
import Input from "../components/Controls/Input.jsx";
import Alert from "../components/Alert";
import Button from "../components/Controls/Button.jsx";
import strings from "../helpers/localization";
// import useGetChannels from "../containers/hooks/useGetChannels";
import {
  getDiscoverChannels,
  getTrendingChannels,
  getFollowingChannels,
  searchChannels
} from "../redux/actions";

const moreThanTwoMinutesAgo = date => new Date(date) < new Date() - 120000;

function RecommendedChannels({ selectedPage }) {
  const loggedIn = useSelector(state => state.general.loggedIn);

  const followingTab = {
    tab: strings.following,
    icon: "home"
  };
  const discoverTab = { tab: strings.discover, icon: "globe" };
  const trendingTab = { tab: strings.trending, icon: "fire" };

  const tabs = loggedIn
    ? [followingTab, discoverTab, trendingTab]
    : [discoverTab, trendingTab];

  const [tabSelected, setTab] = useState(
    loggedIn ? followingTab.tab : trendingTab.tab
  );
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const alert = useSelector(state => state.ui.alert);
  const followingChannels = useSelector(state => state.followingChannels);
  const discoverChannels = useSelector(state => state.discoverChannels);
  const trendingChannels = useSelector(state => state.trendingChannels);
  const { defaultAvatar, defaultIcon } = useSelector(state => state.general);

  const getChannels = useCallback(
    channels =>
      Object.entries(channels.channels).map(([chanId, chan]) => ({
        id: chanId,
        name: chan.name,
        icon: chan.icon || defaultIcon,
        status: chan.playbackStatus,
        videoInfo: chan.videoInfo,
        viewers: chan.viewers.map(
          viewerId => channels.users[viewerId].avatar || defaultAvatar
        )
      })),
    [defaultIcon, defaultAvatar]
  );

  const dispatch = useDispatch();

  const [isLoading] = useState(false);
  const [channelList, setChannelList] = useState([]);
  // Infinite scroll
  // search is the Input Value. query is the search term triggered in handleSearch
  const [search, setSearch] = useState("");
  const [isSearchForChannels, setIsSearchForChannels] = useState(false);
  // TODO replace with useSelector
  const searchResultChannels = useSelector(state => {
    return state.channelSearch.channels;
  });

  useEffect(() => {
    if (search === "") setIsSearchForChannels(false);
  }, [search]);

  const tabHandler = tab => {
    setIsSearchForChannels(false);

    if (loggedIn && tab === followingTab.tab) {
      const isOutDated =
        !followingChannels.lastRequestAt ||
        moreThanTwoMinutesAgo(followingChannels.lastRequestAt);
      if (isOutDated) {
        dispatch(getFollowingChannels());
      }
      setChannelList(getChannels(followingChannels));
    } else if (tab === discoverTab.tab) {
      if (
        !discoverChannels.lastRequestAt ||
        moreThanTwoMinutesAgo(discoverChannels.lastRequestAt)
      ) {
        dispatch(getDiscoverChannels());
      }
      setChannelList(getChannels(discoverChannels));
    } else if (tab === trendingTab.tab) {
      if (
        !trendingChannels.lastRequestAt ||
        moreThanTwoMinutesAgo(trendingChannels.lastRequestAt)
      ) {
        dispatch(getTrendingChannels());
      }
      setChannelList(getChannels(trendingChannels));
    }

    setTab(tab);
  };

  const handleSearch = useCallback(() => {
    setIsSearchForChannels(true);
    dispatch(searchChannels({ channelName: search }));
  }, [search, dispatch]);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSearch();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSearch, search]);

  useEffect(() => {
    dispatch(getTrendingChannels());
  }, [dispatch]);

  useEffect(() => {
    setChannelList(getChannels(followingChannels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingChannels]);

  useEffect(() => {
    setChannelList(getChannels(discoverChannels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discoverChannels]);

  useEffect(() => {
    setChannelList(getChannels(trendingChannels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendingChannels]);

  // useEffect(() => {
  //   console.log("CHANLIST CHANGING");
  // }, [channelList]);

  return (
    <div className="relative py-4 mx-auto w-full max-w-screen-xl rounded-md bg-background-secondary">
      {/* Alert to indicate invalid channel URL */}
      <div className="fixed mx-2 -my-4 z-50">
        {!!alert && <Alert duration={3000}>{alert}</Alert>}
      </div>
      <div className="py-4 mx-auto w-3/4 sm:w-1/2">
        <Input
          variant="channel"
          size="sm"
          value={search}
          placeholder={
            selectedPage === "channels"
              ? strings.channelSearchInput
              : strings.videoSearchInput
          }
          onChange={e => setSearch(e.target.value)}
          onClick={handleSearch}
        />
        {/* OPTION TABS */}
        <div className="flex justify-center h-auto">
          {tabs.map((img, idx) => {
            return (
              <Button
                styleNone
                styleNoneContent={img.tab}
                icon={img.icon}
                styleNoneContentClassName="font-bold text-sm"
                hoverable
                key={idx}
                className={`h-full p-4 space-x-2 ${
                  tabSelected === img.tab
                    ? "text-copy-highlight"
                    : "text-copy-secondary"
                }`}
                onClick={() => tabHandler(img.tab)}
                analyticsString={`${img.tab} Button: RecommendedView`}
              />
            );
          })}
        </div>
      </div>
      {isSearchForChannels ? (
        <div>
          <ChannelSearchList channelList={searchResultChannels} />
        </div>
      ) : (
        <div>
          {/* CARDS */}
          {selectedPage === "channels" ? (
            <>
              {isLoading === true ? (
                <ChannelCardList isLoading />
              ) : (
                <ChannelCardList
                  channelList={channelList}
                  isCollapsed={isCollapsed}
                  tabSelected={tabSelected}
                />
              )}
            </>
          ) : (
            selectedPage === "friends" && (
              <>
                {isLoading === true ? (
                  <VideoCardList isLoading />
                ) : (
                  <VideoCardList
                    videoList={channelList}
                    isCollapsed={isCollapsed}
                    tabSelected={tabSelected}
                  />
                )}
              </>
            )
          )}
        </div>
      )}
      <Helmet>
        <meta charSet="UFT-8" />
        <title>{strings.mainTitle}</title>
        <link rel="canonical" />
        <meta name="description" content={strings.mainDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
      </Helmet>
    </div>
  );
}

RecommendedChannels.propTypes = {
  list: PropTypes.array
};
RecommendedChannels.defaultProps = {
  list: []
};
export default RecommendedChannels;
