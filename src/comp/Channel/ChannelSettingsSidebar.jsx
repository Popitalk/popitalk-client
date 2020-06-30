import React from "react";
import ButtonsList from "../Controls/ButtonsList";
import MenuButton from "../Controls/MenuButton";

export default function ChannelSettingsSidebar({
  buttons,
  handleDeleteChannel
}) {
  return (
    <div className="h-full py-8 px-8 object-center bg-secondaryBackground rounded-xl shadow-2xl flex flex-col justify-between">
      <div>
        <ButtonsList buttons={buttons} />
      </div>
      <MenuButton
        danger={true}
        text="Delete Channel"
        onClick={handleDeleteChannel}
      />
    </div>
  );
}
