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
  openProfile,
  isInvitingAllowed
}) {
  return (
    <div className="flex flex-col">
      <div className="h-84 bg-black">
        <p className="">Video Container for Video Player</p>
      </div>
      <div className="flex flex-row justify-between bg-secondaryBackground pt-4">
        <section className="mx-4">
          {/* <p className="text-xs mx-1 text-base rainbow-text font-semibold">Playing</p> */}
          {status ? (
            <VideoStatus status={status} type="text" size="" string />
          ) : (
            <p></p>
          )}
          <p className="text-2xl mx-1 text-primaryText">{title}</p>
          <p className="text-sm -mt-1 mx-1 text-primaryText">
            {sourceChannelName}
          </p>
        </section>
        <section className="flex flex-row items-top mx-px mr-4">
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
          {isInvitingAllowed && (
            <Button
              icon="user-plus"
              size="sm"
              style={{ transform: "scaleX(-1)" }}
              onClick={inviteUsers}
            />
          )}
        </section>
      </div>
    </div>
  );
}
