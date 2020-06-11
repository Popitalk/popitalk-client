import React from "react";
import Button from "../Button";
import ChannelCardList from "../Channel/ChannelCardList";
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
  blockHandler,
  unblockHandler
}) {
  let options = null;
  if (!myProfile) {
    options = [{ name: "Block", handler: blockHandler }];
  }
  if (!showAddFriend && !myProfile) {
    options.unshift({ name: "Unfriend", handler: unfriendHandler });
  }

  return (
    <div className="p-8 overflow-auto">
      {options ? (
        <div className="flex justify-end">
          <PopupMenu id={user.id} options={options} />
        </div>
      ) : (
        <></>
      )}
      <div className="flex justify-center items-center space-x-6 py-4">
        <img
          className="img w-32 h-32 rounded-circle"
          src={user.avatar}
          alt={`${user.username}'s avatar`}
        />
        <div>
          <div className="text-4xl font-semibold">{user.username}</div>
          <div className="text-md font-regular">
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
      <div className="flex justify-center space-x-8 pt-4 pb-12">
        <div className="text-md font-semibold">{`${following} Following`}</div>
        <div className="text-md font-semibold">{`${followers} Followers`}</div>
        <div className="text-md font-semibold">{`${friends} Friends`}</div>
      </div>
      <div className="text-md font-bold pb-4">
        {myProfile
          ? "Videos You Watched"
          : `Videos You and ${user.username} Watched`}
      </div>
      <div className="flex">
        <ChannelCardList channelList={recentVideos} />
      </div>
      <div className="text-md font-bold pb-4 pt-8">
        {myProfile
          ? "Channels You Follow"
          : `Channels You and ${user.username} Follow`}
      </div>
      <div className="flex">
        <ChannelCardList channelList={followedChannels} />
      </div>
    </div>
  );
}
