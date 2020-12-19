import React from "react";
import PopupMenu from "../Controls/PopupMenu";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/actions";
import { openDeleteMessageModal } from "../../redux";

import { v4 as uuidv4 } from "uuid";

function ChatOptionsButton2({
  message,
  ownId,
  match,
  hover,
  channelId,
  channel
}) {
  const dispatch = useDispatch();
  const currentUserUsername = useSelector(state => state.self.username);
  const apiLoading = useSelector(state => state.api.addMessage.loading);
  const userId = useSelector(state => state.self.id);
  const avatar = useSelector(state => state.self.avatar);

  const handleSend = text => {
    if (text && text.length > 0 && !apiLoading) {
      dispatch(
        addMessage({
          id: uuidv4(),
          userId,
          channelId,
          content: text,
          upload: null,
          createdAt: new Date().toString(),
          author: {
            id: "",
            username: currentUserUsername,
            avatar: avatar
          }
        })
      );
    }
  };

  const conditions = {
    isMyMessage: message.userId === ownId,
    isOwnerOfChannel:
      channel?.type === "channel" && channel.ownerId === message.userId,
    isAdminOfChannel:
      channel?.type === "channel" && channel.admins?.includes(ownId),
    messageAccepted:
      message?.status === undefined ||
      message?.status?.toLowerCase() === "accepted",
    messageRejected: message?.status?.toLowerCase() === "rejected",
    messagePending: message?.status?.toLowerCase() === "pending"
  };

  // Function that generates options of the pop up depending if message is rejected/accepted
  const getOptions = () => {
    const options = [];

    if (conditions.messageAccepted || conditions.messageRejected) {
      options.push({
        name: "Delete",
        handler: () => dispatch(openDeleteMessageModal(channelId, message.id)),
        danger: false
      });
    }

    if (conditions.messageRejected) {
      options.push({
        name: "Resend",
        handler: () => handleSend(message.content),
        danger: false
      });
    }

    return options;
  };

  // deletedMessageId === message.id && deletedMessageApiLoading
  // Returns the button only ((if you are the admin of the channel OR it is your own message) AND the message is not pending) OR the message is rejected.
  // Doesn't test if you sent the rejected message, can't think of a possibility where you could see other peoples rejected messages.
  // There is no ID generated if the message is rejected.

  const {
    isMyMessage,
    isAdminOfChannel,
    isOwnerOfChannel,
    messagePending,
    messageRejected
  } = conditions;

  const showPopup =
    ((isMyMessage || (isAdminOfChannel && !isOwnerOfChannel)) &&
      !messagePending) ||
    messageRejected;

  return (
    <>
      {showPopup ? (
        <div
          className={`flex transition-opacity duration-100 w-4 px-0 space-x-2 self-center mx-2 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <PopupMenu
            options={getOptions()}
            type="message"
            messageId={message.id}
            disabled={false}
          />
        </div>
      ) : null}
    </>
  );
}

export default withRouter(ChatOptionsButton2);
