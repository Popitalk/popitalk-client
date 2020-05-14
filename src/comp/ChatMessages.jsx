import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AvatarDeck from "./AvatarDeck";
import Button from "./Button";

function ChatMessages() {
  return (
    <div className="h-chat">
      <div className="flex flex-col my-6">
        <div className="flex items-center space-x-2 text-xs">
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.imgur.com/h1SSoyk.png"
            alt="Avatar"
          />
          <span className="font-bold">André Gama</span>
          <span className="text-secondaryText">Today 12:35 PM</span>
        </div>
        <div className="grid my-3 grid-cols-chat">
          <span className="w-1 mx-4 rounded-lg bg-highlightText"></span>
          <span className="w-full text-sm text-justify text-primaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            temporibus soluta molestias error est cumque debitis eum harum fuga,
            quaerat provident enim a consequatur perferendis laudantium illo
            ipsam corrupti earum?
          </span>
          <span className="mx-4">
            <div className="px-2 py-1 space-x-2 rounded-lg bg-gradient-br-cancel">
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
    </div>
  );
}

export default ChatMessages;
