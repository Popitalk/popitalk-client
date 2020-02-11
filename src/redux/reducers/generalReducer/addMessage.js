import _ from "lodash";

const addMessage = (state, payload) => {
  let newChannelMessages;
  let addMessage = true;

  if (state.messages[payload.channelId].length >= 250) {
    addMessage = false;
  } else if (state.channels[payload.channelId].chatSettings.capacity === 50) {
    newChannelMessages = state.messages[payload.channelId]
      ? [...state.messages[payload.channelId], payload.message].slice(-50)
      : [payload.message];
  } else if (state.channels[payload.channelId].chatSettings.capacity === 250) {
    newChannelMessages = state.messages[payload.channelId]
      ? [...state.messages[payload.channelId], payload.message]
      : [payload.message];
  }

  return {
    ...state,
    messages: {
      ...state.messages,
      [payload.channelId]: addMessage
        ? newChannelMessages
        : state.messages[payload.channelId]
    },
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        chatSettings: {
          ...state.channels[payload.channelId].chatSettings,
          initialScroll: null
        },
        lastMessageId: payload.message.id,
        lastMessagesUpdateByWebsockets: true
      }
    }
  };
};

export default addMessage;
