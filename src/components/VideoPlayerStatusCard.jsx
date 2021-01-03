import React from "react";
import AvatarIcon from "./Controls/AvatarIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoPlayerStatusCard({
  avatar,
  message,
  username,
  systemMessage,
  icon
}) {
  return (
    <div className="flex items-center justify-center px-6 py-4 bg-background-secondary bg-opacity-10 rounded-md shadow-xl space-x-4 z-20 select-none">
      {avatar && message && username && (
        <>
          <AvatarIcon avatar={avatar} className="w-10 h-10 rounded-full" />
          {/* Andrew skipped to 0:11 */}
          <p className="text-copy-primary">
            {username} {message}
          </p>
          <p>|</p>
        </>
      )}
      {/* Starting in 10s */}
      <div className="flex items-center justify-center text-copy-primary text-sm space-x-4">
        {icon && <FontAwesomeIcon icon={icon} />}
        <p>{systemMessage}</p>
      </div>
    </div>
  );
}
