import React from "react";
import { useSelector } from "react-redux";

import Button from "../Controls/Button";
import AvatarIcon from "../Controls/AvatarIcon";
import AdminAvatarContainer from "../../containers/AdminAvatarContainer";
import strings from "../../localization/strings";

export default function ChannelDescription({
  name,
  icon,
  description,
  adminIds,
  threshold = 4,
  status,
  handleFollow,
  handleUnfollow,
  handleListAdmins,
  openProfileModal,
  isMember,
  isOwner
}) {
  const { loggedIn } = useSelector(state => state.general);

  return (
    <div className="flex flex-col mb-12">
      {!isOwner && (
        <div className="flex justify-end my-4">
          {loggedIn && (
            <Button
              actionButton
              size="sm"
              shape="pill"
              className={
                isMember
                  ? "ml-auto bg-background-disabled shadow-xs hover:shadow-none text-copy-secondary"
                  : "ml-auto"
              }
              background={isMember ? "bgColor" : "primary"}
              onClick={isMember ? handleUnfollow : handleFollow}
              analyticsString={
                isMember
                  ? "Following Button: Channel Description"
                  : "Follow Button: Channel Description"
              }
            >
              {isMember ? strings.followingButton : strings.followButton}
            </Button>
          )}
        </div>
      )}
      <div className="flex flex-row justify-start items-center bg-background-secondary">
        <AvatarIcon
          username={name}
          avatar={icon}
          watching={status === "playing" ? true : false}
          className="img h-32 w-32 rounded-circle mx-px flex-shrink-0"
        />
        <section className="mx-8">
          <p className="text-2xl font-bold text-copy-primary truncate-2-lines">
            {name}
          </p>
          <p className="text-sm my-2 text-copy-primary">{description}</p>
          <div className="flex flex-row items-center mt-4">
            <p className="text-xs mr-2 text-copy-primary">{strings.admins}</p>
            {adminIds.slice(0, threshold).map(adminId => (
              <div
                key={adminId}
                onClick={() => {
                  if (loggedIn) {
                    openProfileModal(adminId);
                  }
                }}
                role="button"
                className="flex flex-shrink-0"
              >
                <AdminAvatarContainer
                  adminId={adminId}
                  className="img h-6 w-6 rounded-circle mx-px transition transform ease-in-out hover:scale-110 duration-100"
                />
              </div>
            ))}
            {adminIds.length > threshold && (
              <Button
                styleNone
                styleNoneContent={`+${adminIds.length - threshold}`}
                className="img h-8 w-8 rounded-circle mx-px bg-background-primary text-xs shadow-md"
                onClick={handleListAdmins}
                analyticsString="Followers List Button: ChannelDescription"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
