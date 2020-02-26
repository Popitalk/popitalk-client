import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ChannelCard1 from "../ChannelCard1";
import {
  getUserInfo,
  sendFriendRequest,
  acceptFriendRequest
} from "../../redux/actions";
import Skeleton from "react-loading-skeleton";
import Button1 from "../Button1";
import PopupMenu from "../PopupMenu";
import "./UserMain.css";

export default function UserMain() {
  const { userId } = useParams();
  const { id: ownId } = useSelector(state => state.self);
  const {
    friends,
    sentFriendRequests,
    receivedFriendRequests,
    blocked,
    blockers
  } = useSelector(state => state.relationships);
  const { defaultAvatar } = useSelector(state => state.general);
  const { id, firstName, lastName, username, avatar } = useSelector(
    state => state.userProfile
  );
  const apiLoading = useSelector(state => state.api.userPage.loading);
  const apiError = useSelector(state => state.api.userPage.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [blockers, dispatch, userId]);

  const handleSendFriendRequest = () => {
    dispatch(sendFriendRequest(userId));
  };

  const handleAcceptFriendRequest = () => {
    dispatch(acceptFriendRequest(userId));
  };

  if (apiError) {
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
                          <PopupMenu type="friend" userId={userId} />
                        </>
                      ) : sentFriendRequests.includes(userId) ? (
                        <>
                          <Button1 disabled={true}>
                            <i className="fas fa-user-plus" />
                            <p>Request Sent</p>
                          </Button1>
                          <PopupMenu type="sentRequest" userId={userId} />
                        </>
                      ) : receivedFriendRequests.includes(userId) ? (
                        <>
                          <Button1
                            onClick={handleAcceptFriendRequest}
                            className={
                              "UserMain--button--receivedFriendRequest"
                            }
                          >
                            <i className="fas fa-user-plus" />
                            <p>Accept</p>
                          </Button1>
                          <PopupMenu type="receivedRequest" userId={userId} />
                        </>
                      ) : blocked.includes(userId) ? (
                        <>
                          <Button1 disabled={true}>
                            <i className="fas fa-user-lock" />
                            <p>Blocked</p>
                          </Button1>
                          <PopupMenu type="blocked" userId={userId} />
                        </>
                      ) : (
                        <>
                          <Button1 onClick={handleSendFriendRequest}>
                            <i className="fas fa-user-plus" />
                            <p>Add friend</p>
                          </Button1>
                          <PopupMenu type="unrelated" userId={userId} />
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
          {!blocked.includes(userId) && (
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
