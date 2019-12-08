/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openProfileModal, openImageModal } from "../../redux/actions";
import messagesFormatter from "../../util/messagesFormatter";

import "./ChatPanel.css";

const messages = [
  {
    id: "id00",
    username: "Playnows",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    createdAt: "2019-10-03T06:08:23.684Z",
    content: "First."
  },
  {
    id: "id0",
    username: "Playnows",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    createdAt: "2019-12-03T06:08:23.684Z",
    content: "Second."
  },
  {
    id: "id1",
    username: "Playnows",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    createdAt: "2019-12-04T06:08:23.684Z",
    content: "And what you can do to improve."
  },
  {
    id: "id2",
    username: "Playnows",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    createdAt: "2019-12-04T06:08:26.684Z",
    content: "I'm updating the link"
  },
  {
    id: "id3",
    username: "Playnows",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    createdAt: "2019-12-04T06:08:33.684Z",
    content: "I updated the link"
  },
  {
    id: "id4",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T06:09:23.684Z",
    content: "andrew andrew adnreew"
  },
  {
    id: "id5",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T06:10:23.684Z",
    content: "abcddfregref"
  },
  {
    id: "id6",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T08:18:23.684Z",
    content: "kkkkkkkkjjjjjhhhh"
  },
  {
    id: "id7",
    username: "Playnows",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    createdAt: "2019-12-04T08:19:23.684Z",
    content: "Hello."
  },
  {
    id: "id8",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T20:55:04.403Z",
    content: "Before last"
  },
  {
    id: "id9",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T21:01:56.254Z",
    content: "Last"
  },
  {
    id: "id99",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T21:01:58.254Z",
    image: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "id10",
    username: "Andrew",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    createdAt: "2019-12-04T21:04:56.254Z",
    content:
      "Long\n long long long long long long long\n long\n long\n long long long\n long long long\n long long long long long"
  }
];

const seenUsers = [
  "https://i.imgur.com/aqjzchq.jpg",
  "https://i.imgur.com/tLljw1z.jpg"
];

export default function ChatPanel() {
  const dispatch = useDispatch();
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );
  const openImageModalDispatcher = useCallback(
    () => dispatch(openImageModal()),
    [dispatch]
  );

  const formattedMessages = messagesFormatter(messages);

  const formattedMessagesValues = Object.values(formattedMessages);
  const lastMessageId =
    formattedMessagesValues[formattedMessagesValues.length - 1][
      formattedMessagesValues[formattedMessagesValues.length - 1].length - 1
    ].messages[
      formattedMessagesValues[formattedMessagesValues.length - 1][
        formattedMessagesValues[formattedMessagesValues.length - 1].length - 1
      ].messages.length - 1
    ].id;

  const handleDelete = messageId => {
    console.log("DELETING", messageId);
  };

  return (
    <div className="ChatPanel--container">
      {Object.entries(formattedMessages).map(([date, msgs1]) => (
        <div key={date}>
          <div className="ChatPanel--date">
            <h4>{date}</h4>
          </div>
          {msgs1.map(msgs2 => (
            <div className="ChatPanel--messageGroup" key={msgs2.id}>
              <img
                src={msgs2.avatar}
                alt="avatar"
                role="button"
                onClick={openProfileModalDispatcher}
              />
              <div className="ChatPanel--messageGroup--nameDate">
                {msgs2.username} <span>{msgs2.createdAt}</span>
              </div>
              <div className="ChatPanel--messageGroup--edge">
                <div />
              </div>
              <div className="ChatPanel--messages">
                {msgs2.messages.map((message, index) =>
                  index === msgs2.messages.length - 1 ? (
                    <div
                      key={message.id}
                      className={`ChatPanel--message${
                        message.id === lastMessageId
                          ? " ChatPanel--messages--last"
                          : ""
                      }`}
                    >
                      {message.content && <p>{message.content}</p>}
                      {message.image && (
                        <img
                          src={message.image}
                          alt={message.image}
                          className="ChatPanel--userImage"
                          role="button"
                          onClick={openImageModalDispatcher}
                        />
                      )}

                      <i
                        role="button"
                        className="fas fa-times"
                        onClick={() => handleDelete(message.id)}
                      />
                      {message.id === lastMessageId && (
                        <div className="ChatPanel--seenUsers">
                          {seenUsers.map(user => (
                            <img src={user} alt="avatar" key={user} />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div key={message.id} className="ChatPanel--message">
                      {message.content && <div>{message.content}</div>}
                      {message.image && (
                        <img
                          src={message.image}
                          alt={message.image}
                          className="ChatPanel--userImage"
                          role="button"
                          onClick={openImageModalDispatcher}
                        />
                      )}
                      <i
                        role="button"
                        className="fas fa-times"
                        onClick={() => handleDelete(message.id)}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
