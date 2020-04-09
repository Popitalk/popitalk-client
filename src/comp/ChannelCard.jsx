import React from "react";
import RoomIcon from "./RoomIcon";
import AvatarDeck from "./AvatarDeck";
import Button from "./Button";
import YoutubeLogo from "../assets/youtube-logo.png";

export default function ChannelCard({
  id,
  name,
  icon,
  live,
  videoTitle,
  videoSource,
  videoThumbnail = "somedefaultimagehere",
  avatars,
  handleFollow
}) {
  return (
    <div className="flex flex-row items-center justify-center max-w-xs shadow-lg rounded-lg bg-gradient-br-primary hover:shadow-xl">
      <div className={`flex flex-col h-full w-full${live ? " p-2" : ""}`}>
        <div className="flex-grow flex flex-row justify-center bg-linkText h-56 p-3 relative rounded-t-lg">
          <img
            src={videoThumbnail}
            alt="channel"
            className="img absolute top-0 h-full rounded-t-lg z-10"
          />
          <p className="text-2xl font-bold absolute bottom-0 mb-3 z-30">
            {videoTitle}
          </p>
          <p className="flex flex-row items-center justify-center text-md font-bold bg-secondaryBackground text-highlightText px-2 rounded-pill absolute top-0 left-0 mt-3 ml-3 select-none z-30">
            Playing
          </p>
          <img
            src={YoutubeLogo}
            alt="youtube"
            className="img absolute top-0 right-0 w-8 h-8 mt-3 mr-3 z-30"
          />
          <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay z-20" />
        </div>
        <div className="p-3 bg-primaryBackground rounded-b-lg">
          <div className="flex flex-row items-center mb-4">
            <RoomIcon
              ids={[id]}
              images={[icon]}
              watching={live}
              className="mr-3"
            />
            <p className="text-lg font-bold">{name}</p>
          </div>
          <div className="flex flex-row items-center">
            <AvatarDeck avatars={avatars} />
            <Button
              size="sm"
              shape="pill"
              className="ml-auto"
              onClick={handleFollow}
            >
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
