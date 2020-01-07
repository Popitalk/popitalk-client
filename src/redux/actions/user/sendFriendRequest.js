import updateRelationship from "../user/updateRelationship";

const sendFriendRequest = userId => {
  return async dispatch => {
    dispatch(updateRelationship(userId, "friend"));
  };
};

export default sendFriendRequest;
