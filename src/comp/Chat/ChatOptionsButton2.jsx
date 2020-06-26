import React from "react";
import PopupMenu from "../PopupMenu";
import "./ChatOptionsButton.css";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage, deleteMessage } from "../../redux/actions";

function ChatOptionsButton2({ message, channel, ownId, match }) {
  const dispatch = useDispatch();
  const channelId = match.params.roomId || match.params.channelId;
  const handleDelete = ({ status, id }) => {
    dispatch(deleteMessage({ status, id, channelId }));
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
      handler: () => handleDelete({ status: message.status, id: message.id }),
      danger: false
    },
    conditions.messageRejected && {
      name: "Resend",
      handler: () => console.log("Message Deleted"),
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
