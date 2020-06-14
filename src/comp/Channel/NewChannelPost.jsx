import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setPostDraft, addPost } from "../../redux/actions";

import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../VideoStatus.css";
import RoomIcon from "../RoomIcon";
import AvatarIcon from "../InfoCards/AvatarIcon";
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
  const [post, setPost] = useState("");
  const textareaRef = useRef();
  const pickerRef = useRef();

  const remToPixel = (rootFontSizePx = 16, rem) => {
    return rem * rootFontSizePx;
  };

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
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-row justify-center bg-secondaryBackground content-center py-2 ${className}`}
      >
        <button
          className="text-highlightText text-2xl mx-4"
          onClick={handleEmot}
        >
          <FontAwesomeIcon icon={["far", "smile"]} />
        </button>
        <textarea
          type="text"
          placeholder="Post something..."
          className="rounded-lg pl-3 p-2 w-full shadow"
          rows={1}
          maxLength={2000}
          value={draft}
          onChange={handleChange}
          ref={textareaRef}
        />
        <button
          className="text-highlightText text-2xl ml-4"
          onClick={handleUploadImg}
        >
          <FontAwesomeIcon icon={["fa", "image"]} />
        </button>
        <input
          type="submit"
          value="Send"
          className="mx-4 bg-transparent text-highlightText font-bold"
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
    </>
  );
}
