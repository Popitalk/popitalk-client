import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { setPostDraft, addPost } from "../../redux/actions";
import "./CreatePost.css";

export default function CreatePost() {
  const { channelId } = useParams();
  const draft = useSelector(state => state.postDrafts[channelId]);
  const dispatch = useDispatch();
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
    dispatch(setPostDraft({ channelId, draft: e.target.value }));
  };

  const handleSend = () => {
    textareaRef.current.style.height = "58px";

    const text = draft?.trim();

    if (text && text.length > 0) {
      dispatch(
        addPost({
          channelId,
          content: text
        })
      );
    }
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
          value={draft || ""}
          onChange={handleChange}
          maxLength={2000}
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
                dispatch(
                  setPostDraft({ channelId, draft: `${draft} ${e.native}` })
                );
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
