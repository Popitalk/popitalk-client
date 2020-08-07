import React from "react";
import AvatarIcon from "./Controls/AvatarIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoCard({
  avatar,
  message,
  username,
  systemMessage,
  icon
}) {
  return (
    <button className="flex items-center justify-center px-8 py-4 bg-black bg-opacity-75 rounded-xl shadow-xl space-x-4">
      {avatar && message && username && (
        <>
          <AvatarIcon avatar={avatar} className="w-10 h-10 rounded-full" />
          {/* Andrew skipped to 0:11 */}
          <p className="text-tertiaryText text-2xl">
            {username} {message}
          </p>
          <p>|</p>
        </>
      )}
      {/* Starting in 10s */}
      <div className="flex items-center justify-center text-tertiaryText text-2xl font-bold space-x-4">
        {icon && <FontAwesomeIcon icon={icon} />}
        <p>{systemMessage}</p>
      </div>
    </button>
  );
}
