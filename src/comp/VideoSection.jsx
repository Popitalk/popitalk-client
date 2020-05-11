import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function VideoSection({
  id,
  name,
  sourceChannelName,
  activeFriendViewers
}) {
  return (
    <div className="flex flex-col">
      <div className="h-64 bg-black">
        <p className="">Video Container for Video Player</p>
      </div>
      <div className="flex flex-row justify-between bg-secondaryBackground pt-10">
        <section>
          <p className="text-xs mx-1">NOW PLAYING</p>
          <p className="text-4xl mx-1">{name}</p>
          <p className="text-sm -mt-2 mx-1">{sourceChannelName}</p>
        </section>
        <section className="flex flex-row items-center">
          {activeFriendViewers.map((friend, idx) => {
            return (
              <AvatarIcon
                key={idx}
                username={friend.name}
                avatar={friend.avatar}
                className="img h-8 w-8 rounded-circle mx-px"
              />
            );
          })}
          <Button
            icon="user-plus"
            size="sm"
            style={{ transform: "scaleX(-1)" }}
            className="mx-px mr-2"
          />
        </section>
      </div>
    </div>
  );
}
