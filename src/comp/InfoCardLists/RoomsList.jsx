import React from "react";
import InfoCardList from "./InfoCardList";
import RoomInfoCard from "../InfoCards/RoomInfoCard";

export default function RoomsList({ rooms, selected, handleSelect }) {
  const itemRenderer = room => {
    return (
      <RoomInfoCard
        room={room}
        selected={selected}
        handleSelect={handleSelect}
      />
    );
  };

  return (
    <InfoCardList items={rooms} itemRenderer={itemRenderer} itemSize={72} />
  );
}
