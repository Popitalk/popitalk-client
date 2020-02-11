import { GENERAL_SET_INITIAL_SCROLL } from "../../../helpers/constants";

const setInitialScroll = (channelId, initialScroll) => ({
  type: GENERAL_SET_INITIAL_SCROLL,
  payload: { channelId, initialScroll }
});

export default setInitialScroll;
