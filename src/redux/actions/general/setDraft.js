import { GENERAL_SET_DRAFT } from "../../../helpers/constants";

const setDraft = (channelId, draft) => ({
  type: GENERAL_SET_DRAFT,
  payload: {
    channelId,
    draft
  }
});

export default setDraft;
