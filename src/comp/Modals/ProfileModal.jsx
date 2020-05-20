import React from "react";
import Button from "../Button";
import QueueSection from "../QueueSection";
import PopupMenu from "../PopupMenu";

export default function ProfileModal({
  user,
  showAddFriend,
  myProfile,
  following,
  followers,
  friends,
  recentVideos,
  followedChannels,
  friendHandler,
  unfriendHandler,
  blockHandler
}) {
  let options = null;
  if (!myProfile) {
    options = [{ name: "Block", handler: blockHandler }];
  }
  if (!showAddFriend && !myProfile) {
    options.unshift({ name: "Unfriend", handler: unfriendHandler });
  }

  //TODO: Delete this
  const handlerChange = ({ oldIndex, newIndex }) => {
    console.log("test");
  };

  //TODO: Replace QueueSection with static list of videos when component exists
  return (
    <>
      {options ? (
        <div className="flex justify-end">
          <PopupMenu id={user.id} options={options} />
        </div>
      ) : (
        <></>
      )}
      <div className="flex justify-center items-center space-x-2">
        <img
          className="img w-32 h-32 rounded-circle"
          src={user.avatar}
          alt={`${user.username}'s avatar`}
        />
        <div>
          <div className="text-4xl font-semibold">{user.username}</div>
          <div className="text-md font-semibold">
            {`${user.firstName} ${user.lastName}`}
          </div>
        </div>
        {showAddFriend && !myProfile ? (
          <Button
            onClick={() => friendHandler(user.id)}
            size="sm"
            leftIcon="user-plus"
            className="mb-4"
          >
            Add Friend
          </Button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex justify-center space-x-2 py-8">
        <div className="text-sm">{`${following} Following`}</div>
        <div className="text-sm">{`${followers} Followers`}</div>
        <div className="text-sm">{`${friends} Friends`}</div>
      </div>
      <div className="text-md font-bold pb-2">
        {myProfile
          ? "Videos You Watched"
          : `Videos You and ${user.username} Watched`}
      </div>
      <div className="flex">
        <QueueSection queueList={recentVideos} handlerChange={handlerChange} />
      </div>
      <div className="text-md font-bold pb-2 pt-8">
        {myProfile
          ? "Channels You Follow"
          : `Channels You and ${user.username} Follow`}
      </div>
      <div className="flex">
        <QueueSection
          queueList={followedChannels}
          handlerChange={handlerChange}
        />
      </div>
    </>
  );
}
