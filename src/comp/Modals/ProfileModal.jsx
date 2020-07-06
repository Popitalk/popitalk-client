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
    <div className="py-8 px-12 overflow-auto">
      <div className="flex justify-center items-center space-x-8 pt-6 pb-8 px-12">
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
        <div className="pt-8">
          <div className="flex flex-row">
            <p className="text-2xl font-semibold text-primaryText mr-4">
              {user.username}
            </p>
            <FriendRequestButtons user={user} />
            {options ? (
              <div className="flex ml-48">
                <PopupMenu id={user.id} options={options} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="text-md font-regular text-secondaryText">
            {`${user.firstName} ${user.lastName}`}
          </div>
          <div className="flex space-x-8 pt-4 pb-12 text-primaryText">
            <button className="text-sm font-semibold focus:outline-none">{`${following} Following`}</button>
            <button className="text-sm font-semibold focus:outline-none">{`${followers} Followers`}</button>
            <button className="text-sm font-semibold focus:outline-none">{`${friends} Friends`}</button>
          </div>
        </div>
      </div>
      {updateUserApi.error && (
        <div className="flex justify-center">
          <p className="text-errorText text-sm">{updateUserApi.error}</p>
        </div>
      )}
      <div className="text-md font-bold pb-4 text-primaryText">
        {myProfile
          ? "Videos You Watched"
          : `Videos You and ${user.username} Watched`}
      </div>
      <div className="flex">
        <ChannelCardList channelList={recentVideos} />
      </div>
      <div className="text-md font-bold pb-4 pt-8 text-primaryText">
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
