import _ from "lodash";

const removeChannel = (state, payload) => {
  const withoutRemovedChannel = _.omit(state.channels, [
    `${payload.channelId}`
  ]);

  return {
    ...state,
    channels: withoutRemovedChannel
  };
};

export default removeChannel;
