const addNewestMessages = (state, payload) => {
  return {
    ...state,
    messages: {
      ...state.messages,
      [payload.channelId]: payload.messages
    },
    channels: {
      ...state.channels,
      [payload.channelId]: {
        ...state.channels[payload.channelId],
        lastMessageId: payload.messages[payload.messages.length - 1].id,
        lastMessagesUpdateByWebsockets: false,
        chatSettings: {
          capacity: 50,
          initialScroll: 0
        }
      }
    }
  };
};

export default addNewestMessages;
