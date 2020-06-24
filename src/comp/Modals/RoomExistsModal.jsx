import React from "react";
import RoomInfoCard from "../InfoCards/RoomInfoCard";
import Button from "../Button";
import { getTimeFromMessage } from "../InfoCardLists/RoomsList";

export default function RoomExistsModal({
  room,
  openRoomHandler,
  createNewHandler,
  subtitle
}) {
  return (
    <div className="flex flex-col items-center p-4">
      <p>This room already exists</p>
      <p>Click below to enter the existing room</p>
      <div className="w-full py-4">
        <RoomInfoCard
          room={room}
          controls={getTimeFromMessage(room)}
          handleSelect={openRoomHandler}
          subtitle={subtitle}
          addBorder={true}
        />
      </div>
      <Button onClick={createNewHandler}>Create New</Button>
    </div>
  );
}
