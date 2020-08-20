import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChannelCardList from "./Channel/ChannelCardList.jsx";
import ChannelCard from "./Channel/ChannelCard.jsx";
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
        (channel && channel.members
          ? !!channel.members.filter(memberId => memberId === ownId).length
          : null) &&
        !(channel.ownerId === ownId || channel.owner_id === ownId)
      ) {
        followingChannels.push(channel);
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
  list.push({ title: "Following", channels: followingChannels });
  list.push({ title: "Discover", channels: discoverChannels });
  list.push({ title: "Trending", channels: trendingChannels });

  const [tabSelected, setTab] = useState("# Following");
  const tabs = [
    { tab: strings.following },
    { tab: strings.discover },
    { tab: strings.trending }
  ];

  // Infinite scroll
  // search is the Input Value. query is the search term triggered in handleSearch
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const handleSearch = useCallback(() => {
    setQuery(search);
    setPageNumber(1);
  }, [search]);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
          console.log("visible");
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );

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
      {/* OPTION TABS */}
      <div className="flex justify-start px-6 mt-8 h-8 space-x-2">
        {tabs.map((img, idx) => {
          return (
            <Button
              styleNone
              styleNoneContent={img.tab}
              key={idx}
              className={`flex flex-row items-center font-bold h-full px-4 shadow-sm transition transform ease-in-out hover:scale-105 duration-100 rounded-full truncate ${
                tabSelected === img.tab
                  ? "text-highlightText cursor-default shadow-none bg-secondaryBackground"
                  : "text-secondaryText cursor-pointer bg-primaryBackground"
              }`}
              onClick={() => setTab(img.tab)}
              analyticsString={`${img.tab} Button: RecommendedView`}
            />
          );
        })}
      </div>
      <div>
        {books.map((channel, index) => (
          <ChannelCard key={channel.id} {...channel} />
        ))}
        <div>{loading && "Loading..."}</div>
        <div>{error && "error..."}</div>
      </div>
      {/* CARDS */}
      {selectedPage === "channels" ? (
        <ChannelCardList
          channelList={list}
          isCollapsed={isCollapsed}
          tabSelected={tabSelected}
        />
      ) : (
        selectedPage === "friends" && (
          <VideoCardList
            videoList={list}
            isCollapsed={isCollapsed}
            tabSelected={tabSelected}
          />
        )
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
