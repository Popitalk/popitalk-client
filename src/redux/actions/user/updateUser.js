import _ from "lodash";
import * as api from "../../../helpers/api";
import { USER_UPDATE } from "../../../helpers/constants";
import {
  userApiLoading,
  userApiSuccess,
  userApiError,
  userApiSuccess2
} from "../api";

const updateUser = updateInfo => {
  return async (dispatch, getState) => {
    try {
      dispatch(userApiLoading());

      const {
        firstName,
        lastName,
        dateOfBirth,
        email,
        avatar
      } = getState().userState;

      const formData = new FormData();

      if (updateInfo.firstName && updateInfo.firstName !== firstName) {
        formData.append("firstName", updateInfo.firstName);
      }
      if (updateInfo.lastName && updateInfo.lastName !== lastName) {
        formData.append("lastName", updateInfo.lastName);
      }
      if (updateInfo.dateOfBirth && updateInfo.dateOfBirth !== dateOfBirth) {
        formData.append("dateOfBirth", updateInfo.dateOfBirth);
      }
      if (updateInfo.email && updateInfo.email !== email) {
        formData.append("email", updateInfo.email);
      }
      if (updateInfo.avatar) {
        formData.append("avatar", updateInfo.avatar);
      }
      if (updateInfo.password) {
        formData.append("password", updateInfo.password);
      }
      if (updateInfo.newPassword) {
        formData.append("newPassword", updateInfo.newPassword);
      }
      if (updateInfo.removeAvatar && avatar) {
        formData.append("removeAvatar", true);
      }

      const formObject = Object.fromEntries(formData);

      console.log("FORMOBJECT", formObject);

      if (
        _.isEmpty(formObject) ||
        (!formObject.firstName &&
          !formObject.lastName &&
          !formObject.dateOfBirth &&
          !formObject.email &&
          !formObject.newPassword &&
          !formObject.avatar &&
          !formObject.removeAvatar)
      ) {
        dispatch(userApiSuccess());
        return;
      }

      const response = await api.updateUser(formData);

      console.log("RES", response);
      dispatch({
        type: USER_UPDATE,
        payload: response.data
      });

      dispatch(userApiSuccess2());
    } catch (error) {
      if (error.response) {
        dispatch(userApiError(error.response.data.message));
      } else {
        dispatch(userApiError());
      }
    }
  };
};

export default updateUser;
