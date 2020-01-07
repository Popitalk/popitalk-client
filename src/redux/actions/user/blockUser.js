import updateRelationship from "../user/updateRelationship";

const blockUser = userId => {
  return async dispatch => {
    dispatch(updateRelationship(userId, "block"));
  };
};

export default blockUser;
