import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { setChatDraft, addMessage } from "../../redux/actions";
import { withRouter } from "react-router-dom";

// TODO: Currently all emojis are pull from public CDN, which is slow and might even be unreliable,
// Maybe in the future the emojis should be hosted by us?
// Github issue which explains the implementation https://github.com/ealush/emoji-picker-react/issues/157

function ChatActions(props) {
  const channelId = props.match.params.roomId || props.match.params.channelId;
  const dispatch = useDispatch();
  const [emojiIsOpen, setEmojiIsOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const textareaRef = useRef();
  const sendButton = useRef();
  const draft = useSelector(state => state.chatDrafts[channelId]);
  const currentUserUsername = useSelector(state => state.self.username);
  const apiLoading = useSelector(state => state.api.addMessage.loading);

  const handleSubmit = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.style.height = "36px";

      const text = draft?.trim();

      if (text && text.length > 0 && !apiLoading) {
        dispatch(
          addMessage({
            id: "",
            userId: "",
            channelId,
            content: text,
            upload: null,
            createdAt: Date.now(),
            author: {
              id: "",
              username: currentUserUsername,
              avatar: null
            }
          })
        );
        dispatch(setChatDraft({ channelId, draft: "" }));
      }
    }
  };

  const handleSend = () => {
    textareaRef.current.style.height = "36px";
    const text = draft?.trim();

    if (text && text.length > 0 && !apiLoading) {
      dispatch(
        addMessage({
          id: "",
          userId: "",
          channelId,
          content: text,
          upload: null,
          createdAt: Date.now(),
          author: {
            id: "",
            username: currentUserUsername,
            avatar: null
          }
        })
      );
      dispatch(setChatDraft({ channelId, draft: "" }));
    }
  };

  useEffect(() => {
    dispatch(
      setChatDraft({
        channelId,
        draft: `${(draft ? draft : "") + chosenEmoji}`
      })
    );
    setChosenEmoji("");
  }, [channelId, chosenEmoji, dispatch, draft]);

  const handleChange = e => {
    e.target.style.height = "36px";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    dispatch(setChatDraft({ channelId, draft: e.target.value }));
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setEmojiIsOpen(false);
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
          value={draft || ""}
          maxLength="240"
          onKeyDown={handleSubmit}
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
          onClick={handleSend}
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

export default withRouter(ChatActions);
