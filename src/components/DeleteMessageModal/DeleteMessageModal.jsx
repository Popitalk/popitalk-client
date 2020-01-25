import React, { useState, useCallback } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, deleteMessage } from "../../redux/actions";
import dateFormatter from "../../util/dateFormatter";
import "./DeleteMessageModal.css";

export default function DeleteMessageModal() {
  const { pathname } = useLocation();
  const { id: ownId } = useSelector(state => state.userState);
  const { messages, defaultAvatar } = useSelector(state => state.generalState);
  const { deletingMessageId } = useSelector(state => state.modalState);
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const channelId = matchPath(pathname, {
    path: "/rooms/:channelId",
    exact: false,
    strict: false
  })?.params?.channelId;

  const handleDelete = () => {
    dispatch(deleteMessage(deletingMessageId));
    dispatch(closeModal());
  };

  const message = messages[channelId].filter(
    message => message.id === deletingMessageId
  )[0];

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
