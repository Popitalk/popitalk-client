import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ChannelCard1 from "../ChannelCard1";
import { getUserInfo } from "../../redux/actions";
import Skeleton from "react-loading-skeleton";
import "./UserMain.css";

export default function UserMain() {
  const { userId } = useParams();
  const { defaultAvatar } = useSelector(state => state.userState);
  const { firstName, lastName, username, avatar } = useSelector(
    state => state.userPageState
  );
  const {
    userPageApiLoading: apiLoading,
    userPageApiError: apiError
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

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
                  {!apiLoading && (
                    <button type="button" className="button">
                      <i className="fas fa-user-plus" />
                      <p>Add friend</p>
                    </button>
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
              {apiLoading ? <Skeleton width={250} /> : `${username}'s Channels`}
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
        </div>
      </section>
    </div>
  );
}
