import React from "react";
import Button from "./Controls/Button";
import "./VideoStatus.css";
import AvatarIcon from "./Controls/AvatarIcon";
import VideoStatus from "./VideoStatus";
import VideoPlayer from "./VideoPlayer";

export default function VideoSection({
  id,
  title,
  sourceChannelName,
  activeFriendViewers,
  status,
  inviteUsers,
  openProfile,
  isInvitingAllowed,
  dispatchPlay,
  dispatchPause,
  dispatchSkip
}) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* <p className="">Video Container for Video Player</p> */}
        <VideoPlayer
          dispatchPlay={dispatchPlay}
          dispatchPause={dispatchPause}
          dispatchSkip={dispatchSkip}
        />
      </div>
      <div className="flex flex-row justify-between bg-secondaryBackground pt-4">
        <section className="mx-4">
          {/* <p className="text-xs mx-1 text-base rainbow-text font-semibold">Playing</p> */}
          {status ? (
            <VideoStatus status={status} type="text" size="" string />
          ) : (
            <p></p>
          )}
          <p className="text-2xl text-primaryText">{title}</p>
          <p className="text-sm text-secondaryText">{sourceChannelName}</p>
        </section>
        <section className="flex flex-row items-top mx-px mr-4">
          {activeFriendViewers.map((friend, idx) => {
            return (
              <AvatarIcon
                key={idx}
                username={friend.name}
                avatar={friend.avatar}
                imageClick={() => openProfile(friend.id)}
                className="img h-8 w-8 rounded-circle mx-px transition transform ease-in-out hover:scale-110 duration-100"
              />
            );
          })}
          {isInvitingAllowed && (
            <Button icon="user-plus" size="sm" onClick={inviteUsers} />
          )}
        </section>
      </div>
    </div>
  );
}
