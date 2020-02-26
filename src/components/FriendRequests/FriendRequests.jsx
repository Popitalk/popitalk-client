import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendFriendRequest, rejectFriendRequest } from "../../redux/actions";
import Button1 from "../Button1";
import "./FriendRequests.css";

export default function FriendRequests() {
  const receivedFriendRequests = useSelector(
    state => state.relationships.receivedFriendRequests
  );
  const defaultAvatar = useSelector(state => state.general.defaultAvatar);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="FriendRequests--container">
      <div className="FriendRequests--header">
        <h3>Friend Requests</h3>
      </div>
      <div className="FriendRequests--requests">
        {receivedFriendRequests.length === 0 ? (
          <h4>Nothing to show</h4>
        ) : (
          receivedFriendRequests.map(userId => (
            <div key={userId}>
              <button
                type="button"
                className="button round"
                onClick={() => dispatch(rejectFriendRequest(userId))}
              >
                <i className="fas fa-times fa-lg" />
              </button>
              <div>
                <p>{users[userId].username}</p>
                <p>
                  {users[userId].firstName} {users[userId].lastName}
                </p>
              </div>
              <img src={users[userId].avatar || defaultAvatar} alt="avatar" />
              <Button1 onClick={() => dispatch(sendFriendRequest(userId))}>
                <i className="fas fa-user-plus" />
              </Button1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
