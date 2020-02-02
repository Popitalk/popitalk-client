import * as api from "../../../helpers/api";
import {
  GENERAL_ADD_SELF_COMMENT,
  GENERAL_SET_FIRST_COMMENT_ID
} from "../../../helpers/constants";
import { postsApiError, postsApiSuccess } from "../api";

const addComment = ({ channelId, postId, content }) => {
  return async (dispatch, getState) => {
    try {
      const { id, username, avatar } = getState().userState;
      const { posts } = getState().generalState;
      const post = posts[channelId].filter(p => p.id === postId)[0];
      const response = await api.addComment({ postId, content });

      dispatch({
        type: GENERAL_ADD_SELF_COMMENT,
        payload: {
          ...response.data,
          author: {
            id,
            username,
            avatar
          },
          likesCount: 0
        }
      });

      if (!post.firstCommentId) {
        dispatch({
          type: GENERAL_SET_FIRST_COMMENT_ID,
          payload: { channelId, postId, firstCommentId: response.data.id }
        });
      }

      dispatch(postsApiSuccess());
    } catch (error) {
      dispatch(postsApiError());
    }
  };
};

export default addComment;
