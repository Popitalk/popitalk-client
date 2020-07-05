import React from "react";
import ChannelCardList from "../Channel/ChannelCardList";
import PopupMenu from "../Controls/PopupMenu";
import FriendRequestButtons from "../Controls/FriendRequestButtons";
import ImageUpload from "../Controls/ImageUpload";

export default function ProfileModal({
  user,
  following,
  followers,
  friends,
  recentVideos,
  followedChannels,
  unfriendHandler,
  blockHandler,
  updateAvatar,
  updateUserApi
}) {
  // variants: self, friend, stranger, sentRequest, receivedRequest, blocked
  const variant = user.variant;

  const myProfile = variant === "self";

  let options = null;
  if (!myProfile) {
    options = [
      {
        name: variant === "blocked" ? "Unblock" : "Block",
        handler: blockHandler
      }
    ];
  }
  if (variant === "friend") {
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
      <div className="flex justify-start items-center space-x-8 py-8 px-12">
        {myProfile ? (
          <ImageUpload
            name="avatar"
            size="sm"
            icon={user.avatar}
            onUpload={e => {
              if (e.target.files[0]) {
                updateAvatar(URL.createObjectURL(e.target.files[0]));
              }
            }}
            onRemove={() => {
              updateAvatar(null);
            }}
            disabled={updateUserApi.loading}
            className=""
          />
        ) : (
          <img
            className="img w-32 h-32 rounded-circle"
            src={user.avatar}
            alt={`${user.username}'s avatar`}
          />
        )}
        <div className="pt-4">
          <div className="text-2xl font-semibold text-primaryText">
            {user.username}
          </div>
          <div className="text-md font-regular text-secondaryText">
            {`${user.firstName} ${user.lastName}`}
          </div>
          <div className="flex justify-center space-x-8 pt-4 pb-12">
            <button className="text-sm font-semibold focus:outline-none">{`${following} Following`}</button>
            <button className="text-sm font-semibold focus:outline-none">{`${followers} Followers`}</button>
            <button className="text-sm font-semibold focus:outline-none">{`${friends} Friends`}</button>
          </div>
        </div>
        <FriendRequestButtons user={user} />
      </div>
      {updateUserApi.error && (
        <div className="flex justify-center">
          <p className="text-errorText text-sm">{updateUserApi.error}</p>
        </div>
      )}
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
