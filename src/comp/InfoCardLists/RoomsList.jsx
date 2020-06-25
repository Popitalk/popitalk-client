import React from "react";
import InfoCardList from "./InfoCardList";
import RoomInfoCard from "../InfoCards/RoomInfoCard";

export default function RoomsList({
  rooms,
  getControls,
  selected,
  handleSelect,
  ...rest
}) {
  const itemRenderer = room => {
    return (
      <RoomInfoCard
        room={room}
        controls={getControls ? getControls(room) : null}
        selected={selected}
        handleSelect={handleSelect}
      />
    );
  };

  return (
    <InfoCardList
      items={rooms}
      itemRenderer={itemRenderer}
      itemSize={70}
      {...rest}
    />
  );
}
