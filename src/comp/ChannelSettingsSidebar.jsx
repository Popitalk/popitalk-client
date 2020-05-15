import React from "react";
import ButtonsList from "./ButtonsList";
import MenuButton from "./MenuButton";

export default function ChannelSettingsSidebar({
  buttons,
  handleDeleteChannel
}) {
  return (
    <div className="h-full py-8 px-4 object-center bg-secondaryBackground rounded-xl shadow-channel flex flex-col justify-between">
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
