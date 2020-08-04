import React from "react";

function ChatHeader({ openFollowersList, followersCount, isRoom }) {
  return (
    <div className="flex items-center justify-between bg-primaryBackground p-2 pb-1 select-none">
      <button
        className="px-4 py-2 text-sm font-bold rounded-lg bg-secondaryBackground text-secondaryText transition transform ease-in-out hover:scale-105 duration-100 focus:outline-none"
        onClick={openFollowersList}
      >
        {isRoom ? "Private chat" : "Followers"}
        <span className="text-highlightText"> {followersCount} People</span>
      </button>
    </div>
  );
}

export default ChatHeader;
