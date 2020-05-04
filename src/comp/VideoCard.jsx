import React from "react";
import RoomIcon from "./RoomIcon";
import AvatarDeck from "./AvatarDeck";
import Button from "./Button";

export default function VideoCard({
  id,
  title,
  channelName,
  views,
  timeFromUpload,
  name,
  thumbnail = "somedefaultimagehere"
}) {
  const leftInfo = `${channelName} | ${views}`;
  const rightInfo = `${timeFromUpload}`;
  return (
    <div className="flex flex-row items-center justify-center h-48 max-w-xs rounded-xl hover:shadow-xl">
      <div className="flex-grow flex flex-row justify-center h-48 p-3 relative">
        <img
          src={thumbnail}
          alt="channel"
          className="img absolute top-0 h-full rounded-xl z-10"
        />

        <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay z-20 rounded-xl" />
        <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl z-20">
          <p className="text-lg font-regular text-tertiaryText mb-1 z-30">
            {title}
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-xs font-regular text-tertiaryText">{leftInfo}</p>
            <p className="text-xs font-regular text-tertiaryText">
              {rightInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
