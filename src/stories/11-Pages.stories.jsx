import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import WelcomePage from "../comp/Pages/WelcomePage";
import ChannelMainPage from "../comp/Pages/ChannelMainPage";
import {
  testChannels,
  testRooms,
  testUsers,
  testUserMinimal,
  testMessages
} from "./seed-arrays";

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

export default {
  title: "Pages",
  decorators: [withKnobs]
};

export const WelcomePageShow = () => {
  return <WelcomePage />;
};

export const ChannelMainPageShow = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  return (
    <ChannelMainPage
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
