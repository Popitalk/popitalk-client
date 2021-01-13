import React, { useState } from "react";
import ButtonsList from "../Controls/ButtonsList";
import ChannelForm from "../Forms/ChannelForm";
import ManageUsers from "../ManageUsers";
import strings from "../../localization/strings";

export default function ChannelSettingsPanel({
  ownerId,
  followers,
  admins,
  bannedUsers,
  openDeleteChannelModal,
  handleProfile,
  initialChannelForm,
  handleChannelFormSubmit,
  channelFormLoading,
  channelFormError,
  addAdminHandler,
  removeAdminHandler,
  kickUserHandler,
  addBanHandler,
  removeBanHandler,
  alreadySelected
}) {
  const pageClasses = "w-full md:w-2/3 pt-12 px-12";
  const [selected, setSelected] = useState(0);

  const handleLink = index => {
    setSelected(index);
  };

  let buttons = [
    { text: strings.channelSettings },
    { text: strings.manageFollowers },
    { text: strings.manageAdmins },
    { text: strings.manageBannedUsers }
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
      <ChannelForm
        initial={initialChannelForm}
        handleSubmit={handleChannelFormSubmit}
        type="update"
        loading={channelFormLoading}
        error={channelFormError}
        channelSettings
        alreadySelected={alreadySelected}
        openDeleteChannelModal={openDeleteChannelModal}
        channelUpdate
      />
    );
  } else if (selected === 1) {
    const options = [
      { name: "Make Admin", handler: addAdminHandler },
      // { name: "Kick", handler: kickUserHandler },
      { name: "Ban", danger: true, handler: addBanHandler }
    ];

    paneContent = (
      <div className={pageClasses}>
        <ManageUsers
          category="Followers"
          ownerId={ownerId}
          users={followers}
          options={options}
          handleProfile={handleProfile}
          admins={admins}
        />
      </div>
    );
  } else if (selected === 2) {
    const options = [{ name: "Remove Admin", handler: removeAdminHandler }];

    paneContent = (
      <div className={pageClasses}>
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
      <div className={pageClasses}>
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
    <div className="h-full w-full bg-background-secondary flex flex-col items-center overflow-auto">
      <div className="px-8 w-full">
        <ButtonsList
          buttons={buttons}
          row
          freeform={"flex items-center text-sm bg-background-primary py-2 px-3"}
        />
      </div>
      <div className="flex w-full h-full overflow-y-auto">{paneContent}</div>
    </div>
  );
}
