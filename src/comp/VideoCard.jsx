import React from "react";
import RoomIcon from "./RoomIcon";
import AvatarDeck from "./AvatarDeck";
import Button from "./Button";

export default function VideoCard({
  id,
  title,
  views,
  timeFromUpload,
  thumbnail = "somedefaultimagehere",
  handleShare,
  handleWatch
}) {
  const leftInfo = `${views}`;
  const rightInfo = `${timeFromUpload}`;
  return (
    <div className="cursor-pointer w-full group">
      <div className="group flex-grow flex flex-row justify-center rounded-lg overflow-hidden items-center pb-16/9 w-full relative group-hover:shadow-xl transition-all ease-in-out duration-100">
        <img
          src={thumbnail}
          alt="video-thumbnail"
          className="img absolute top-0 w-full h-full object-cover z-10"
        />
        <div className="absolute top-0 right-0 p-4 z-40 opacity-0 group-hover:opacity-100">
          <Button size="sm" icon="share" shape="square" className="px-0 py-4" />
        </div>
      </div>
      <div className="w-full px-3 py-2 rounded-b-xl z-20 text-secondaryText">
        <div className="flex items-center">
          <p className="text-xs font-regular">{leftInfo}</p>
          <span className="mx-1">•</span>
          <p className="text-xs font-regular">{rightInfo}</p>
        </div>
        <p className="text-lg font-semibold text-primaryText mb-1 z-30">
          {title}
        </p>
      </div>
    </div>
  );
}
