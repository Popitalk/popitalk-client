import React, { useState } from "react";
import ChannelSettingsSidebar from "./ChannelSettingsSidebar";
import ChannelForm from "./ChannelForm";
import ManageUsers from "../ManageUsers";

export default function ChannelSettingsPanel({
  ownerId,
  followers,
  admins,
  bannedUsers,
  handleDeleteChannel,
  handleProfile,
  initialChannelForm,
  handleChannelFormSubmit,
  channelFormLoading,
  channelFormError,
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
      <div className="w-full overflow-auto flex justify-center px-8 pt-12">
        <ChannelForm
          initial={initialChannelForm}
          handleSubmit={handleChannelFormSubmit}
          type="update"
          loading={channelFormLoading}
          error={channelFormError}
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
      <div className="w-2/3 overflow-auto flex justify-center pt-8">
        <ManageUsers
          category="Followers"
          ownerId={ownerId}
          users={followers}
          options={options}
          handleProfile={handleProfile}
        />
      </div>
    );
  } else if (selected === 2) {
    const options = [{ name: "Remove Admin", handler: removeAdminHandler }];

    paneContent = (
      <div className="w-2/3 overflow-auto flex justify-center pt-8">
        <ManageUsers
          category="Admins"
          ownerId={ownerId}
          users={admins}
          options={options}
          handleProfile={handleProfile}
        />
      </div>
    );
  } else {
    const options = [{ name: "Remove Ban", handler: removeBanHandler }];

    paneContent = (
      <div className="w-2/3 overflow-auto flex justify-center pt-8">
        <ManageUsers
          category="Banned"
          ownerId={ownerId}
          users={bannedUsers}
          options={options}
          handleProfile={handleProfile}
        />
      </div>
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
      <div className="flex w-full justify-center text-primaryText">
        {paneContent}
      </div>
    </div>
  );
}
