import updateRelationship from "../user/updateRelationship";

const unblockUser = userId => {
  return async dispatch => {
    dispatch(updateRelationship(userId, "unblock"));
  };
};

export default unblockUser;
