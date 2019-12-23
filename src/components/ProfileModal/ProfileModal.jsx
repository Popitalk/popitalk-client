import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, closeAllModals } from "../../redux/actions";
import ChannelCard1 from "../ChannelCard1";
import Button1 from "../Button1";
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
      <div className="ProfileModal--profile">
        <section>
          <div>
            <div className="ProfileModal--user">
              <img src="https://i.imgur.com/tLljw1z.jpg" alt="avatar" />
              <div className="ProfileModal--user--nameStats">
                <div className="ProfileModal--user--nameStats--name">
                  <div>
                    <h3>Djang16</h3>
                    <Button1>
                      <i className="fas fa-user-plus" />
                      <p>Add friend</p>
                    </Button1>
                    {/* <button type="button">
                      <i className="fas fa-user-plus" />
                      <p>Add friend</p>
                    </button> */}
                  </div>

                  <p>Andrew Jang</p>
                </div>
                <div className="ProfileModal--user--nameStats--stats">
                  <p>
                    <span>10</span> channels
                  </p>
                  <p>
                    <span>10</span> friends
                  </p>
                </div>
                <p
                  onClick={handleProfilePageLink}
                  className="ProfileModal--user--nameStats--link"
                >
                  Go to Djang16s Profile &gt;
                </p>
              </div>
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
          </div>
        </section>
      </div>
    </div>
  );
}
