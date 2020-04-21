import React from "react";
import AvatarDeck from "./AvatarDeck";
import RoomIcon from "./RoomIcon";
import classnames from "classnames";

export default function ChannelsList({ channels, selected, handleSelect }) {
  const baseChannelClasses =
    "flex flex-row items-center p-2 bg-primaryBackground rounded-xl cursor-pointer";
  return (
    <div>
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
              size={channel.id === selected ? "lg" : "lg"}
            />
            <div className="ml-2">
              <p className="text-md font-semibold">{channel.name}</p>
              {channel.watching && (
                <p className="text-xs mt-1">online 1234</p>
                // <AvatarDeck
                //   size="sm"
                //   avatars={channel.avatars}
                //   className="mt-1"
                // />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
