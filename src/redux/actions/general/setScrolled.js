import { GENERAL_SET_SCROLLED } from "../../../helpers/constants";

const setDraft = (channelId, scrolled) => ({
  type: GENERAL_SET_SCROLLED,
  payload: { channelId, scrolled }
});

export default setDraft;
