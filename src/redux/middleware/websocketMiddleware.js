import {
  GENERAL_INIT,
  LOGOUT,
  SET_WS,
  GENERAL_ADD_MESSAGE,
  GENERAL_SET_LAST_MESSAGE_ID,
  WS_HELLO,
  WS_PING,
  WS_PONG,
  WS_ADD_MESSAGE
} from "../../helpers/constants";
import { validateSession } from "../actions";

let socket;
let interval;
let timeout;

const websocketMiddleware = url => {
  return store => next => action => {
    next(action);

    if (action.type === GENERAL_INIT && !store.getState().wsState.connected) {
      socket = new WebSocket(url);

      const heartbeat = () => {
        clearTimeout(timeout);

        socket.send(
          JSON.stringify({
            type: WS_PONG
          })
        );

        timeout = setTimeout(() => {
          socket.close();
        }, store.getState().wsState.heartbeatInterval + 1000);
      };

      socket.onopen = () => {
        clearInterval(interval);
      };

      socket.onclose = () => {
        clearTimeout(timeout);

        store.dispatch({
          type: SET_WS,
          payload: { connected: false, heartbeatInterval: null }
        });

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

        if (messageType === WS_HELLO) {
          store.dispatch({
            type: SET_WS,
            payload: {
              connected: true,
              heartbeatInterval: Number(messagePayload.heartbeatInterval)
            }
          });

          heartbeat();
        } else if (messageType === WS_PING) {
          heartbeat();
        } else if (messageType === WS_ADD_MESSAGE) {
          console.log("RECIEVED", messageType, messagePayload);

          let addMessage = true;

          let messagesState = store.getState().generalState.messages;
          let channelsState = store.getState().generalState.channels;

          const channelHasMessages =
            messagesState[messagePayload.channelId]?.length !== 0;

          if (channelHasMessages) {
            const lastMessageIdInChannel =
              channelsState[messagePayload.channelId].lastMessageId;
            const lastMessageIdInMessages =
              messagesState[messagePayload.channelId][
                messagesState[messagePayload.channelId].length - 1
              ].id;

            addMessage = lastMessageIdInChannel === lastMessageIdInMessages;
          }

          if (addMessage) {
            store.dispatch({
              type: GENERAL_ADD_MESSAGE,
              payload: messagePayload
            });
          } else {
            store.dispatch({
              type: GENERAL_SET_LAST_MESSAGE_ID,
              payload: {
                channelId: messagePayload.channelId,
                messageId: messagePayload.message.id
              }
            });
          }
        }
      };
    } else if (action.type === LOGOUT && store.getState().wsState.connected) {
      console.log("LOGOUT SOCKET");
      socket.dontReconnect = true;
      socket.close();
    }
  };
};

export default websocketMiddleware;
