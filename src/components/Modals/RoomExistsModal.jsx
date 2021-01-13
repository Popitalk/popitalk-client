import React from "react";
import RoomInfoCard from "../InfoCards/RoomInfoCard";
import Button from "../Controls/Button";
import strings from "../../localization/strings";

export default function RoomExistsModal({
  room,
  openRoomHandler,
  createNewHandler
}) {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="font-bold text-copy-primary">{strings.thisRoomExists}</p>
      <p className="text-xs py-1 text-copy-secondary">
        {strings.enterExistingRoom}
      </p>
      <div className="w-full py-4">
        <RoomInfoCard
          room={room}
          handleSelect={openRoomHandler}
          addBorder={true}
        />
      </div>
      <Button
        actionButton
        onClick={createNewHandler}
        analyticsString="Create New Room Button: RoomExistsModal"
      >
        {strings.createNew}
      </Button>
    </div>
  );
}
