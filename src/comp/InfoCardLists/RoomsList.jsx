import React from "react";
import RoomIcon from "../RoomIcon";
import InfoCardList from "./InfoCardList";
import InfoCard from "../InfoCards/InfoCard";

export default function RoomsList({ rooms, selected, handleSelect }) {
  const itemRenderer = room => {
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
        backgroundColor={selected === room.id ? "highlight" : "transparent"}
        padding="sm"
        cardClick={() => handleSelect(room.id)}
      />
    );
  };

  return (
    <InfoCardList items={rooms} itemRenderer={itemRenderer} itemSize={72} />
  );
}
