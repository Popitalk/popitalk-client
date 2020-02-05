import {
  GENERAL_INIT,
  LOGOUT,
  SET_WS,
  GENERAL_ADD_MESSAGE,
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
      console.log("CONNECTING SOCKET");
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
        console.log("OPENED SOCKET");
        clearInterval(interval);
      };

      socket.onclose = () => {
        console.log("CLOSED SOCKET");
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
          // ...
          store.dispatch({
            type: GENERAL_ADD_MESSAGE,
            payload: messagePayload
          });
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
