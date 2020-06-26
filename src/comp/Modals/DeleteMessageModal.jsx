import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dateFormatter from "../../util/dateFormatter";
import "./DeleteMessageModal.css";

export default function DeleteMessageModal({
  message,
  handleCancel,
  handleDelete
}) {
  const { id: ownId } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);

  return (
    <div className="DeleteMessageModal--container">
      <h4>Delete Message</h4>
      <p>Are you sure you want to delete this message?</p>
      <div className="DeleteMessageModal--message">
        <img src={message.author.avatar || defaultAvatar} alt="avatar" />
        <div className="DeleteMessageModal--message--nameDate">
          {message.author.username}{" "}
          <span>{dateFormatter(new Date(message.createdAt))}</span>
        </div>
        <div
          className={`DeleteMessageModal--message--edge${
            message.userId === ownId ? " DeleteMessageModal--myMessage" : ""
          }`}
        >
          <div />
        </div>
        <div className="DeleteMessageModal--message--message">
          <p>{message.content}</p>
        </div>
      </div>
      <div className="DeleteMessageModal--buttons">
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
