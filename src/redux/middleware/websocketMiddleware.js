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
// Timeout for heartbeat(), if it runs out, the socket is closed.
// Runs out if does not receive validateSession.fulfilled action in heartbeatInterval
let timeout;

const websocketMiddleware = () => store => next => action => {
  next(action);
  const actionType = action.type;
  // If there's a validateSession action which is fullfilled,
  // then a new webscoket is created, that connect to URL defined above
  // and if websocket is not already connected, so that 2 websockets wouldnt be opened.
  if (
    (actionType === validateSession.fulfilled.toString() ||
      actionType === login.fulfilled.toString()) &&
    !store.getState().general.wsConnected
  ) {
    const wsTicket = action.payload.wsTicket;
    socket = new WebSocket(wsUrl, wsTicket);
    console.log(action);
    // An event listener to be called when the connection is opened.
    socket.onopen = () => {
      console.log("OPENED");
    };
    // An event listener to be called when a message is received from the server.
    socket.onmessage = ({ data: message }) => {
      console.log("MESSAGE", message);
    };

    const heartbeat = () => {
      clearTimeout(timeout);
      // Enqueues data to be transmitted.
      socket.send(JSON.stringify({ type: "WS_PONG" }));
      // Refreshes timeout
      timeout = setTimeout(() => {
        socket.close();
      }, store.getState().general.heartbeatInterval + 1000);
    };

    socket.onopen = () => {
      clearInterval(interval);
    };
    // An event listener to be called when the connection is closed.
    socket.onclose = () => {
      // clears timeout for disconnecting, because the socket is closed.
      clearTimeout(timeout);
      // sets state as disconnected.
      store.dispatch(wsDisconnect());
      // If socket has to reconnect, an interval for the session validations is set which tries to reconnect/validate session again.
      if (!socket.dontReconnect) {
        interval = setInterval(() => {
          // Calls api.validateSession(), if it's fullfiled, sets validatedSession Redux state to true
          store.dispatch(validateSession());
        }, 10000);
      }
    };
    // When a message is received from the server
    socket.onmessage = ({ data: message }) => {
      // It is parsed to JSON
      const parsedMessage = JSON.parse(message);
      const messageType = parsedMessage.type;
      const messagePayload = parsedMessage.payload;

      console.log("MESSAGE TYPE", messageType);
      // If commandHandler.[computedPropertyMessageType] is defined, then this function is executed.
      // The functions are defined in commandHandler.
      if (commandHandler[messageType]) {
        commandHandler[messageType]();
      }
      // These functions are executed by messages received from the server.
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
    };
  } else if (
    actionType === logout.fulfilled.toString() &&
    store.getState().general.wsConnected &&
    socket
  ) {
    // If user logs out, a dontRecconect prop is set to true so
    // that the interval which tries to validate the session
    // does not try to reconnect.
    console.log("LOGOUT SOCKET");
    socket.dontReconnect = true;
    socket.close();
  }
};

export default websocketMiddleware;
