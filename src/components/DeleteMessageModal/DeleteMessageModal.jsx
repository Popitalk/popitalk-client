import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import dateFormatter from "../../util/dateFormatter";
import "./DeleteMessageModal.css";

const message = {
  id: "id00",
  username: "Playnows",
  avatar: "https://i.imgur.com/tLljw1z.jpg",
  createdAt: "2019-10-03T06:08:23.684Z",
  content: "First."
};

export default function DeleteMessageModal() {
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  return (
    <div className="DeleteMessageModal--container">
      <h4>Delete Message</h4>
      <p>Are you sure you want to delete this message?</p>
      <div className="DeleteMessageModal--message">
        <img src={message.avatar} alt="avatar" />
        <div className="DeleteMessageModal--message--nameDate">
          {message.username}{" "}
          <span>{dateFormatter(new Date(message.createdAt))}</span>
        </div>
        <div
          className={`DeleteMessageModal--message--edge${
            message.username === "Playnows"
              ? " DeleteMessageModal--myMessage"
              : ""
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
        <button type="button" onClick={closeModalDispatcher}>
          Delete
        </button>
      </div>
    </div>
  );
}
