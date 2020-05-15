import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Switch, Route } from "react-router";
import ChannelSettingsPanel from "../comp/ChannelSettingsPanel";
import ChannelSettingsSidebar from "../comp/ChannelSettingsSidebar";
import ChannelForm from "../comp/ChannelForm";

export default {
  title: "ChannelSettings",
  decorators: [withKnobs]
};

const handleProfile = id => {
  console.log(`PROFILE ${id}`);
};

export const ChannelSettingsPanelTest = () => {
  const users = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "stranger"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "sentRequest"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "friend"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "self"
    }
  ];

  const deleteChannel = () => {
    console.log("Deleting channel");
  };

  const addAdmin = id => {
    console.log(`Adding admin ${id}`);
  };

  const removeAdmin = id => {
    console.log(`Removing admin ${id}`);
  };

  const kickUser = id => {
    console.log(`Kicking user ${id}`);
  };

  const addBan = id => {
    console.log(`Banning user ${id}`);
  };

  const removeBan = id => {
    console.log(`Unbanning user ${id}`);
  };

  return (
    <ChannelSettingsPanel
      followers={users}
      admins={users}
      bannedUsers={users}
      initialChannelForm={{
        name: "",
        description: "",
        private: false,
        icon: null
      }}
      handleProfile={handleProfile}
      handleDeleteChannel={deleteChannel}
      addAdminHandler={addAdmin}
      removeAdminHandler={removeAdmin}
      kickUserHandler={kickUser}
      addBanHandler={addBan}
      removeBanHandler={removeBan}
    />
  );
};

export const ChannelSettingsSidebar123 = () => {
  const [input, setInput] = useState("");

  const handleLink = link => {};

  const buttons = [
    {
      text: "Channel Settings",
      onClick: handleLink("/general"),
      selected: false
    },
    {
      text: "Manage Admins",
      onClick: handleLink("/admins"),
      selected: false
    },
    {
      text: "Manage Banned Users",
      onClick: handleLink("/banned"),
      selected: false
    },
    {
      text: "Manage Members",
      onClick: handleLink("/members"),
      selected: false
    }
  ];

  return (
    <Switch>
      <Route path="/">
        <ChannelSettingsSidebar buttons={buttons} />
      </Route>
    </Switch>
  );
};

export const ChannelForm123 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="flex justify-center p-5 bg-secondaryBackground ">
      <ChannelForm
        initial={{
          name: "",
          description: "",
          private: false,
          icon: null
        }}
      />
    </div>
  );
};
