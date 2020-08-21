import React from "react";
import PopupMenu from "../Controls/PopupMenu";
import FriendRequestButtons from "../Controls/FriendRequestButtons";
import ImageUpload from "../Controls/ImageUpload";
import Button from "../Controls/Button";
// import Resizer from "react-image-file-resizer";
// import ChannelCardList from "../Channel/ChannelCardList";

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

  const onChangePicture = e => {
    if (e.target.files[0]) {
      updateAvatar(URL.createObjectURL(e.target.files[0]));
      // updateAvatar(
      //   Resizer.imageFileResizer(
      //     e.target.files[0],
      //     300,
      //     300,
      //     "JPEG",
      //     100,
      //     0,
      //     uri => {
      //       console.log(uri);
      //     },
      //     "blob"
      //   )
      // );
    }
  };

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
      <div className="flex justify-center items-center space-x-8 py-6 px-12">
        {myProfile ? (
          <ImageUpload
            name="avatar"
            size="sm"
            icon={user.avatar}
            onUpload={onChangePicture}
            onRemove={() => {
              updateAvatar(null);
            }}
            disabled={updateUserApi.loading}
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
            <Button
              styleNone
              styleNoneContent={`${following} Following`}
              className="text-sm font-semibold"
              analyticsString="Show following list Button: ProfileModal"
            />
            <Button
              styleNone
              styleNoneContent={`${followers} Followers`}
              className="text-sm font-semibold"
              analyticsString="Show followers list Button: ProfileModal"
            />
            <Button
              styleNone
              styleNoneContent={`${friends} Friends`}
              className="text-sm font-semibold"
              analyticsString="Show friends list Button: ProfileModal"
            />
          </div>
        </div>
      </div>
      {updateUserApi.error && (
        <div className="flex justify-center">
          <p className="text-errorText text-sm">{updateUserApi.error}</p>
        </div>
      )}
      {/* <div className="text-md font-bold pb-4 text-primaryText">
        {myProfile
          ? "Videos You Watched"
          : `Videos You and ${user.username} Watched`}
      </div> */}
      {/* <div className="flex">
        <ChannelCardList channelList={recentVideos} />
      </div>
      <div className="text-md font-bold pb-8 text-primaryText">
        {myProfile
          ? "Channels You Follow"
          : `Channels You and ${user.username} Follow`}
      </div>
      <div className="flex">
        <ChannelCardList channelList={followedChannels} />
      </div> */}
    </div>
  );
}
