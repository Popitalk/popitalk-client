import React from "react";
import ButtonsList from "../Controls/ButtonsList";
import MenuButton from "../Controls/MenuButton";
import strings from "../../helpers/localization";

export default function ChannelSettingsSidebar({
  buttons,
  openDeleteChannelModal
}) {
  return (
    <div className="py-8 px-6 bg-background-primary rounded-xl shadow-sm flex flex-col justify-between">
      <ButtonsList buttons={buttons} />
      <div className="mt-1">
        <MenuButton
          danger={true}
          text={strings.deleteChannel}
          onClick={openDeleteChannelModal}
        />
      </div>
    </div>
  );
}
