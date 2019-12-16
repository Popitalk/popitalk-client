import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, closeAllModals } from "../../redux/actions";
import ChannelCard1 from "../ChannelCard1";
import "./ProfileModal.css";

export default function ProfileModal() {
  const history = useHistory();
  const firstModal = useSelector(
    ({ modalState }) => modalState.components.length === 1
  );
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);
  const closeAllModalsDispatcher = useCallback(
    () => dispatch(closeAllModals()),
    [dispatch]
  );

  const handleProfilePageLink = () => {
    history.push("/users/abc");
    closeAllModalsDispatcher();
  };

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
      <section>
        <div className="ProfileModal--user">
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="avatar" />
          <div className="ProfileModal--user--nameStatsLink">
            <div>
              <h3>Djang16</h3>
              <p>Andrew Jang</p>
            </div>
            <div>
              <p>
                <span>10</span> channels
              </p>
              <p>
                <span>10</span> friends
              </p>
            </div>
            <p onClick={handleProfilePageLink}>Go to Djang16s Profile &gt;</p>
          </div>
          <button type="button" className="button">
            <i className="fas fa-user-plus" />
            <p>Add friend</p>
          </button>
        </div>
        <div className="ProfileModal--channels">
          <h3>Shared between you and Djang16</h3>
          <div className="ProfileModal--channelsGrid">
            <ChannelCard1 />
            <ChannelCard1 />
            <ChannelCard1 />
            <ChannelCard1 />
          </div>
        </div>
        <div className="ProfileModal--channels">
          <h3>Djang16&apos;s Channels</h3>
          <div className="ProfileModal--channelsGrid">
            <ChannelCard1 />
            <ChannelCard1 />
            <ChannelCard1 />
            <ChannelCard1 />
          </div>
        </div>
      </section>
    </div>
  );
}
