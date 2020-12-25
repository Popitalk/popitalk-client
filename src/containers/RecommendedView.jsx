import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "react-helmet";

import ChannelCardList from "../components/ThumbnailCardLists/ChannelCardList.jsx";
import ChannelSearchList from "../components/ThumbnailCardLists/ChannelSearchList.jsx";
import Input from "../components/Controls/Input.jsx";
import Button from "../components/Controls/Button.jsx";
import Spinner from "../components/Spinner";
import strings from "../helpers/localization";
import { getChannels, updateChannelsList } from "../helpers/functions";
import {
  getDiscoverChannels,
  getTrendingChannels,
  getFollowingChannels,
  searchChannels,
  setSelectedTab,
  setIsSearchForChannels,
  setChannelsList
} from "../redux/actions";

const followingTab = { tab: strings.following, icon: "home" };
const discoverTab = { tab: strings.discover, icon: "globe" };
const trendingTab = { tab: strings.trending, icon: "fire" };

const LoadMoreButton = ({ channelStatus, isLoadMore, handleLoadMore }) =>
  channelStatus === "loading" ? (
    <Spinner />
  ) : isLoadMore ? (
    <div className="flex justify-center items-center pt-12 pb-8">
      <div className="h-px bg-background-quaternary w-full mx-2" />
      <Button
        actionButton
        leftIcon="arrow-down"
        size="sm"
        hoverable
        className="bg-background-primary text-copy-highlight text-sm font-bold flex-shrink-0 space-x-2"
        onClick={handleLoadMore}
      >
        {strings.loadMoreButton}
      </Button>
      <div className="h-px bg-background-quaternary w-full mx-2" />
    </div>
  ) : null;
function RecommendedChannels() {
  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.general.loggedIn);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const followingChannels = useSelector(state => state.followingChannels);
  const discoverChannels = useSelector(state => state.discoverChannels);
  const trendingChannels = useSelector(state => state.trendingChannels);
  const { defaultAvatar, defaultIcon } = useSelector(state => state.general);
  const { tabSelected, isSearchForChannels } = useSelector(state => state.ui);
  const channelsList = useSelector(state => state.channelSearch.channelsList);
  const searchResultChannels = useSelector(
    state => state.channelSearch.channels
  );
  const { status: followingStatus } = useSelector(
    state => state.api.followingChannels
  );
  const { status: discoverStatus } = useSelector(
    state => state.api.discoverChannels
  );
  const { status: trendingStatus } = useSelector(
    state => state.api.trendingChannels
  );

  const [search, setSearch] = useState("");

  const tabs = loggedIn
    ? [followingTab, discoverTab, trendingTab]
    : [discoverTab, trendingTab];

  const tabHandler = tab => {
    dispatch(setSelectedTab(tab));

    if (tab === followingTab.tab) {
      updateChannelsList(
        dispatch,
        followingChannels.lastRequestAt,
        () => getFollowingChannels({ page: followingChannels.page }),
        followingChannels,
        defaultAvatar,
        defaultIcon
      );
    } else if (tab === discoverTab.tab) {
      updateChannelsList(
        dispatch,
        discoverChannels.lastRequestAt,
        () => getDiscoverChannels({ page: discoverChannels.page }),
        discoverChannels,
        defaultAvatar,
        defaultIcon
      );
    } else if (tab === trendingTab.tab) {
      updateChannelsList(
        dispatch,
        trendingChannels.lastRequestAt,
        () => getTrendingChannels({ page: trendingChannels.page }),
        trendingChannels,
        defaultAvatar,
        defaultIcon
      );
    }
  };

  const handleSearch = useCallback(() => {
    dispatch(setIsSearchForChannels(true));
    dispatch(searchChannels({ channelName: search }));
  }, [search, dispatch]);

  useEffect(() => {
    tabHandler(loggedIn ? followingTab.tab : trendingTab.tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (search === "") dispatch(setIsSearchForChannels(false));
  }, [dispatch, search]);

  useEffect(() => {
    if (!isSearchForChannels) {
      setSearch("");
    }
  }, [isSearchForChannels]);

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
    const channels = getChannels(discoverChannels, defaultAvatar, defaultIcon);
    dispatch(setChannelsList(channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discoverChannels]);

  useEffect(() => {
    const channels = getChannels(trendingChannels, defaultAvatar, defaultIcon);
    dispatch(setChannelsList(channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendingChannels]);

  useEffect(() => {
    if (loggedIn) {
      const channels = getChannels(
        followingChannels,
        defaultAvatar,
        defaultIcon
      );
      dispatch(setChannelsList(channels));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingChannels]);

  return (
    <div className="relative p-4 w-full rounded-md bg-background-secondary">
      <div className="py-4 mx-auto w-3/4 sm:w-1/2">
        <Input
          variant="channel"
          size="sm"
          value={search}
          placeholder={strings.channelSearchInput}
          onChange={e => setSearch(e.target.value)}
          onClick={handleSearch}
        />
        {/* OPTION TABS */}
        <h2 className="flex justify-center h-auto">
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
                onClick={() => {
                  dispatch(setIsSearchForChannels(false));
                  tabHandler(img.tab);
                }}
                analyticsString={`${img.tab} Button: RecommendedView`}
              />
            );
          })}
        </h2>
      </div>
      {isSearchForChannels ? (
        <ChannelSearchList channelList={searchResultChannels} />
      ) : (
        <>
          <ChannelCardList
            channelList={channelsList}
            isCollapsed={isCollapsed}
            tabSelected={tabSelected}
          />
          {tabSelected === followingTab.tab ? (
            <LoadMoreButton
              channelStatus={followingStatus}
              isLoadMore={followingChannels.isNextPage}
              handleLoadMore={() =>
                dispatch(getFollowingChannels({ page: followingChannels.page }))
              }
            />
          ) : tabSelected === discoverTab.tab ? (
            <LoadMoreButton
              channelStatus={discoverStatus}
              isLoadMore={discoverChannels.isNextPage}
              handleLoadMore={() =>
                dispatch(getDiscoverChannels({ page: discoverChannels.page }))
              }
            />
          ) : (
            <LoadMoreButton
              channelStatus={trendingStatus}
              isLoadMore={trendingChannels.isNextPage}
              handleLoadMore={() =>
                dispatch(getTrendingChannels({ page: trendingChannels.page }))
              }
            />
          )}
        </>
      )}
      <Helmet>
        <meta charSet="UFT-8" />
        <link rel="canonical" />
        <title>{strings.mainTitle}</title>
        <meta name="description" content={strings.mainDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
        <meta
          data-react-helmet="true"
          property="og:title"
          content={strings.mainTitle}
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content={strings.mainDescription}
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content={
            strings.location === "kr"
              ? "https://i.ibb.co/NFyVwQL/og-Image-KR.png"
              : "https://i.ibb.co/h1tcFRP/ogImage.png"
          }
        />
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
