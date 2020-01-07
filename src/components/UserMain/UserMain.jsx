import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ChannelCard1 from "../ChannelCard1";
import { getUserInfo, sendFriendRequest } from "../../redux/actions";
import Skeleton from "react-loading-skeleton";
import Button1 from "../Button1";
import FriendBlockMenu from "../FriendBlockMenu";
import "./UserMain.css";

export default function UserMain() {
  const { userId } = useParams();
  const { userId: modalUserId } = useSelector(state => state.modalState);
  const {
    id: ownId,
    defaultAvatar,
    friends,
    sentFriendRequests,
    receivedFriendRequests,
    blocked,
    blockers
  } = useSelector(state => state.userState);
  const { id, firstName, lastName, username, avatar } = useSelector(
    state => state.userPageState
  );
  const {
    userPageApiLoading: apiLoading,
    userPageApiError: apiError
  } = useSelector(state => state.apiState);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (blockers.includes(userId)) {
      setError(true);
    } else if (!(userId === modalUserId && userId === id)) {
      dispatch(getUserInfo(userId));
    }
  }, [blockers, dispatch, id, modalUserId, userId]);

  const handleSendFriendRequest = () => {
    dispatch(sendFriendRequest(userId || modalUserId));
  };

  if (apiError || error) {
    return (
      <div className="UserMain--container">
        <section>
          <div className="UserMain--notFound">
            <h3>This user doesn&apos;t exist</h3>
            <h4>Are you sure you have the right link?</h4>
          </div>
        </section>
      </div>
    );
  }

  const noFriendRequests = [...friends, ...sentFriendRequests, ...blocked];

  return (
    <div className="UserMain--container">
      <section>
        <div>
          <div className="UserMain--user">
            {apiLoading ? (
              <Skeleton circle={true} height={200} width={200} />
            ) : (
              <img src={avatar || defaultAvatar} alt="avatar" />
            )}

            <div className="UserMain--user--nameStats">
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
                              "UserMain--button--receivedFriendRequest"
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
            </div>
          </div>
          {!blocked.includes(userId || modalUserId) && (
            <>
              <div className="UserMain--channels">
                <h3>
                  {apiLoading ? (
                    <Skeleton width={392} />
                  ) : (
                    `Shared between you and ${username}`
                  )}
                </h3>
                <div className="UserMain--channelsGrid">
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
              <div className="UserMain--channels">
                <h3>
                  {apiLoading ? (
                    <Skeleton width={250} />
                  ) : (
                    `${username}'s Channels`
                  )}
                </h3>
                <div className="UserMain--channelsGrid">
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
