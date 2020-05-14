import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function ChannelDescription({
  id,
  name,
  icon,
  description,
  adminList,
  threshold = 4
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center align-middle bg-secondaryBackground mx-8 p-4">
        <AvatarIcon
          username={name}
          avatar={icon}
          className="img h-40 w-40 rounded-circle mx-px"
        />
        <section className="mx-8">
          <p className="text-xs mx-1">NOW PLAYING</p>
          <p className="text-4xl mx-1 font-bold">{name}</p>
          <p className="text-xs mx-1">{description}</p>
          <div className="flex flex-row items-center mt-2">
            <p className="text-xs mx-1"> ADMIN </p>
            {adminList.map((admin, idx) => {
              if (idx < threshold) {
                return (
                  <AvatarIcon
                    key={idx}
                    username={admin.name}
                    avatar={admin.avatar}
                    className="img h-8 w-8 rounded-circle mx-px"
                    limit={3}
                  />
                );
              } else if (idx === adminList.length - 1) {
                const totalLeft = adminList.length - threshold;
                return (
                  <button
                    className={`img h-8 w-8 rounded-circle mx-px bg-primaryBackground text-xs shadow-md`}
                  >{`+${totalLeft}`}</button>
                );
              }
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
