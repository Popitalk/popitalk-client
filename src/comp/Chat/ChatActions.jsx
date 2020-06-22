import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";

// TODO: Currently all emojis are pull from public CDN, which is slow and might even be unreliable,
// Maybe in the future the emojis should be hosted by us?
// Github issue which explains the implementation https://github.com/ealush/emoji-picker-react/issues/157

function ChatActions({ handleSendMessage }) {
  const [messageContent, setMessageContent] = useState("");
  const [emojiIsOpen, setEmojiIsOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const textareaRef = useRef();
  const sendButton = useRef();

  useEffect(() => {
    // Must be keydown, with keyup the event is not prevented and pressing ENTER adds a new line char.
    textareaRef.current.addEventListener("keydown", event => {
      // Number 13 is the "Enter" key on the keyboard
      if ((event.keyCode === 13 || event.keyCode === 10) && !event.shiftKey) {
        event.preventDefault();
        // Trigger the button element with a click
        sendButton.current.click();
      }
    });
    // Event listener is removed. Can be tested with getEventListeners(domElement) in developer tools console
    return textareaRef.current.removeEventListener("keydown", event => {});
  }, [textareaRef, sendButton]);

  useEffect(() => {
    setMessageContent(messageContent => messageContent + chosenEmoji);
  }, [chosenEmoji]);

  const handleChange = e => {
    e.target.style.height = "2.5rem";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    //dispatch(setChatDraft({ channelId, draft: e.target.value }));
    setMessageContent(e.target.value);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setEmojiIsOpen(true);
  };

  return (
    <>
      <div className="flex items-center pt-1 space-x-1 md:space-x-2 mx-2">
        <button
          onClick={() => setEmojiIsOpen(!emojiIsOpen)}
          className="w-10 h-10 p-2 text-center rounded-full bg-secondaryBackground hover:bg-highlightBackground focus:outline-none"
        >
          <FontAwesomeIcon
            icon={["far", "smile"]}
            className="cursor-pointer text-highlightText"
            size="lg"
          />
        </button>
        {emojiIsOpen ? (
          <div className="absolute bottom-0 mb-16">
            {""}
            <Picker onEmojiClick={onEmojiClick}></Picker>
          </div>
        ) : null}
        <textarea
          className="w-full h-10 p-2 pl-4 overflow-hidden rounded-lg resize-none bg-secondaryBackground focus:outline-none text-primaryText text-sm"
          placeholder="Type a message..."
          value={messageContent}
          maxLength="240"
          ref={textareaRef}
          onChange={handleChange}
        />
        {/* REPLACE IMAGE PICKER -> GIF PICKER */}
        <div className="w-10 h-10 p-2 text-center rounded-full bg-secondaryBackground hover:bg-highlightBackground">
          <FontAwesomeIcon
            icon={["far", "images"]}
            className="cursor-pointer text-highlightText"
            size="lg"
          />
        </div>
        <button
          onClick={() => {
            handleSendMessage(messageContent);
            setMessageContent("");
          }}
          ref={sendButton}
          className="font-bold text-highlightText pr-2 text-sm focus:outline-none"
        >
          Send
        </button>
      </div>
      {/** ADD EMOJI PICKER BELOW */}
    </>
  );
}

export default ChatActions;
