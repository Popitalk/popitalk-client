import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Picker } from "emoji-mart";
import { useSelector, useDispatch } from "react-redux";
import { setChatDraft, addMessage } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GifSelection from "./GifSelection";

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
  const userId = useSelector(state => state.self.id);

  const handleSubmit = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.style.height = "38px";

      const text = draft?.trim();

      if (text && text.length > 0 && !apiLoading) {
        dispatch(
          addMessage({
            id: uuidv4(),
            userId,
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
    textareaRef.current.style.height = "38px";
    const text = draft?.trim();

    if (text && text.length > 0 && !apiLoading) {
      dispatch(
        addMessage({
          id: uuidv4(),
          userId,
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
    e.target.style.height = "38px";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    dispatch(setChatDraft({ channelId, draft: e.target.value }));
  };

  const onEmojiClick = (emojiObject, event) => {
    console.log(emojiObject);
    setChosenEmoji(emojiObject.native);
    // setEmojiIsOpen(false);
    textareaRef.current.focus();
  };

  return (
    <>
      <div className="flex items-center pt-1 space-x-1 md:space-x-2 mx-2">
        {/* EMOJI BUTTON */}
        <button
          onClick={() => setEmojiIsOpen(!emojiIsOpen)}
          className={`${
            emojiIsOpen
              ? "bg-highlightText hover:bg-highlightBackground"
              : "bg-secondaryBackground hover:bg-highlightBackground"
          }w-10 h-10 p-2 text-center rounded-lg focus:outline-none transition transform ease-in-out hover:scale-110 duration-100`}
        >
          <FontAwesomeIcon
            icon={["far", "smile"]}
            className={emojiIsOpen ? "text-tertiaryText" : "text-highlightText"}
            size="lg"
            role="button"
          />
        </button>
        {emojiIsOpen ? (
          <div className="absolute bottom-0 mb-16">
            {""}
            <Picker
              perLine={8}
              style={{ position: "absolute", bottom: "0", right: "-19rem" }}
              emojiTooltip={true}
              // If both disabled, then no footer is shown
              showSkinTones={false}
              showPreview={false}
              // Bellow options can be used to adjust what is shown in the footer by default.
              // emoji="eyes"
              // title="  Popitalk"
              // Uses the native set of emojis, so nothing needs to be downloaded. To make all our
              // wanted emojis available on any device we should provide our own sheet, or use the one
              // provided by emoji mart.
              // But then they have to be downloaded.
              native={true}
              onClick={onEmojiClick}
              exclude={["flags"]}
            ></Picker>
          </div>
        ) : null}
        <textarea
          className="w-full h-10 py-2 px-3 text-start overflow-hidden rounded-lg resize-none bg-secondaryBackground focus:outline-none text-primaryText text-sm transition transform ease-in-out hover:scale-105 duration-100"
          placeholder="Type a message..."
          value={draft || ""}
          maxLength="240"
          onKeyDown={handleSubmit}
          ref={textareaRef}
          onChange={handleChange}
        />
        {/* GIF BUTTON */}
        <GifSelection updateGifsOpen={props.updateGifsOpen} />
        {/* SEND BUTTON */}
        <button
          onClick={handleSend}
          ref={sendButton}
          className="font-bold text-highlightText pr-2 text-sm focus:outline-none transition transform ease-in-out hover:scale-110 duration-100"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default withRouter(ChatActions);
