import React from "react";
import RoomIcon from "../RoomIcon";
import InfoCard from "../InfoCards/InfoCard";
import InfoCardList from "./InfoCardList";

export default function ChannelsList({ channels, selected, handleSelect }) {
  const itemRenderer = channel => {
    const roomIcon = (
      <RoomIcon
        ids={[channel.id]}
        images={[channel.icon]}
        watching={channel.watching}
        size="md"
      />
    );

    return (
      <InfoCard
        avatar={roomIcon}
        title={channel.name}
        subtitle={`${channel.numOnline} online`}
        subtitleSize="xs"
        backgroundColor={selected === channel.id ? "highlight" : "transparent"}
        cardClick={() => handleSelect(channel.id)}
      />
    );
  };

  return <InfoCardList items={channels} itemRenderer={itemRenderer} />;
}
