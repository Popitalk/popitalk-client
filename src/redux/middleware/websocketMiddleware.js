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
  addChannelWs
} from "../actions";

let socket;
let interval;
let timeout;

const websocketMiddleware = url => {
  return store => next => action => {
    next(action);
    const actionType = action.type;

    if (
      (actionType === validateSession.fulfilled.toString() ||
        actionType === login.fulfilled.toString()) &&
      !store.getState().general.wsConnected
    ) {
      socket = new WebSocket(url);

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
          WS_HELLO() {
            store.dispatch(wsConnect(Number(messagePayload.heartbeatInterval)));
            heartbeat();
          },
          WS_PING() {
            heartbeat();
          },
          WS_ADD_MESSAGE() {
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
          WS_DELETE_MESSAGE() {
            store.dispatch(deleteMessageWs(messagePayload));
          },
          WS_ADD_POST() {
            store.dispatch(addPostWs(messagePayload));
          },
          WS_DELETE_POST() {
            store.dispatch(deletePostWs(messagePayload));
          },
          WS_ADD_POST_LIKE() {
            const { id: ownId } = store.getState().self;
            store.dispatch(likePostWs({ ownId, ...messagePayload }));
          },
          WS_DELETE_POST_LIKE() {
            const { id: ownId } = store.getState().self;
            store.dispatch(unlikePostWs({ ownId, ...messagePayload }));
          },
          WS_ADD_COMMENT() {
            const { id: ownId } = store.getState().self;
            store.dispatch(
              incrementCommentCountWs({ ownId, ...messagePayload })
            );
          },
          WS_DELETE_COMMENT() {
            const { id: ownId } = store.getState().self;
            store.dispatch(
              decrementCommentCountWs({ ownId, ...messagePayload })
            );
          },
          WS_ADD_MEMBER() {
            store.dispatch(addMemberWs(messagePayload));
          },
          WS_ADD_MEMBERS() {
            store.dispatch(addMembersWs(messagePayload));
          },
          WS_DELETE_MEMBER() {
            store.dispatch(deleteMemberWs(messagePayload));
          },
          WS_ADD_ADMIN() {
            store.dispatch(addAdminWs(messagePayload));
          },
          WS_DELETE_ADMIN() {
            store.dispatch(deleteAdminWs(messagePayload));
          },
          WS_ADD_BAN() {
            store.dispatch(addBanWs(messagePayload));
          },
          WS_DELETE_BAN() {
            store.dispatch(deleteBanWs(messagePayload));
          },
          WS_DELETE_SENT_FRIEND_REQUEST() {
            store.dispatch(deleteSentFriendRequestWs(messagePayload));
          },
          WS_ADD_RECEIVED_FRIEND_REQUEST() {
            store.dispatch(addReceivedFriendRequestWs(messagePayload));
          },
          WS_DELETE_RECEIVED_FRIEND_REQUEST() {
            store.dispatch(deleteReceivedFriendRequestWs(messagePayload));
          },
          WS_ADD_FRIEND() {
            store.dispatch(addFriendWs(messagePayload));
          },
          WS_DELETE_FRIEND() {
            store.dispatch(deleteFriendWs(messagePayload));
          },
          WS_ADD_BLOCKER() {
            store.dispatch(addBlockerWs(messagePayload));
          },
          WS_DELETE_BLOCKER() {
            store.dispatch(deleteBlockerWs(messagePayload));
          },
          WS_DELETE_CHANNEL() {
            store.dispatch(deleteChannelWs(messagePayload));
          },
          WS_ADD_CHANNEL() {
            store.dispatch(addChannelWs(messagePayload));
          },
          WS_UPDATE_CHANNEL() {
            store.dispatch(updateChannelWs(messagePayload));
          }
        };

        console.log("MESSAGE TYPE", messageType);

        if (commandHandler[messageType]) {
          commandHandler[messageType]();
        }
      };
    } else if (
      actionType === logout.fulfilled.toString() &&
      store.getState().general.wsConnected
    ) {
      console.log("LOGOUT SOCKET");
      socket.dontReconnect = true;
      socket.close();
    }
  };
};

export default websocketMiddleware;
