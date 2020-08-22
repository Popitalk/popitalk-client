import React from "react";
import RoomIcon from "../Controls/RoomIcon";
import InfoCard from "../InfoCards/InfoCard";
import moment from "moment";
import "moment/locale/ko";
import strings from "../../helpers/localization";

export default function RoomInfoCard({
  room,
  selected,
  controls,
  handleSelect,
  addBorder,
  isLoading
}) {
  const images = room.members.map(m => m.avatar);
  const name = room.members.map(m => " " + m.username).join();
  let subtitleAndDate = "";
  try {
    JSON.parse(room.lastMessageContent);
    subtitleAndDate = room.lastMessageContent
      ? moment(room.lastMessageAt).locale(strings.location).fromNow() + " · GIF"
      : "";
  } catch {
    subtitleAndDate = room.lastMessageContent
      ? moment(room.lastMessageAt).locale(strings.location).fromNow() +
        " · " +
        room.lastMessageContent
      : "";
  }

  const roomIcon = (
    <RoomIcon
      images={images}
      self={room.type === "self"}
      online={room.online}
      watching={room.watching}
      notifications={room.notifications}
      size="lg"
      isLoading={isLoading}
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
      isLoading={isLoading}
    />
  );
}
