import React from "react";
import Button from "../Controls/Button";
import "../VideoStatus.css";
import AvatarIcon from "../Controls/AvatarIcon";
import { openProfileModal } from "../../redux/actions";
import { useDispatch } from "react-redux";

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
  // Opening profile modal
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col mb-12">
      <div className="flex justify-end my-4">
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
      <div className="flex flex-row justify-center items-center bg-secondaryBackground">
        {status === "playing" ? (
          <div className="p-1 bg-gradient-r-primary rounded-circle">
            <div className="p-1 bg-secondaryBackground rounded-circle">
              <AvatarIcon
                username={name}
                avatar={icon}
                className="img h-32 w-32 rounded-circle mx-px flex-shrink-0"
              />
            </div>
          </div>
        ) : (
          <AvatarIcon
            username={name}
            avatar={icon}
            className="img h-32 w-32 rounded-circle mx-px flex-shrink-0"
          />
        )}
        <section className="mx-8">
          <p className="text-2xl font-bold truncate-2-lines">{name}</p>
          <p className="text-sm my-2">{description}</p>
          <div className="flex flex-row items-center mt-4">
            <p className="text-xs mr-2"> ADMINS </p>
            {adminList.map((admin, idx) => {
              if (idx < threshold) {
                return (
                  <div
                    key={idx}
                    onClick={() => dispatch(openProfileModal(admin.id))}
                    role="button"
                    className="flex flex-shrink-0"
                  >
                    <AvatarIcon
                      key={idx}
                      username={admin.name}
                      avatar={admin.avatar}
                      className="img h-6 w-6 rounded-circle mx-px transition transform ease-in-out hover:scale-110 duration-100"
                      limit={3}
                    />
                  </div>
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
      </div>
    </div>
  );
}
