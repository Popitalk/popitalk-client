import * as api from "../../../helpers/api";
import { userApiLoading, userApiSuccess, userApiError } from "../api";

const updateRelationship = (userId, type) => {
  return async dispatch => {
    try {
      dispatch(userApiLoading());
      await api.updateUserRelationships({ userId, type });
      dispatch(userApiSuccess());
    } catch (error) {
      dispatch(userApiError());
    }
  };
};

export default updateRelationship;
