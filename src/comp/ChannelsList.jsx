import React from "react";
import AvatarDeck from "./AvatarDeck";
import RoomIcon from "./RoomIcon";
import classnames from "classnames";

export default function ChannelsList({ channels, selected, handleSelect }) {
  const baseChannelClasses =
    "flex flex-row items-center p-2 bg-primaryBackground hover:bg-secondaryBackground rounded-lg cursor-pointer";
  return (
    <div className="children:not-first:mt-1">
      {channels.map(channel => {
        const channelClasses = classnames(baseChannelClasses, {
          "bg-secondaryBackground cursor-default": selected === channel.id
        });

        return (
          <div
            key={channel.id}
            className={channelClasses}
            role="button"
            onClick={() => handleSelect(channel.id)}
          >
            <RoomIcon
              ids={[channel.id]}
              images={[channel.icon]}
              watching={channel.watching}
              size={channel.id === selected ? "lg" : "sm"}
            />
            <div className="ml-4">
              <p className="font-bold">{channel.name}</p>
              {channel.watching && (
                <AvatarDeck
                  size="sm"
                  avatars={channel.avatars}
                  className="mt-2"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
