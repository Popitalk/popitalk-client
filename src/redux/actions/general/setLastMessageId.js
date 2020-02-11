import { GENERAL_SET_LAST_MESSAGE_ID } from "../../../helpers/constants";

const setLastMessageId = (channelId, messageId) => ({
  type: GENERAL_SET_LAST_MESSAGE_ID,
  payload: { channelId, messageId }
});

export default setLastMessageId;
