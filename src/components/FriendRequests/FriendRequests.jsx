import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendFriendRequest, rejectFriendRequest } from "../../redux/actions";
import Button1 from "../Button1";
import "./FriendRequests.css";

export default function FriendRequests() {
  const { receivedFriendRequests, defaultAvatar } = useSelector(
    state => state.userState
  );
  const { users } = useSelector(state => state.generalState);
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
          receivedFriendRequests.map(request => (
            <div key={request}>
              <button
                type="button"
                className="button round"
                onClick={() => dispatch(rejectFriendRequest(request))}
              >
                <i className="fas fa-times fa-lg" />
              </button>
              <div>
                <p>{users[request].username}</p>
                <p>
                  {users[request].firstName} {users[request].lastName}
                </p>
              </div>
              <img src={users[request].avatar || defaultAvatar} alt="avatar" />
              <Button1 onClick={() => dispatch(sendFriendRequest(request))}>
                <i className="fas fa-user-plus" />
              </Button1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
