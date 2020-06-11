import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ChannelsPanel from "../comp/LeftPanels/ChannelsPanel";
import FriendsPanel from "../comp/LeftPanels/FriendsPanel";
import AnonymousSidebar from "../comp/LeftPanels/AnonymousSidebar";
import CollapsedPanel from "../comp/LeftPanels/CollapsedPanel";
import DefaultLayout from "../comp/DefaultLayout";
import ChannelHeader from "../comp/ChannelHeader";

import { testChannels, testRooms, testUsers } from "./seed-arrays";

export default {
  title: "LeftPanels",
  decorators: [withKnobs]
};

export const DefaultLayoutTest = () => {
  const { selectedChannel, setSelectedChannel } = useState(null);
  return (
    <DefaultLayout>
      <div className="flex">
        <div className="w-3/12">
          <ChannelsPanel
            channels={testChannels}
            friends={testUsers}
            selected={selectedChannel}
            handleSelect={id => setSelectedChannel(id)}
          />
        </div>
        <div className="w-6/12">
          <ChannelHeader />
        </div>
        <div className="w-3/12"></div>
      </div>
    </DefaultLayout>
  );
};

export const AnonymousSidebarTest = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <AnonymousSidebar link="https://popitalk.com" handleSubmit={handleSubmit} />
  );
};

export const ChannelsPanelTest = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="p-5 bg-secondaryBackground">
      <ChannelsPanel
        channels={testChannels}
        friends={testUsers}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
      />
    </div>
  );
};

export const FriendsPanelTest = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleProfile = () => {
    console.log("PROFILE");
  };

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  return (
    <div className="p-5 bg-secondaryBackground">
      <FriendsPanel
        roomsResults={testRooms}
        channels={testChannels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
        userSearchResults={testUsers}
        handleAccept={handleAccept}
        handleReject={handleReject}
        handleProfile={handleProfile}
      />
    </div>
  );
};

export function CollapsedPanelShow() {
  return <CollapsedPanel channels={testChannels} />;
}
