import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Button1 from "../Button1";
import { setChatDraft, addMessage } from "../../redux/actions";
import "./ChatDraft.css";

export default function ChatDraft() {
  const { channelId } = useParams();
  const draft = useSelector(state => state.chatDrafts[channelId]);
  const roomIds = useSelector(state => state.self.roomIds);
  const channelIds = useSelector(state => state.self.channelIds);
  const [pickerOpen, setPickerOpen] = useState(false);
  const dispatch = useDispatch();
  const textareaRef = useRef();
  const pickerRef = useRef();

  const notMember = ![...roomIds, ...channelIds].includes(channelId);

  useEffect(() => {
    // textareaRef.current.focus();
    textareaRef.current.style.height = "52px";
  }, []);

  const handleChange = e => {
    e.target.style.height = "52px";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    dispatch(setChatDraft({ channelId, draft: e.target.value }));
  };

  const handleSubmit = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.style.height = "52px";

      const text = draft?.trim();

      if (text && text.length > 0) {
        dispatch(
          addMessage({
            channelId,
            content: text
          })
        );
      }
    }
  };

  const handleSend = () => {
    textareaRef.current.style.height = "52px";
    const text = draft?.trim();

    if (text && text.length > 0) {
      dispatch(
        addMessage({
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
    <div className="ChatDraft--container">
      <div className="ChatDraft--textarea">
        <button
          type="button"
          className="button pill"
          onClick={notMember ? undefined : handleEmoticon}
        >
          <i className="far fa-smile fa-lg" />
        </button>
        <textarea
          placeholder="Type a message..."
          value={draft || ""}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          maxLength={120}
          ref={textareaRef}
          disabled={notMember}
        />
        <div>
          <Button1 onClick={notMember ? undefined : handleUpload}>
            <i className="far fa-image" />
          </Button1>
        </div>
        <button
          type="button"
          className="button pill"
          onClick={notMember ? undefined : handleSend}
        >
          Send
        </button>
        {pickerOpen && (
          <div
            className="ChatDraft--pickerContainer"
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
                  setChatDraft({ channelId, draft: `${draft} ${e.native}` })
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
