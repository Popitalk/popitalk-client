import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChannelCardList from "./Channel/ChannelCardList.jsx";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Controls/Input.jsx";
import Alert from "../comp/Alert";
import Button from "./Controls/Button.jsx";
import Helmet from "react-helmet";

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
      if (channel.ownerId !== ownId && channel.owner_id !== ownId) {
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
  list.push({ title: "following", channels: followingChannels });
  list.push({ title: "discover", channels: discoverChannels });
  list.push({ title: "trending", channels: trendingChannels });

  const [tabSelected, setTab] = useState("# following");
  const tabs = [
    { tab: "# following" },
    { tab: "# discover" },
    { tab: "# trending" }
  ];

  const [search, setSearch] = useState("");
  return (
    <div className="relative py-4 mx-auto w-full max-w-screen-xl rounded-md bg-secondaryBackground">
      <Helmet>
        <meta charSet="UFT-8" />
        <title>Popitalk</title>
        <meta
          name="description"
          content="Search and Discover Trending Channels. Popitalk is exactly what you need with your friends to watch together."
        />
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
              ? "Search for a channel"
              : "Search for a video"
          }
          onChange={e => setSearch(e.target.value)}
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
