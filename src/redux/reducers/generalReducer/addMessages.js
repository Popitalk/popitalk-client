import _ from "lodash";

const addMessages = (state, payload) => {
  let newChannelMessages;
  if (payload.direction === "bottom") {
    newChannelMessages = state.messages[payload.channelId]
      ? _.uniqBy(
          [...state.messages[payload.channelId], ...payload.messages],
          "id"
        )
      : payload.messages;

    if (newChannelMessages.length > 250) {
      newChannelMessages = newChannelMessages.slice(-100);
    }
  } else if (payload.direction === "top") {
    newChannelMessages = state.messages[payload.channelId]
      ? _.uniqBy(
          [...payload.messages, ...state.messages[payload.channelId]],
          "id"
        )
      : payload.messages;

    if (newChannelMessages.length > 250) {
      newChannelMessages = newChannelMessages.slice(0, 100);
    }
  }

  return {
    ...state,
    messages: {
      ...state.messages,
      [payload.channelId]: newChannelMessages
    },
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        lastMessagesUpdateByWebsockets: false
      }
    }
  };
};

export default addMessages;
