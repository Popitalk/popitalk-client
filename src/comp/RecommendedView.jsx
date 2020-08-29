import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChannelCardList from "./Channel/ChannelCardList.jsx";
import ChannelSearchList from "./Channel/ChannelSearchList.jsx";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Controls/Input.jsx";
import Alert from "../comp/Alert";
import Button from "./Controls/Button.jsx";
import Helmet from "react-helmet";
import strings from "../helpers/localization";
import useBookSearch from "../helpers/useBookSearch";

function RecommendedChannels({ list, selectedPage }) {
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const alert = useSelector(state => state.ui.alert);
  const channels = useSelector(state => state.channels);
  const { id: ownId, channelIds } = useSelector(state => state.self);
  const { defaultIcon } = useSelector(state => state.general);

  const [isLoading, setIsLoading] = useState(false);

  let followingChannels = [];
  let discoverChannels = [];
  let trendingChannels = [];
  const allChannelIds = Object.keys(channels);

  channelIds
    .map(channelId => ({
      id: channelId,
      ...channels[channelId],
      icon: channels[channelId].icon || defaultIcon
    }))
    .forEach(channel => {
      if (
        channel.ownerId !== ownId &&
        channel.owner_id !== ownId &&
        channel.members
      ) {
        if (channel.members.includes(ownId)) {
          followingChannels.push(channel);
        }
      }
    });

  allChannelIds
    .map(channelId => ({
      id: channelId,
      ...channels[channelId],
      icon: channels[channelId].icon || defaultIcon
    }))
    .forEach(channel => {
      if (channel.speciality === "discover") {
        discoverChannels.push(channel);
      } else if (channel.speciality === "trending") {
        trendingChannels.push(channel);
      }
    });

  // removing the seeded and putting in the actual following list
  list = [];
  list.push({ title: "Discover", channels: discoverChannels });
  list.push({ title: "Trending", channels: trendingChannels });
  let tabs = [{ tab: strings.discover }, { tab: strings.trending }];
  let initialTab = "# Discover";

  if (followingChannels.length > 0) {
    tabs = [{ tab: strings.following }, ...tabs];
    list.push({ title: "Following", channels: followingChannels });
    initialTab = "# Following";
  }
  const [tabSelected, setTab] = useState(initialTab);

  // Infinite scroll
  // search is the Input Value. query is the search term triggered in handleSearch
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books } = useBookSearch(query, pageNumber);

  const handleSearch = useCallback(() => {
    setQuery(search);
    setPageNumber(1);
  }, [search]);

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
  }, [handleSearch, query]);

  return (
    <div className="relative py-4 mx-auto w-full max-w-screen-xl rounded-md bg-secondaryBackground">
      <Helmet>
        <meta charSet="UFT-8" />
        <title>{strings.title}</title>
        <meta name="description" content={strings.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {/* Alert to indicate invalid channel URL */}
      <div className="fixed mx-2 -my-4 z-50">
        {!!alert && <Alert duration={3000}>{alert}</Alert>}
      </div>
      <div className="mx-2 pt-6 mx-auto w-3/4 sm:w-1/2">
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
      </div>
      {query !== "" ? (
        <div>
          <ChannelSearchList channelList={books} />
        </div>
      ) : (
        <div>
          {/* OPTION TABS */}
          <div className="flex justify-start px-6 mt-8 h-auto">
            {tabs.map((img, idx) => {
              return (
                <Button
                  styleNone
                  styleNoneContent={img.tab}
                  styleNoneContentClassName="font-bold text-lg"
                  hoverable
                  key={idx}
                  className={`h-full p-4 ${
                    tabSelected === img.tab
                      ? "text-highlightText cursor-default"
                      : "text-secondaryText cursor-pointer"
                  }`}
                  onClick={() => setTab(img.tab)}
                  analyticsString={`${img.tab} Button: RecommendedView`}
                />
              );
            })}
          </div>
          {/* CARDS */}
          {selectedPage === "channels" ? (
            <>
              {isLoading === true ? (
                <ChannelCardList isLoading />
              ) : (
                <ChannelCardList
                  channelList={list}
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
                    videoList={list}
                    isCollapsed={isCollapsed}
                    tabSelected={tabSelected}
                  />
                )}
              </>
            )
          )}
        </div>
      )}
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
