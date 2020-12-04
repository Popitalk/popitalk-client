import React from "react";
import ReactTooltip from "react-tooltip";

import PopupMenu from "../Controls/PopupMenu";
import FriendRequestButtons from "../Controls/FriendRequestButtons";
import ImageUpload from "../Controls/ImageUpload";
import Button from "../Controls/Button";
import Spinner from "../Spinner";
import strings from "../../helpers/localization";

const ProfileModal = ({
  user,
  following,
  friends,
  unfriendHandler,
  blockHandler,
  updateAvatar,
  status
}) => {
  // variants: self, friend, stranger, sentRequest, receivedRequest, blocked
  const variant = user.variant;
  const myProfile = variant === "self";

  const options = !myProfile
    ? [
        {
          name: variant === "blocked" ? "Unblock" : "Block",
          handler: blockHandler
        }
      ]
    : null;

  if (variant === "friend") {
    options.unshift({ name: "Unfriend", handler: unfriendHandler });
  }

  let ModalContent;

  if (status === "loading") {
    ModalContent = <Spinner />;
  } else if (status === "error") {
    ModalContent = (
      <div className="flex justify-center items-center h-full">
        <p className="text-copy-error text-lg">Something went wrong</p>
      </div>
    );
  } else {
    ModalContent = (
      <>
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
              // disabled={updateUserApi.loading}
            />
          ) : (
            <img
              className="img w-32 h-32 rounded-circle"
              src={user.avatar}
              alt={user.username}
            />
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
      </>
    );
  }

  return (
    <div className="relative flex justify-center h-chatBox p-4 py-8 overflow-auto">
      {ModalContent}
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-md rounded-md py-1 px-3 opacity-100"
        arrowColor="transparent"
      />
    </div>
  );
};

export default ProfileModal;
