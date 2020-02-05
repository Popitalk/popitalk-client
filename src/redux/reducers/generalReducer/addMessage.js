import _ from "lodash";

const addChannel = (state, payload) => {
  return {
    ...state,
    messages: {
      ...state.messages,
      [payload.channelId]: state.messages[payload.channelId]
        ? [...state.messages[payload.channelId], payload.message]
        : [payload.message]
    }
  };
};

export default addChannel;
