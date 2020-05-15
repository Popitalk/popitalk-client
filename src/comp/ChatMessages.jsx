import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AvatarDeck from "./AvatarDeck";

const messages = [
  {
    name: "André Gama",
    date: new Date(),
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus soluta molestias error est cumque debitis eum harum fuga, quaerat provident enim a consequatur perferendis laudantium illo ipsam corrupti earum?",
    image: ""
  },
  {
    name: "André Gama",
    date: new Date(),
    message: "testees",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
  },
  {
    name: "André Gama",
    date: new Date(),
    message: "testees",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
  },
  {
    name: "André Gama",
    date: new Date(),
    message: "testees",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
  },
  {
    name: "André Gama",
    date: new Date(),
    message: "testees",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
  }
];

function ChatMessages() {
  return (
    <div className="relative h-chatBox">
      <div className="overflow-auto h-chatChild">
        {messages.map((message, i) => {
          return (
            <div key={i} className="flex flex-col my-6">
              <div className="flex items-center space-x-2 text-xs">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.imgur.com/xCGu56D.jpg"
                  alt="Avatar"
                />
                <span className="font-bold">{message.name}</span>
                <span className="text-secondaryText">
                  {message.date.toLocaleString()}
                </span>
              </div>
              <div className="grid my-3 grid-cols-chat">
                <span className="flex justify-center">
                  <span
                    className={`w-1 rounded-lg ${
                      message.image
                        ? "bg-highlightText"
                        : "bg-tertiaryBackground"
                    }`}
                  ></span>
                </span>
                <span className="w-full text-sm text-justify text-primaryText">
                  {message.message}
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Message"
                      className="mt-2 rounded-lg"
                    />
                  )}
                </span>
                <span className="mx-4">
                  <div className="px-2 space-x-2 rounded-full bg-gradient-br-cancel">
                    <button className="focus:outline-none">
                      <FontAwesomeIcon
                        size="xs"
                        icon="redo-alt"
                        className="text-tertiaryText"
                      />
                    </button>
                    <button className="focus:outline-none">
                      <FontAwesomeIcon
                        size="xs"
                        icon="times"
                        className="text-tertiaryText"
                      />
                    </button>
                  </div>
                </span>
              </div>
              <div className="flex justify-end">
                <AvatarDeck
                  size="sm"
                  avatars={[
                    "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
                    "https://i.imgur.com/xCGu56D.jpg",
                    "https://i.imgur.com/MQHYB.jpg",
                    "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
                    "https://i.imgur.com/xCGu56D.jpg",
                    "https://i.imgur.com/MQHYB.jpg",
                    "https://i.imgur.com/MQHYB.jpg",
                    "https://i.imgur.com/MQHYB.jpg"
                  ]}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center mb-4 space-x-2">
        <img
          src="https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <span className="text-secondaryText">Typing...</span>
      </div>
    </div>
  );
}

export default ChatMessages;
