import React from "react";
import RoomIcon from "../RoomIcon";
import InfoCard from "../InfoCards/InfoCard";

export default function RoomInfoCard({
  room,
  selected,
  controls,
  handleSelect,
  addBorder
}) {
  const roomIcon = (
    <RoomIcon
      images={room.images}
      self={room.self}
      online={room.online}
      watching={room.watching}
      notifications={room.notifications}
      size="xl"
    />
  );

  return (
    <InfoCard
      avatar={roomIcon}
      controls={controls}
      title={room.name}
      subtitle={room.message}
      subtitleColor={room.notifications ? "black" : "gray"}
      boldFont={room.notifications}
      addBorder={addBorder}
      backgroundColor={selected === room.id ? "highlight" : "white"}
      padding="sm"
      cardClick={handleSelect ? () => handleSelect(room.id) : null}
    />
  );
}
