import React, { useState, useEffect, useRef } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "./CreatePost.css";

export default function CreatePost() {
  const [value, setValue] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);
  const textareaRef = useRef();
  const pickerRef = useRef();

  useEffect(() => {
    // textareaRef.current.focus();
    textareaRef.current.style.height = "58px";
  }, []);

  const handleChange = e => {
    e.target.style.height = "58px";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;

    setValue(e.target.value);
  };

  const handleSubmit = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.style.height = "58px";
      setValue("");
    }
  };

  const handleSend = () => {
    textareaRef.current.style.height = "58px";
    setValue("");
  };

  const handleEmoticon = () => {
    setPickerOpen(!pickerOpen);
  };
  const handleUpload = () => {
    console.log("UPLOAD");
  };

  return (
    <div className="CreatePost--container">
      <h4>Create a post</h4>
      <div className="CreatePost--textarea">
        <button type="button" className="button pill" onClick={handleEmoticon}>
          <i className="far fa-smile fa-2x" />
        </button>
        <textarea
          placeholder="Post a thread..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          maxLength={120}
          ref={textareaRef}
        />
        <div>
          <button type="button" className="button round" onClick={handleUpload}>
            <i className="far fa-image" />
          </button>
        </div>
        <button type="button" className="button pill" onClick={handleSend}>
          Post
        </button>
        {pickerOpen && (
          <div
            className="CreatePost--pickerContainer"
            ref={pickerRef}
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
                setValue(`${value} ${e.native}`);
                setPickerOpen(false);
                textareaRef.current.focus();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
