import React from "react";
import Text from "./Text";
import RoomInfoCard from "./InfoCards/RoomInfoCard";
import Button from "./Button";
import { getTimeFromMessage } from "../comp/InfoCardLists/RoomsList";

export default function RoomExistsModal({
  room,
  openRoomHandler,
  createNewHandler
}) {
  return (
    <div className="flex flex-col items-center">
      <Text variant="text1">This room already exists</Text>
      <Text variant="small1">Click below to enter the existing room</Text>
      <div className="w-full py-4">
        <RoomInfoCard
          room={room}
          controls={getTimeFromMessage(room)}
          handleSelect={openRoomHandler}
          addBorder={true}
        />
      </div>
      <Button onClick={createNewHandler}>Create New</Button>
    </div>
  );
}
