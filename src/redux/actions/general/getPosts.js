import * as api from "../../../helpers/api";
import { GENERAL_ADD_OLD_POSTS } from "../../../helpers/constants";
import { postsApiLoading, postsApiSuccess, postsApiError } from "../api";

const getPosts = channelId => {
  return async (dispatch, getState) => {
    try {
      dispatch(postsApiLoading());
      const { posts } = getState().generalState;
      const beforePostId = posts[channelId][posts[channelId].length - 1].id;

      const response = await api.getPosts({
        channelId,
        beforePostId
      });

      dispatch({
        type: GENERAL_ADD_OLD_POSTS,
        payload: {
          channelId: channelId,
          ...response.data
        }
      });

      dispatch(postsApiSuccess());
    } catch (error) {
      dispatch(postsApiError());
    }
  };
};

export default getPosts;
