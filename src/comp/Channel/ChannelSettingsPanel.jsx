import React, { useState } from "react";
import ChannelSettingsSidebar from "./ChannelSettingsSidebar";
import ChannelForm from "./ChannelForm";
import ManageUsers from "../ManageUsers";

export default function ChannelSettingsPanel({
  followers,
  admins,
  bannedUsers,
  handleDeleteChannel,
  handleProfile,
  initialChannelForm,
  handleChannelFormSubmit,
  channelFormLoading,
  addAdminHandler,
  removeAdminHandler,
  kickUserHandler,
  addBanHandler,
  removeBanHandler
}) {
  const [selected, setSelected] = useState(0);

  const handleLink = index => {
    setSelected(index);
  };

  let buttons = [
    {
      text: "Channel Settings"
    },
    {
      text: "Manage Followers"
    },
    {
      text: "Manage Admins"
    },
    {
      text: "Manage Banned Users"
    }
  ];

  buttons = buttons.map((b, i) => {
    return {
      ...b,
      onClick: () => handleLink(i, b.link),
      selected: i === selected
    };
  });

  let paneContent = <></>;
  if (selected === 0) {
    paneContent = (
      <div className="w-full overflow-auto flex justify-center">
        <ChannelForm
          initial={initialChannelForm}
          handleSubmit={handleChannelFormSubmit}
          loading={channelFormLoading}
        />
      </div>
    );
  } else if (selected === 1) {
    const options = [
      { name: "Make Admin", handler: addAdminHandler },
      { name: "Kick", handler: kickUserHandler },
      { name: "Ban", danger: true, handler: addBanHandler }
    ];

    paneContent = (
      <ManageUsers
        category="Followers"
        users={followers}
        options={options}
        handleProfile={handleProfile}
      />
    );
  } else if (selected === 2) {
    const options = [{ name: "Remove Admin", handler: removeAdminHandler }];

    paneContent = (
      <ManageUsers
        category="Admins"
        users={admins}
        options={options}
        handleProfile={handleProfile}
      />
    );
  } else {
    const options = [{ name: "Remove Ban", handler: removeBanHandler }];

    paneContent = (
      <ManageUsers
        category="Banned"
        users={bannedUsers}
        options={options}
        handleProfile={handleProfile}
      />
    );
  }

  return (
    <div className="h-full w-full px-2 bg-secondaryBackground flex items-center md:flex-row md:items-stretch overflow-auto">
      <div className="flex-none p-4">
        <ChannelSettingsSidebar
          buttons={buttons}
          handleDeleteChannel={handleDeleteChannel}
        />
      </div>
      <div className="flex w-full justify-center px-20 pt-8 text-primaryText">
        {paneContent}
      </div>
    </div>
  );
}
