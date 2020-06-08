import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatActions() {
  const textareaRef = useRef();

  const handleChange = e => {
    e.target.style.height = "2.5rem";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    //dispatch(setChatDraft({ channelId, draft: e.target.value }));
  };

  return (
    <>
      <div className="flex items-center pt-1 space-x-1 md:space-x-2">
        <button className="w-10 h-10 p-2 text-center rounded-full bg-secondaryBackground hover:bg-highlightBackground focus:outline-none">
          <FontAwesomeIcon
            icon={["far", "smile"]}
            className="cursor-pointer text-highlightText"
            size="lg"
          />
        </button>
        <textarea
          className="w-full h-10 p-2 pl-4 overflow-hidden rounded-lg resize-none bg-secondaryBackground focus:outline-none text-secondaryText text-sm"
          placeholder="Type a message..."
          maxLength="240"
          ref={textareaRef}
          onChange={handleChange}
        />
        <div className="w-10 h-10 p-2 text-center rounded-full bg-secondaryBackground">
          <FontAwesomeIcon
            icon={["far", "images"]}
            className="cursor-pointer text-highlightText"
            size="lg"
          />
        </div>
        <button className="font-bold text-highlightText pr-2 text-sm focus:outline-none">
          Send
        </button>
      </div>
      {/** ADD EMOJI PICKER BELOW */}
    </>
  );
}

export default ChatActions;
