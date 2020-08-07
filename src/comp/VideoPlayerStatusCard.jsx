import React from "react";
import AvatarIcon from "./Controls/AvatarIcon";

export default function VideoCard({
  avatar,
  message,
  username,
  systemMessage
}) {
  return (
    <button className="flex w-auto h-auto bg-primaryBackground rounded-lg shadow-lg bg-opacity-95 hover:bg-opacity-100 focus:outline-none">
      <div className="flex flex-row pl-4 pr-8 py-2">
        <div className="flex flex-row items-center space-x-2 text-sm">
          {avatar && message && username && (
            <>
              <AvatarIcon avatar={avatar} className="w-10 h-10 rounded-full" />
              {/* Andrew skipped to 0:11 */}
              <p className="flex text-primaryText">
                {username} {message}
              </p>
              <p>|</p>
            </>
          )}
          {/* Starting in 10s */}
          <p className="flex text-primaryText font-bold">{systemMessage}</p>
        </div>
      </div>
    </button>
  );
}
