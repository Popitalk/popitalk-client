import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import MainPage from "../comp/Pages/MainPage";
import {
  testChannels1,
  testUsers,
  channelsList,
  friendsList
} from "./seed-arrays";
import ChannelQueuePage from "../comp/Pages/ChannelQueuePage";

export default {
  title: "Pages",
  decorators: [withKnobs]
};

export const ChannelQueuePageShow = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  return (
    <ChannelQueuePage
      list={friendsList}
      channelPanelProps={{
        channels: testChannels1,
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
        channels: testChannels1,
        friends: testUsers,
        selected: selectedChannel,
        handleSelect: id => setSelectedChannel(id)
      }}
    />
  );
};
