import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChannelCardList from "../components/ThumbnailCardLists/ChannelCardList.jsx";
import ChannelSearchList from "../components/ThumbnailCardLists/ChannelSearchList.jsx";
import VideoCardList from "../components/ThumbnailCardLists/VideoCardList.jsx";
import Input from "../components/Controls/Input.jsx";
import Alert from "../components/Alert";
import Button from "../components/Controls/Button.jsx";
import Helmet from "react-helmet";
import strings from "../helpers/localization";
import useBookSearch from "../helpers/useBookSearch";
import useGetChannels from "../containers/hooks/useGetChannels";

function RecommendedChannels({ selectedPage }) {
  const tabs = [
    { tab: strings.following },
    { tab: strings.discover },
    { tab: strings.trending }
  ];
  const [tabSelected, setTab] = useState(tabs[1].tab);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const alert = useSelector(state => state.ui.alert);
  const channels = useSelector(state => state.channels);
  const { id: ownId, channelIds } = useSelector(state => state.self);
  const { defaultIcon } = useSelector(state => state.general);

  const [isLoading] = useState(false);
  // Gets all channels and seperates following, discover and trending.
  const channelList = useGetChannels({
    channelIds,
    channels,
    defaultIcon,
    ownId
  });
  useEffect(() => {
    if (channelList.length > 0 && channelList[0].channels.length > 0)
      setTab(tabs[0].tab);
  }, [channels, channelList, tabs]);
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
          <div className="flex justify-start px-6 mt-4 h-auto">
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
