import _ from "lodash";

const addChannel = (state, payload) => {
  return {
    ...state,
    messages: {
      ...state.messages,
      [payload.channelId]: state.messages[payload.channelId]
        ? _.uniqBy(
            [...payload.messages, ...state.messages[payload.channelId]],
            "id"
          )
        : payload.messages
    }
  };
};

export default addChannel;
