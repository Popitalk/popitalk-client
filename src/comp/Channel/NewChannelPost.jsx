import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../VideoStatus.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function NewChannelPost({
  handleUploadImg,
  className,
  draft,
  saveDraft,
  savePost
}) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const textareaRef = useRef();

  // const remToPixel = (rootFontSizePx = 16, rem) => {
  //   return rem * rootFontSizePx;
  // };

  const handleSubmit = e => {
    e.preventDefault();
    savePost(draft?.trim());
    saveDraft("");
    textareaRef.current.style.height = "40px";
    console.log("submit", draft?.trim());
  };
  const handleEmot = e => {
    setPickerOpen(!pickerOpen);
  };
  const handleChange = e => {
    e.target.style.height = "40px";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    saveDraft(e.target.value);
    console.log("save draft", e.target.value, draft);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-row justify-center bg-secondaryBackground content-center py-2 sm:w-102 md:w-102 lg:w-104 max-w-xl ${className}`}
      >
        <button
          className="text-highlightText text-2xl mx-4 focus:outline-none"
          onClick={handleEmot}
        >
          <FontAwesomeIcon icon={["far", "smile"]} />
        </button>
        <textarea
          type="text"
          placeholder="Post something..."
          className="rounded-lg pl-3 p-2 w-full shadow resize-none overflow-hidden focus:outline-none"
          rows={1}
          maxLength={2000}
          value={draft}
          onChange={handleChange}
          ref={textareaRef}
        />
        <button
          className="text-highlightText text-2xl ml-4 focus:outline-none"
          onClick={handleUploadImg}
        >
          <FontAwesomeIcon icon={["fa", "image"]} />
        </button>
        <input
          type="submit"
          value="Send"
          className="ml-4 mr-2 bg-transparent text-highlightText font-bold cursor-pointer focus:outline-none"
        />
      </form>
      {pickerOpen && (
        <div
          onBlur={() => {
            setTimeout(() => {
              setPickerOpen(false);
            }, 250);
          }}
        >
          <Picker
            set="twitter"
            title="Emojis"
            showPreview={false}
            showSkinTones={false}
            autoFocus
            emojiTooltip={true}
            onSelect={e => {
              console.log("info draft and symbol", draft, e.native);
              saveDraft(`${draft} ${e.native}`);
              // setPost((old) => `${old} ${e.native}`);
              setPickerOpen(false);
              textareaRef.current.focus();
              console.log("selected");
            }}
          />
        </div>
      )}
    </div>
  );
}
