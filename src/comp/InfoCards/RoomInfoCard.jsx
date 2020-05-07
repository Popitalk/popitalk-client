import React from "react";
import RoomIcon from "../RoomIcon";
import InfoCard from "../InfoCards/InfoCard";

export default function RoomInfoCard({
  room,
  selected,
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

  const messageSent = (
    <div className="ml-auto self-start">
      <p className="text-sm text-secondaryText">{room.messageSent}</p>
    </div>
  );

  return (
    <InfoCard
      avatar={roomIcon}
      controls={messageSent}
      title={room.name}
      subtitle={room.message}
      subtitleColor={room.notifications ? "black" : "gray"}
      boldFont={room.notifications}
      addBorder={addBorder}
      backgroundColor={selected === room.id ? "highlight" : "white"}
      padding="sm"
      cardClick={() => handleSelect(room.id)}
    />
  );
}
