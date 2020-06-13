import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatHeader() {
  return (
    <div className="flex items-center justify-between bg-primaryBackground">
      <div className="px-4 py-2 text-sm font-bold rounded-lg bg-secondaryBackground text-secondaryText shadow-md">
        Private chat
        <span className="text-highlightText"> 7 People</span>
      </div>
      <FontAwesomeIcon
        icon="ellipsis-h"
        className="cursor-pointer text-secondaryText hover:text-highlightText"
      />
    </div>
  );
}

export default ChatHeader;
