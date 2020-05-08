import React from "react";
import InfoCardList from "./InfoCardList";
import RoomInfoCard from "../InfoCards/RoomInfoCard";

export const getTimeFromMessage = room => {
  return (
    <div className="ml-auto self-start">
      <p className="text-sm text-secondaryText">{room.messageSent}</p>
    </div>
  );
};

export default function RoomsList({
  rooms,
  getControls = getTimeFromMessage,
  selected,
  handleSelect
}) {
  const itemRenderer = room => {
    return (
      <RoomInfoCard
        room={room}
        controls={getControls(room)}
        selected={selected}
        handleSelect={handleSelect}
      />
    );
  };

  return (
    <InfoCardList items={rooms} itemRenderer={itemRenderer} itemSize={72} />
  );
}
