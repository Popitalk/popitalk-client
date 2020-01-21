import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import ChannelCard1 from "../ChannelCard1";
import {
  getUserInfo,
  sendFriendRequest,
  closeAllModals
} from "../../redux/actions";
import Skeleton from "react-loading-skeleton";
import Button1 from "../Button1";
import FriendBlockMenu from "../FriendBlockMenu";
import "./UserProfile.css";

export default function UserProfile({ modal = false }) {
  const history = useHistory();
  const { userId } = useParams();
  const [isModal, setIsModal] = useState(modal);
  const { userId: modalUserId } = useSelector(state => state.modalState);
  const {
    id: ownId,
    friends,
    sentFriendRequests,
    receivedFriendRequests,
    blocked,
    blockers
  } = useSelector(state => state.userState);
  const { defaultAvatar } = useSelector(state => state.generalState);
  const { id, firstName, lastName, username, avatar } = useSelector(
    state => state.userPageState
  );
  const {
    userPageApiLoading: apiLoading,
    userPageApiError: apiError
  } = useSelector(state => state.apiState);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const closeAllModalsDispatcher = useCallback(
    () => dispatch(closeAllModals()),
    [dispatch]
  );

  useEffect(() => {
    if (blockers.includes(userId)) {
      setError(true);
    } else if (!(userId === modalUserId && userId === id)) {
      console.log("HELLO", id, userId, modalUserId);
      dispatch(getUserInfo(userId || modalUserId));
    }
  }, [blockers, dispatch, id, modalUserId, userId]);

  const handleSendFriendRequest = () => {
    dispatch(sendFriendRequest(userId || modalUserId));
  };

  const handleProfilePageLink = () => {
    history.push(`/users/${modalUserId}`);
    closeAllModalsDispatcher();
    setIsModal(false);
  };

  console.log("FF", isModal);
  if (apiError || error) {
    return (
      <div className="UserProfile--container">
        <section>
          <div className="UserProfile--notFound">
            <h3>This user doesn&apos;t exist</h3>
            <h4>Are you sure you have the right link?</h4>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="UserProfile--container">
      <section>
        <div>
          <div className="UserProfile--user">
            {apiLoading ? (
              <Skeleton circle={true} height={200} width={200} />
            ) : (
              <img src={avatar || defaultAvatar} alt="avatar" />
            )}

            <div className="UserProfile--user--nameStats">
              <div>
                <div>
                  <h3>{apiLoading ? <Skeleton width={150} /> : username}</h3>
                  {!apiLoading && userId !== ownId && (
                    <>
                      {friends.includes(userId) ? (
                        <>
                          <Button1 disabled={true}>
                            <i className="fas fa-user-check" />
                            <p>Added</p>
                          </Button1>
                          <FriendBlockMenu type="friend" />
                        </>
                      ) : sentFriendRequests.includes(userId) ? (
                        <>
                          <Button1 disabled={true}>
                            <i className="fas fa-user-plus" />
                            <p>Request Sent</p>
                          </Button1>
                          <FriendBlockMenu type="sent request" />
                        </>
                      ) : receivedFriendRequests.includes(userId) ? (
                        <>
                          <Button1
                            onClick={handleSendFriendRequest}
                            className={
                              "UserProfile--button--receivedFriendRequest"
                            }
                          >
                            <i className="fas fa-user-plus" />
                            <p>Accept</p>
                          </Button1>
                          <FriendBlockMenu type="received request" />
                        </>
                      ) : blocked.includes(userId) ? (
                        <>
                          <Button1 disabled={true}>
                            <i className="fas fa-user-lock" />
                            <p>Blocked</p>
                          </Button1>
                          <FriendBlockMenu type="blocked" />
                        </>
                      ) : (
                        <>
                          <Button1 onClick={handleSendFriendRequest}>
                            <i className="fas fa-user-plus" />
                            <p>Add friend</p>
                          </Button1>
                          <FriendBlockMenu />
                        </>
                      )}
                    </>
                  )}
                </div>

                <p>
                  {apiLoading ? (
                    <Skeleton width={120} />
                  ) : (
                    `${firstName} ${lastName}`
                  )}
                </p>
              </div>
              <div>
                {apiLoading ? (
                  <p>
                    <Skeleton width={100} />
                  </p>
                ) : (
                  <p>
                    <span>10</span> channels
                  </p>
                )}
                {apiLoading ? (
                  <p>
                    <Skeleton width={100} />
                  </p>
                ) : (
                  <p>
                    <span>10</span> friends
                  </p>
                )}
              </div>
              {isModal &&
                (apiLoading ? (
                  <p className="ProfileModal--user--nameStats--link">
                    <Skeleton width={200} />
                  </p>
                ) : (
                  <p
                    onClick={handleProfilePageLink}
                    className="ProfileModal--user--nameStats--link"
                  >
                    {`Go to ${username}'s Profile >`}
                  </p>
                ))}
            </div>
          </div>
          {!blocked.includes(userId || modalUserId) && (
            <>
              <div className="UserProfile--channels">
                <h3>
                  {apiLoading ? (
                    <Skeleton width={392} />
                  ) : (
                    `Shared between you and ${username}`
                  )}
                </h3>
                <div className="UserProfile--channelsGrid">
                  {apiLoading ? (
                    <>
                      <Skeleton height={317} />
                      <Skeleton height={317} />
                      <Skeleton height={317} />
                      <Skeleton height={317} />
                    </>
                  ) : (
                    <>
                      <ChannelCard1 />
                      <ChannelCard1 />
                      <ChannelCard1 />
                      <ChannelCard1 />
                    </>
                  )}
                </div>
              </div>
              <div className="UserProfile--channels">
                <h3>
                  {apiLoading ? (
                    <Skeleton width={250} />
                  ) : (
                    `${username}'s Channels`
                  )}
                </h3>
                <div className="UserProfile--channelsGrid">
                  {apiLoading ? (
                    <>
                      <Skeleton height={317} />
                      <Skeleton height={317} />
                      <Skeleton height={317} />
                      <Skeleton height={317} />
                    </>
                  ) : (
                    <>
                      <ChannelCard1 />
                      <ChannelCard1 />
                      <ChannelCard1 />
                      <ChannelCard1 />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
