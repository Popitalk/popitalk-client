import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import InfoCard from "../InfoCards/InfoCard";
import moment from "moment";

export default function RoomInfoCard({
  room,
  selected,
  controls,
  handleSelect,
  addBorder
}) {
  const images = room.members.map(m => m.avatar);
  const name = room.members.map(m => m.username).join();
  const subtitleAndDate = room.lastMessageContent
    ? room.lastMessageContent + " · " + moment(room.lastMessageAt).fromNow()
    : null;

  const roomIcon = (
    <RoomIcon
      images={images}
      self={room.type === "self"}
      online={room.online}
      watching={room.watching}
      notifications={room.notifications}
      size="lg"
    />
  );

  return (
    <InfoCard
      avatar={roomIcon}
      controls={controls}
      title={name}
      subtitle={subtitleAndDate}
      subtitleColor={room.notifications ? "black" : "gray"}
      boldFont={room.notifications}
      addBorder={addBorder}
      backgroundColor={selected === room.id ? "highlight" : "white"}
      padding="xs"
      cardClick={handleSelect ? () => handleSelect(room.id) : null}
    />
  );
}
