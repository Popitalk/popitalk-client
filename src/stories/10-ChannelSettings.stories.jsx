import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Switch, Route } from "react-router";
import ChannelSettingsPanel from "../comp/Channel/ChannelSettingsPanel";
import ChannelSettingsSidebar from "../comp/Channel/ChannelSettingsSidebar";
import ChannelForm from "../comp/Channel/ChannelForm";
import { testUsers } from "./seed-arrays";

export default {
  title: "ChannelSettings",
  decorators: [withKnobs]
};

const handleProfile = id => {
  console.log(`PROFILE ${id}`);
};

const handleSubmit = data => {
  console.log(data);
};

export const ChannelSettingsPanelTest = () => {
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
      followers={testUsers}
      admins={testUsers}
      bannedUsers={testUsers}
      initialChannelForm={{
        name: "",
        description: "",
        private: false,
        icon: null,
        category: ""
      }}
      handleProfile={handleProfile}
      handleDeleteChannel={deleteChannel}
      addAdminHandler={addAdmin}
      removeAdminHandler={removeAdmin}
      kickUserHandler={kickUser}
      addBanHandler={addBan}
      removeBanHandler={removeBan}
      handleChannelFormSubmit={handleSubmit}
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

export const ChannelFormTest = () => {
  return (
    <div className="flex justify-center p-5 bg-secondaryBackground ">
      <ChannelForm
        initial={{
          name: "",
          description: "",
          private: false,
          icon: null,
          category: ""
        }}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
