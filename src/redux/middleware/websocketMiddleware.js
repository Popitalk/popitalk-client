import {
  validateSession,
  login,
  logout,
  wsConnect,
  wsDisconnect,
  addMessageWs,
  deleteMessageWs,
  updateChannelWs,
  addPostWs,
  deletePostWs,
  likePostWs,
  unlikePostWs,
  incrementCommentCountWs,
  decrementCommentCountWs,
  addMemberWs,
  addMembersWs,
  deleteMemberWs,
  addAdminWs,
  deleteAdminWs,
  addBanWs,
  deleteBanWs,
  deleteSentFriendRequestWs,
  addReceivedFriendRequestWs,
  deleteReceivedFriendRequestWs,
  addFriendWs,
  deleteFriendWs,
  addBlockerWs,
  deleteBlockerWs,
  deleteChannelWs,
  addChannelWs,
  friendOnlineWs,
  friendOfflineWs
} from "../actions";

import { WS_EVENTS } from "../../helpers/constants";

const wsUrl =
  process.env.NODE_ENV !== "production"
    ? "ws://localhost:5000/ws"
    : `wss://${window.location.hostname}:${window.location.port}/ws/`;

let socket;
let interval;
let timeout;

const websocketMiddleware = () => store => next => action => {
  next(action);
  const actionType = action.type;

  if (
    (actionType === validateSession.fulfilled.toString() ||
      actionType === login.fulfilled.toString()) &&
    !store.getState().general.wsConnected
  ) {
    const wsTicket = action.payload.wsTicket;
    socket = new WebSocket(wsUrl, wsTicket);
    console.log(action);

    socket.onopen = () => {
      console.log("OPENED");
    };

    socket.onmessage = ({ data: message }) => {
      console.log("MESSAGE", message);
    };

    const heartbeat = () => {
      clearTimeout(timeout);

      socket.send(JSON.stringify({ type: "WS_PONG" }));

      timeout = setTimeout(() => {
        socket.close();
      }, store.getState().general.heartbeatInterval + 1000);
    };

    socket.onopen = () => {
      clearInterval(interval);
    };

    socket.onclose = () => {
      clearTimeout(timeout);

      store.dispatch(wsDisconnect());

      if (!socket.dontReconnect) {
        interval = setInterval(() => {
          store.dispatch(validateSession());
        }, 10000);
      }
    };

    socket.onmessage = ({ data: message }) => {
      const parsedMessage = JSON.parse(message);
      const messageType = parsedMessage.type;
      const messagePayload = parsedMessage.payload;

      const commandHandler = {
        [WS_EVENTS.HELLO]() {
          store.dispatch(wsConnect(Number(messagePayload.heartbeatInterval)));
          heartbeat();
        },
        [WS_EVENTS.PING]() {
          heartbeat();
        },
        [WS_EVENTS.CHANNEL.ADD_MESSAGE]() {
          let addMessage = true;

          let messagesState = store.getState().messages;
          let channelsState = store.getState().channels;

          const channelHasMessages =
            messagesState[messagePayload.channelId]?.length !== 0;

          if (channelHasMessages) {
            const lastMessageIdInChannel =
              channelsState[messagePayload.channelId].lastMessageId;

            if (!lastMessageIdInChannel) {
              addMessage = true;
            } else {
              const lastMessageIdInMessages =
                messagesState[messagePayload.channelId][
                  messagesState[messagePayload.channelId].length - 1
                ].id;

              addMessage = lastMessageIdInChannel === lastMessageIdInMessages;
            }
          }

          if (addMessage) {
            const { capacity } = store.getState().channels[
              messagePayload.channelId
            ].chatSettings;
            store.dispatch(
              addMessageWs({ ...messagePayload.message, capacity })
            );
          } else {
            store.dispatch(
              updateChannelWs({
                channelId: messagePayload.channelId,
                updatedChannel: {
                  lastMessageId: messagePayload.message.id
                }
              })
            );
          }
        },
        [WS_EVENTS.CHANNEL.DELETE_MESSAGE]() {
          store.dispatch(deleteMessageWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.ADD_POST]() {
          store.dispatch(addPostWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.DELETE_POST]() {
          store.dispatch(deletePostWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.ADD_POST_LIKE]() {
          const { id: ownId } = store.getState().self;
          store.dispatch(likePostWs({ ownId, ...messagePayload }));
        },
        [WS_EVENTS.CHANNEL.DELETE_POST_LIKE]() {
          const { id: ownId } = store.getState().self;
          store.dispatch(unlikePostWs({ ownId, ...messagePayload }));
        },
        [WS_EVENTS.CHANNEL.ADD_COMMENT]() {
          const { id: ownId } = store.getState().self;
          store.dispatch(incrementCommentCountWs({ ownId, ...messagePayload }));
        },
        [WS_EVENTS.CHANNEL.DELETE_COMMENT_LIKE]() {
          const { id: ownId } = store.getState().self;
          store.dispatch(decrementCommentCountWs({ ownId, ...messagePayload }));
        },
        [WS_EVENTS.CHANNEL.ADD_MEMBER]() {
          store.dispatch(addMemberWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.ADD_MEMBERS]() {
          store.dispatch(addMembersWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.DELETE_MEMBER]() {
          store.dispatch(deleteMemberWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.ADD_ADMIN]() {
          store.dispatch(addAdminWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.DELETE_ADMIN]() {
          store.dispatch(deleteAdminWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.ADD_BAN]() {
          store.dispatch(addBanWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.DELETE_BAN]() {
          store.dispatch(deleteBanWs(messagePayload));
        },
        [WS_EVENTS.USER.DELETE_SENT_FRIEND_REQUEST]() {
          store.dispatch(deleteSentFriendRequestWs(messagePayload));
        },
        [WS_EVENTS.USER.ADD_RECEIVED_FRIEND_REQUEST]() {
          store.dispatch(addReceivedFriendRequestWs(messagePayload));
        },
        [WS_EVENTS.USER.DELETE_RECEIVED_FRIEND_REQUEST]() {
          store.dispatch(deleteReceivedFriendRequestWs(messagePayload));
        },
        [WS_EVENTS.USER.ADD_FRIEND]() {
          store.dispatch(addFriendWs(messagePayload));
        },
        [WS_EVENTS.USER.DELETE_FRIEND]() {
          store.dispatch(deleteFriendWs(messagePayload));
        },
        [WS_EVENTS.USER.ADD_BLOCKER]() {
          store.dispatch(addBlockerWs(messagePayload));
        },
        [WS_EVENTS.USER.DELETE_BLOCKER]() {
          store.dispatch(deleteBlockerWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.DELETE_CHANNEL]() {
          store.dispatch(deleteChannelWs(messagePayload));
        },
        [WS_EVENTS.USER.ADD_CHANNEL]() {
          store.dispatch(addChannelWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.UPDATE_CHANNEL]() {
          store.dispatch(updateChannelWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.SET_FRIEND_ONLINE]() {
          store.dispatch(friendOnlineWs(messagePayload));
        },
        [WS_EVENTS.CHANNEL.SET_FRIEND_OFFLINE]() {
          store.dispatch(friendOfflineWs(messagePayload));
        }
      };

      console.log("MESSAGE TYPE", messageType);

      if (commandHandler[messageType]) {
        commandHandler[messageType]();
      }
    };
  } else if (
    actionType === logout.fulfilled.toString() &&
    store.getState().general.wsConnected &&
    socket
  ) {
    console.log("LOGOUT SOCKET");
    socket.dontReconnect = true;
    socket.close();
  }
};

export default websocketMiddleware;
