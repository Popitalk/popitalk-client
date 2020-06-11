import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";
import VideoStatus from "./VideoStatus";

export default function VideoSection({
  id,
  title,
  sourceChannelName,
  activeFriendViewers,
  status,
  inviteUsers,
  openProfile
}) {
  return (
    <div className="flex flex-col">
      <div className="h-64 bg-black">
        <p className="">Video Container for Video Player</p>
      </div>
      <div className="flex flex-row justify-between bg-secondaryBackground pt-2">
        <section className="mx-2">
          {/* <p className="text-xs mx-1 text-base rainbow-text font-semibold">Playing</p> */}
          {status ? <VideoStatus status={status} type="text" /> : <p></p>}
          <p className="text-4xl mx-1">{title}</p>
          <p className="text-sm -mt-2 mx-1">{sourceChannelName}</p>
        </section>
        <section className="flex flex-row items-top">
          {activeFriendViewers.map((friend, idx) => {
            return (
              <AvatarIcon
                key={idx}
                username={friend.name}
                avatar={friend.avatar}
                imageClick={() => openProfile(friend.id)}
                className="img h-8 w-8 rounded-circle mx-px"
              />
            );
          })}
          <Button
            icon="user-plus"
            size="sm"
            style={{ transform: "scaleX(-1)" }}
            onClick={inviteUsers}
            className="mx-px mr-2"
          />
        </section>
      </div>
    </div>
  );
}
