import * as api from "../../../helpers/api";
import { GENERAL_ADD_COMMENTS } from "../../../helpers/constants";
import {
  commentsApiLoading,
  commentsApiSuccess,
  commentsApiError
} from "../api";

const getComments = postId => {
  return async (dispatch, getState) => {
    try {
      dispatch(commentsApiLoading());
      const { comments } = getState().generalState;

      const limit = Math.floor(comments[postId].length / 3) * 3 + 3;

      const response = await api.getComments({
        postId,
        limit
      });

      dispatch({
        type: GENERAL_ADD_COMMENTS,
        payload: {
          postId,
          comments: response.data
        }
      });

      dispatch(commentsApiSuccess());
    } catch (error) {
      dispatch(commentsApiError());
    }
  };
};

export default getComments;
