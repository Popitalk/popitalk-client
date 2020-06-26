import React from "react";
import PopupMenu from "../PopupMenu";
import "./ChatOptionsButton.css";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, openDeleteMessageModal } from "../../redux/actions";

function ChatOptionsButton2({ message, channel, ownId, match }) {
  const dispatch = useDispatch();
  const currentUserUsername = useSelector(state => state.self.username);
  const apiLoading = useSelector(state => state.api.addMessage.loading);
  const channelId = match.params.roomId || match.params.channelId;
  const handleSend = text => {
    if (text && text.length > 0 && !apiLoading) {
      dispatch(
        addMessage({
          id: "",
          userId: "",
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
    }
  };

  const conditions = {
    isMyMessage: message.userId === ownId,
    isAdminOfChannel:
      channel?.type === "channel" && channel.admins?.includes(ownId),
    messageAccepted:
      message?.status === void undefined ||
      message?.status?.toLowerCase() === "accepted",
    messageRejected: message?.status?.toLowerCase() === "rejected",
    messagePending: message?.status?.toLowerCase() === "pending"
  };
  const options = [
    (conditions.messageAccepted || conditions.messageRejected) && {
      name: "Delete",
      handler: () =>
        dispatch(openDeleteMessageModal({ channelId, messageId: message.id })),
      danger: false
    },
    conditions.messageRejected && {
      name: "Resend",
      handler: () => handleSend(message.content),
      danger: false
    }
  ];
  // deletedMessageId === message.id && deletedMessageApiLoading
  // Returns the button only ((if you are the admin of the channel OR it is your own message) AND the message is not pending) OR the message is rejected.
  // Doesn't test if you sent the rejected message, can't think of a posibility where you could see other peoples rejected messages.
  // There is no ID generated if the message is rejected.
  return (
    <>
      {((conditions.isMyMessage || conditions.isAdminOfChannel) &&
        !conditions.messagePending) ||
      conditions.messageRejected ? (
        <div className="opacity-0 chat-options-button w-8 px-0 space-x-2 self-center mx-1 focus:outline-none">
          <PopupMenu
            options={options}
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
