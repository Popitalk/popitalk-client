import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import WelcomePage from "../comp/Pages/WelcomePage";
import MainPage from "../comp/Pages/MainPage";

import {
  testChannels,
  testRooms,
  testUsers,
  testUserMinimal,
  testMessages
} from "./seed-arrays";
import ChannelQueuePage from "../comp/Pages/ChannelQueuePage";

const list = [
  {
    title: "Following Channels",
    channels: testChannels
  },
  {
    title: "Recommended Channels",
    channels: testChannels
  },
  {
    title: "Channels Friends are following",
    channels: testChannels
  },
  {
    title: "Trending Channels right now",
    channels: testChannels
  }
];

const friendsList = [
  {
    title: "Videos friends are watching",
    channels: testChannels
  },
  {
    title: "Recommended",
    channels: testChannels
  },
  {
    title: "Trending right now",
    channels: testChannels
  }
];

export default {
  title: "Pages",
  decorators: [withKnobs]
};

export const WelcomePageShow = () => {
  return <WelcomePage />;
};

export const ChannelQueuePageShow = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  return (
    <ChannelQueuePage
      list={friendsList}
      channelPanelProps={{
        channels: testChannels,
        friends: testUsers,
        selected: selectedChannel,
        handleSelect: id => setSelectedChannel(id)
      }}
    />
  );
};

export const MainPageShow = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  return (
    <MainPage
      list={list}
      channelPanelProps={{
        channels: testChannels,
        friends: testUsers,
        selected: selectedChannel,
        handleSelect: id => setSelectedChannel(id)
      }}
    />
  );
};
