import React from "react";
import Button from "../Controls/Button";
import "../VideoStatus.css";
import AvatarIcon from "../Controls/AvatarIcon";
import VideoStatus from "../VideoStatus";

export default function ChannelDescription({
  id,
  name,
  icon,
  description,
  adminList,
  threshold = 4,
  status,
  handleFollow,
  isMember,
  handleUnfollow,
  handleListAdmins
}) {
  return (
    <div className="flex flex-col mb-12">
      <div className="flex flex-row justify-center bg-secondaryBackground p-4 ml-8">
        <AvatarIcon
          username={name}
          avatar={icon}
          className="img h-40 w-40 rounded-circle mx-px"
        />
        <section className="mx-8">
          {/* <p className="text-xs mx-1">NOW PLAYING</p> */}
          {status && <VideoStatus status={status} type="text" />}
          <p className="text-3xl mx-1 font-bold">{name}</p>
          <p className="text-sm my-2 mx-1">{description}</p>
          <div className="flex flex-row items-center mt-4">
            <p className="text-xs mx-1"> ADMIN </p>
            {adminList.map((admin, idx) => {
              if (idx < threshold) {
                return (
                  <AvatarIcon
                    key={idx}
                    username={admin.name}
                    avatar={admin.avatar}
                    className="img h-6 w-6 rounded-circle mx-px"
                    limit={3}
                  />
                );
              } else if (idx === adminList.length - 1) {
                const totalLeft = adminList.length - threshold;
                return (
                  <button
                    key={idx}
                    className={`img h-8 w-8 rounded-circle mx-px bg-primaryBackground text-xs shadow-md focus:outline-none`}
                    onClick={handleListAdmins}
                  >{`+${totalLeft}`}</button>
                );
              } else {
                return null;
              }
            })}
          </div>
        </section>
        <div className="ml-4">
          {isMember ? (
            <Button
              size="sm"
              shape="pill"
              className="ml-auto bg-disabledBackground shadow-xs hover:shadow-none text-secondaryText"
              background="bgColor"
              onClick={handleUnfollow}
            >
              Following
            </Button>
          ) : (
            <Button
              size="sm"
              shape="pill"
              className="ml-auto"
              onClick={handleFollow}
            >
              Follow
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
