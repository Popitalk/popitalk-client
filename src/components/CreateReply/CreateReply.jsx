import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { addComment } from "../../redux/actions";
import "./CreateReply.css";

export default function CreateReply({ postId }) {
  // const { channelId } = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const textareaRef = useRef();

  useEffect(() => {
    // textareaRef.current.focus();
    textareaRef.current.style.height = "38px";
  }, []);

  const handleChange = e => {
    e.target.style.height = "38px";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.style.height = "38px";
      const text = value.trim();

      if (text && text.length > 0) {
        dispatch(
          addComment({
            postId,
            content: text
          })
        );
        setValue("");
      }
    }
  };

  const handleSend = () => {
    textareaRef.current.style.height = "38px";
    const text = value.trim();

    if (text && text.length > 0) {
      dispatch(
        addComment({
          postId,
          content: text
        })
      );
      setValue("");
    }
  };

  return (
    <div className="CreateReply--container">
      <div className="CreateReply--textarea">
        <textarea
          placeholder="Post a comment..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          maxLength={120}
          ref={textareaRef}
        />
        <button type="button" className="button pill" onClick={handleSend}>
          Post
        </button>
      </div>
    </div>
  );
}
