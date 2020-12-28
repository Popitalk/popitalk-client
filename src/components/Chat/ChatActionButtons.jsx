import React from "react";
import Button from "../Controls/Button";

function ChatActionButtons({ isOpen = false, onClick, icon, gif }) {
  return (
    <div className="w-10 h-10">
      <Button
        hoverable
        styleNone
        icon={icon}
        styleNoneContent={gif && "GIF"}
        styleNoneContentClassName={
          isOpen
            ? "text-hover-highlight font-bold"
            : "text-copy-highlight font-bold"
        }
        styleNoneIconClassName={`text-xl ${
          isOpen ? "text-hover-highlight" : "text-copy-highlight"
        }`}
        onClick={onClick}
        className={`${
          isOpen && "bg-copy-highlight"
        } w-10 h-10 flex items-center justify-center rounded-lg`}
        analyticsString="Emoji Button: ChatActions"
      />
    </div>
  );
}

export default ChatActionButtons;
