import React, { useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, closeModal, closeAllModals } from "../../redux/actions";
import ChannelCard1 from "../ChannelCard1";
import Button1 from "../Button1";
import "./ProfileModal.css";

export default function ProfileModal() {
  const history = useHistory();
  const firstModal = useSelector(
    ({ modalState }) => modalState.components.length === 1
  );
  const { userId } = useSelector(state => state.modalState);

  const { defaultAvatar } = useSelector(state => state.userState);
  const { firstName, lastName, username, avatar } = useSelector(
    state => state.userPageState
  );
  const {
    userPageApiLoading: apiLoading,
    userPageApiError: apiError
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);
  const closeAllModalsDispatcher = useCallback(
    () => dispatch(closeAllModals()),
    [dispatch]
  );

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

  const handleProfilePageLink = () => {
    history.push(`/users/${userId}`);
    closeAllModalsDispatcher();
  };

  if (apiError) {
    return (
      <div className="ProfileModal--container">
        <div className="ProfileModal--header">
          {!firstModal && (
            <i
              role="button"
              className="fas fa-chevron-left fa-2x"
              onClick={closeModalDispatcher}
            />
          )}
          <h2>Profile</h2>
        </div>
        <div className="ProfileModal--profile">
          <section>
            <div className="ProfileModal--notFound">
              <h3>This user doesn&apos;t exist</h3>
              <h4>Are you sure you have the right link?</h4>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="ProfileModal--container">
      <div className="ProfileModal--header">
        {!firstModal && (
          <i
            role="button"
            className="fas fa-chevron-left fa-2x"
            onClick={closeModalDispatcher}
          />
        )}
        <h2>Profile</h2>
      </div>
      <div className="ProfileModal--profile">
        <section>
          <div>
            <div className="ProfileModal--user">
              {apiLoading ? (
                <Skeleton circle={true} height={200} width={200} />
              ) : (
                <img src={avatar || defaultAvatar} alt="avatar" />
              )}
              <div className="ProfileModal--user--nameStats">
                <div className="ProfileModal--user--nameStats--name">
                  <div>
                    <h3>{apiLoading ? <Skeleton width={150} /> : username}</h3>
                    {!apiLoading && (
                      <Button1>
                        <i className="fas fa-user-plus" />
                        <p>Add friend</p>
                      </Button1>
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
                <div className="ProfileModal--user--nameStats--stats">
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
                {apiLoading ? (
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
                )}
              </div>
            </div>
            <div className="ProfileModal--channels">
              <h3>
                {apiLoading ? (
                  <Skeleton width={392} />
                ) : (
                  `Shared between you and ${username}`
                )}
              </h3>
              <div className="ProfileModal--channelsGrid">
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
            <div className="ProfileModal--channels">
              <h3>
                {apiLoading ? (
                  <Skeleton width={250} />
                ) : (
                  `${username}'s Channels`
                )}
              </h3>
              <div className="ProfileModal--channelsGrid">
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
          </div>
        </section>
      </div>
    </div>
  );
}
