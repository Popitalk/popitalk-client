import * as api from "../../../helpers/api";
import {
  GENERAL_ADD_POST_LIKE,
  GENERAL_ADD_COMMENT_LIKE,
  GENERAL_DELETE_POST_LIKE,
  GENERAL_DELETE_COMMENT_LIKE
} from "../../../helpers/constants";
import { likesApiLoading, likesApiSuccess, likesApiError } from "../api";

const updateLike = ({ channelId, postId, commentId, liked }) => {
  return async (dispatch, getState) => {
    try {
      const { posts, comments } = getState().generalState;
      dispatch(likesApiLoading());

      if (channelId && postId) {
        if (liked) {
          console.log("DELETING POST", channelId, postId);
          const response = await api.deleteLike({ postId });
          console.log("DELETING POST RESPONSE", response);
        } else {
          console.log("LIKING POST", channelId, postId);
          const response = await api.addLike({ postId });
          console.log("LIKING POST RESPONSE", response);
        }
      } else if (postId && commentId) {
        if (liked) {
          console.log("DELETING COMMENT", postId, commentId);
          const response = await api.deleteLike({ commentId });
          console.log("DELETING RESPONSE", response);
        } else {
          console.log("LIKING COMMENT", postId, commentId);
          const response = await api.addLike({ commentId });
          console.log("LIKING COMMENT RESPONSE", response);
        }
      }
      // dispatch({
      //   type: GENERAL_SET_ROOM_NAME,
      //   payload: response.data
      // });
      dispatch(likesApiSuccess());
    } catch (error) {
      dispatch(likesApiError());
    }
  };
};

export default updateLike;
