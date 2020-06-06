import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import WelcomePage from "../comp/Pages/WelcomePage";
import MainPage from "../comp/Pages/MainPage";

import {
  testChannels,
  testUsers,
  channelsList,
  friendsList
} from "./seed-arrays";
import ChannelQueuePage from "../comp/Pages/ChannelQueuePage";

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
      list={channelsList}
      channelPanelProps={{
        channels: testChannels,
        friends: testUsers,
        selected: selectedChannel,
        handleSelect: id => setSelectedChannel(id)
      }}
    />
  );
};
