import * as api from "../../../helpers/api";
import {
  GENERAL_ADD_NEW_POST,
  GENERAL_SET_FIRST_POST_ID
} from "../../../helpers/constants";
import { postsApiError, postsApiSuccess } from "../api";

const addPost = ({ channelId, content }) => {
  return async (dispatch, getState) => {
    try {
      const { id, username, avatar } = getState().userState;
      const { channels } = getState().generalState;

      const response = await api.addPost({ channelId, content });

      dispatch({
        type: GENERAL_ADD_NEW_POST,
        payload: {
          ...response.data,
          author: {
            id,
            username,
            avatar
          },
          likesCount: 0,
          commentsCount: 0,
          firstCommentId: null
        }
      });

      if (!channels[channelId].firstPostId) {
        dispatch({
          type: GENERAL_SET_FIRST_POST_ID,
          payload: { channelId, firstPostId: response.data.id }
        });
      }
      dispatch(postsApiSuccess());
    } catch (error) {
      dispatch(postsApiError());
    }
  };
};

export default addPost;
