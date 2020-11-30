import React from "react";
import PopupMenu from "../Controls/PopupMenu";
import FriendRequestButtons from "../Controls/FriendRequestButtons";
import ImageUpload from "../Controls/ImageUpload";
import Button from "../Controls/Button";
import ReactTooltip from "react-tooltip";
import strings from "../../helpers/localization";

export default function ProfileModal({
  user,
  following,
  friends,
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
    <div className="relative flex justify-center p-4 py-8 overflow-auto">
      <div className="absolute flex items-center space-x-2 top-0 right-0 m-4">
        <FriendRequestButtons user={user} tooltipPlace="left" size="sm" />
        {options && (
          <div>
            <PopupMenu id={user.id} options={options} />
          </div>
        )}
      </div>
      <div className="relative flex flex-col justify-center items-center space-y-4 py-4 px-6">
        {myProfile ? (
          <ImageUpload
            name="avatar"
            size="sm"
            icon={user.avatar}
            onUpload={url => {
              updateAvatar(url);
            }}
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
        {updateUserApi.error && (
          <div className="flex justify-center">
            <p className="text-copy-error text-xs">{updateUserApi.error}</p>
          </div>
        )}
        <div className="flex flex-col justify-center space-y-1">
          <p className="text-2xl font-semibold flex justify-center text-copy-primary">
            {user.username}
          </p>
          <p className="flex justify-center text-copy-secondary">
            {`${user.firstName} ${user.lastName}`}
          </p>
          <div className="flex space-x-8 py-8 text-copy-primary">
            <Button
              styleNone
              styleNoneContent={`${following} ${strings.followingChannels}`}
              className="text-sm text-bold font-semibold"
              analyticsString="Show following list Button: ProfileModal"
            />
            <Button
              styleNone
              styleNoneContent={`${friends} ${strings.friendsText}`}
              className="text-sm text-bold font-semibold"
              analyticsString="Show friends list Button: ProfileModal"
            />
          </div>
        </div>
      </div>
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-md rounded-md py-1 px-3 opacity-100"
        arrowColor="transparent"
      />
    </div>
  );
}
