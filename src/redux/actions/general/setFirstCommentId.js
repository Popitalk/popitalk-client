import { GENERAL_SET_FIRST_COMMENT_ID } from "../../../helpers/constants";

const setFirstCommentId = (channelId, postId, firstCommentId) => ({
  type: GENERAL_SET_FIRST_COMMENT_ID,
  payload: { channelId, postId, firstCommentId }
});

export default setFirstCommentId;
