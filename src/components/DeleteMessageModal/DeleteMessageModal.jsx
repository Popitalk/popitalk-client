import React, { useCallback } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, deleteMessage } from "../../redux/actions";
import dateFormatter from "../../util/dateFormatter";
import "./DeleteMessageModal.css";

let deletedMessage = {};

export default function DeleteMessageModal() {
  const { pathname } = useLocation();
  const { channelId, messageId } = useSelector(state => state.modal);

  const { id: ownId } = useSelector(state => state.self);
  const { defaultAvatar } = useSelector(state => state.general);
  const messages = useSelector(state => state.messages[channelId]);
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const handleDelete = () => {
    dispatch(deleteMessage({ messageId }));
  };

  let message;

  if (messages) {
    message = messages.filter(message => message.id === messageId)[0];
  }

  if (messages && message) {
    deletedMessage = message;
  } else {
    dispatch(closeModal());
  }

  return (
    <div className="DeleteMessageModal--container">
      <h4>Delete Message</h4>
      <p>Are you sure you want to delete this message?</p>
      <div className="DeleteMessageModal--message">
        <img src={deletedMessage.author.avatar || defaultAvatar} alt="avatar" />
        <div className="DeleteMessageModal--message--nameDate">
          {deletedMessage.author.username}{" "}
          <span>{dateFormatter(new Date(deletedMessage.createdAt))}</span>
        </div>
        <div
          className={`DeleteMessageModal--message--edge${
            deletedMessage.userId === ownId
              ? " DeleteMessageModal--myMessage"
              : ""
          }`}
        >
          <div />
        </div>
        <div className="DeleteMessageModal--message--message">
          <p>{deletedMessage.content}</p>
        </div>
      </div>
      <div className="DeleteMessageModal--buttons">
        <button type="button" onClick={closeModalDispatcher}>
          Cancel
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
