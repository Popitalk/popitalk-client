import updateRelationship from "../user/updateRelationship";

const rejectFriendRequest = userId => {
  return async dispatch => {
    dispatch(updateRelationship(userId, "unfriend"));
  };
};

export default rejectFriendRequest;
