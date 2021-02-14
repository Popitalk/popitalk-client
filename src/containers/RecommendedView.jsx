import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "react-helmet";
// Components
import Button from "../components/Controls/Button.jsx";
import LoadMoreButton from "../components/Controls/LoadMoreButton";
import ChannelCardList from "../components/ThumbnailCardLists/ChannelCardList.jsx";
import ChannelSearchList from "../components/ThumbnailCardLists/ChannelSearchList.jsx";
// Localization
import strings from "../localization/strings";
// Helpers
import { getChannels, updateChannelsList } from "../helpers/functions";
// Redux
import {
  getDiscoverChannels,
  getTrendingChannels,
  getFollowingChannels,
  searchChannels,
  setSelectedTab,
  setIsSearchForChannels,
  setChannelsList,
  getRecommendedChannelsTabs,
  setLeftPanelActiveTabChannels
} from "../redux/actions";

const followingTab = { tab: strings.following, icon: "home" };
const discoverTab = { tab: strings.discover, icon: "globe" };
const trendingTab = { tab: strings.trending, icon: "fire" };
function RecommendedChannels() {
  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.general.loggedIn);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const followingChannels = useSelector(state => state.followingChannels);
  const discoverChannels = useSelector(state => state.discoverChannels);
  const trendingChannels = useSelector(state => state.trendingChannels);
  const recommendedChannelsTabs = useSelector(
    state => state.recommendedChannels.tabs
  );
  const { defaultAvatar, defaultIcon } = useSelector(state => state.general);
  const { tabSelected, isSearchForChannels } = useSelector(state => state.ui);
  const channelsList = useSelector(state => state.channelSearch.channelsList);
  const { top: categories } = useSelector(state => state.categories);
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
  const channels = useSelector(state => state.channels);
  const { id: ownId, channelIds } = useSelector(state => state.self);

  const [search, setSearch] = useState("");

  const extraTabs = categories.map(name => ({
    tab: name
    // icon: "hashtag"
  }));

  let followingChannels1 = [];
  channelIds
    .map(channelId => ({
      id: channelId,
      ...channels[channelId]
    }))
    .forEach(channel => {
      if (
        channel.ownerId !== ownId &&
        channel.owner_id !== ownId &&
        channel.members &&
        channel.members.includes(ownId)
      ) {
        followingChannels1.push(channel);
      }
    });

  const tabs =
    loggedIn && followingChannels1.length !== 0
      ? [followingTab, discoverTab, trendingTab, ...extraTabs]
      : loggedIn && followingChannels1.length === 0
      ? [discoverTab, trendingTab, ...extraTabs]
      : [discoverTab, trendingTab, ...extraTabs];

  console.log("q123q" + followingChannels1.length);
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
    } else {
      updateChannelsList(
        dispatch,
        null,
        () => getRecommendedChannelsTabs({ categories: tab }),
        recommendedChannelsTabs,
        defaultAvatar,
        defaultIcon
      );
    }
  };

  const tabPressed = tab => {
    dispatch(setIsSearchForChannels(false));
    tabHandler(tab);
  };
  const handleSearch = useCallback(() => {
    dispatch(setIsSearchForChannels(true));
    dispatch(searchChannels({ channelName: search }));
    dispatch(setSelectedTab(false));
  }, [search, dispatch]);
  const channelCardClicked = () => {
    dispatch(setLeftPanelActiveTabChannels());
  };

  useEffect(() => {
    tabHandler(
      loggedIn && followingChannels1.length !== 0
        ? followingTab.tab
        : loggedIn && followingChannels1.length === 0
        ? trendingTab.tab
        : trendingTab.tab
    );
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
    const channels = getChannels(
      recommendedChannelsTabs,
      defaultAvatar,
      defaultIcon
    );
    dispatch(setChannelsList(channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommendedChannelsTabs]);

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
    <div className="relative w-full bg-background-secondary">
      {/* OPTION TABS */}
      <div className="flex justify-start overflow-x-auto w-full px-4 h-12 items-center bg-background-tertiary space-x-2">
        {tabs.map((img, idx) => {
          return (
            <Button
              styleNone
              styleNoneContent={img.tab}
              icon={img.icon}
              styleNoneIconClassName="text-sm"
              styleNoneContentClassName="font-bold text-sm"
              hoverable
              key={idx}
              className={`h-8 px-4 space-x-2 flex-shrink-0 rounded-md shadow-xs ${
                tabSelected === img.tab
                  ? "text-copy-tertiary bg-copy-link"
                  : "text-copy-secondary bg-background-primary"
              }`}
              onClick={() => tabPressed(img.tab)}
              analyticsString={`${img.tab} Button: RecommendedView`}
            />
          );
        })}
      </div>
      <div className="h-full overflow-y-scroll">
        {!isSearchForChannels && (
          <a href="https://medium.com/popitalk/how-to-use-popitalk-4b89c3f08089">
            <div className="relative flex justify-center w-full h-64 sm:h-84 xxl:h-100 bg-background-ad">
              <Button
                hoverable
                styleNone
                styleNoneContent={strings.howToUsePopitalk}
                icon="info-circle"
                className="bg-background-secondary absolute top-0 right-0 m-2 space-x-2 py-1 px-2 rounded-lg text-copy-primary text-sm"
              />
              <video
                className="flex object-cover w-full lg:w-3/5 object-bottom"
                autoPlay
                loop
                muted
              >
                <source src={strings.adVideo} type="video/mp4" />
              </video>
            </div>
          </a>
        )}
        <div className="px-4 py-6 mb-24">
          {isSearchForChannels ? (
            <ChannelSearchList channelList={searchResultChannels} />
          ) : (
            <>
              <ChannelCardList
                channelList={channelsList}
                isCollapsed={isCollapsed}
                tabSelected={tabSelected}
                onClick={() => tabPressed(strings.discover)}
                channelCardClicked={() => channelCardClicked()}
              />
              {tabSelected === followingTab.tab ? (
                <LoadMoreButton
                  channelStatus={followingStatus}
                  isLoadMore={followingChannels.isNextPage}
                  handleLoadMore={() =>
                    dispatch(
                      getFollowingChannels({ page: followingChannels.page })
                    )
                  }
                  recommendedView
                />
              ) : tabSelected === discoverTab.tab ? (
                <LoadMoreButton
                  channelStatus={discoverStatus}
                  isLoadMore={discoverChannels.isNextPage}
                  handleLoadMore={() =>
                    dispatch(
                      getDiscoverChannels({ page: discoverChannels.page })
                    )
                  }
                  recommendedView
                />
              ) : tabSelected === trendingTab.tab ? (
                <LoadMoreButton
                  channelStatus={trendingStatus}
                  isLoadMore={trendingChannels.isNextPage}
                  handleLoadMore={() =>
                    dispatch(
                      getTrendingChannels({ page: trendingChannels.page })
                    )
                  }
                  recommendedView
                />
              ) : (
                <> </>
              )}
            </>
          )}
        </div>
      </div>
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
