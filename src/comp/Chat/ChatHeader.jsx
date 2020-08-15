import React from "react";
import Button from "../Controls/Button";

function ChatHeader({ openFollowersList, followersCount, isRoom }) {
  return (
    <div className="flex items-center justify-between bg-primaryBackground px-2 py-1 select-none">
      <Button
        hoverable
        styleNone
        styleNoneContent={`${followersCount} ${
          isRoom ? "room members" : "followers"
        }`}
        styleNoneContentClassName="text-sm text-secondaryText font-bold"
        className="px-4 py-2 rounded-lg bg-secondaryBackground"
        onClick={openFollowersList}
      />
    </div>
  );
}

export default ChatHeader;
