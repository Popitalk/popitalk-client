/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Redirect,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { openProfileModal, openUserSettingsModal } from "../../redux/actions";
import "./Header.css";
import Input1 from "../Input1";
import Input3 from "../Input3";
import NotificationsPanel from "../NotificationsPanel";
import Logo from "../../assets/logo.png";

const loggedIn = true;

export default function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const friendsRef = useRef(null);
  const notificationsRef = useRef(null);
  const dispatch = useDispatch();
  const openProfileModalDispatcher = useCallback(
    () => dispatch(openProfileModal()),
    [dispatch]
  );
  const openUserSettingsModalDispatcher = useCallback(
    () => dispatch(openUserSettingsModal()),
    [dispatch]
  );

  useEffect(() => {
    if (!friendsOpen) return;

    friendsRef.current.focus();
  }, [friendsOpen]);

  useEffect(() => {
    if (!notificationsOpen) return;

    notificationsRef.current.focus();
  }, [notificationsOpen]);

  const handleLogin = () => {
    console.log("LOGGIN IN");
    setUsername("");
    setPassword("");
  };

  const handleSubmit = () => {
    setSearch("");
  };

  return (
    <div className="Header--container">
      <Link to="/channels/following" className="Header--logo">
        <img src={Logo} alt="logo" />
        <h1>Playnows</h1>
      </Link>
      {loggedIn && (
        <Input3
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              handleSubmit();
            }
          }}
          onClick={handleSubmit}
          maxLength={120}
        />
      )}
      {!loggedIn && (
        <div className="Header--login">
          <Input1
            type="text"
            header="Username or email"
            value={username}
            spellCheck={false}
            onChange={e => setUsername(e.target.value)}
          />
          <Input1
            type="password"
            header="Password"
            value={password}
            spellCheck={false}
            onChange={e => setPassword(e.target.value)}
          />
          <p>Forgot Password?</p>
          <button type="button" className="button pill" onClick={handleLogin}>
            Log in
          </button>
        </div>
      )}
      {loggedIn && (
        <div className="Header--user">
          <div
            className="Header--nameAvatar"
            role="button"
            onClick={openProfileModalDispatcher}
          >
            <h4>Andrew</h4>
            <div className="Header--avatar">
              <img src="https://i.imgur.com/aqjzchq.jpg" alt="avatar" />
            </div>
          </div>
          <div>
            <i
              className="fas fa-user-plus fa-2x"
              role="button"
              onMouseDown={
                notificationsOpen
                  ? undefined
                  : () => {
                      // setFriendsOpen(false);
                      setNotificationsOpen(true);
                    }
              }
            />
            {notificationsOpen && (
              <div
                className="Header--popup"
                ref={notificationsRef}
                tabIndex="0"
                onBlur={() => {
                  setNotificationsOpen(false);
                }}
              >
                <NotificationsPanel />
              </div>
            )}
          </div>
          <div>
            <i
              className="fas fa-bell fa-2x"
              role="button"
              onMouseDown={
                notificationsOpen
                  ? undefined
                  : () => {
                      // setFriendsOpen(false);
                      setNotificationsOpen(true);
                    }
              }
            />
            {notificationsOpen && (
              <div
                className="Header--popup"
                ref={notificationsRef}
                tabIndex="0"
                onBlur={() => {
                  setNotificationsOpen(false);
                }}
              >
                <NotificationsPanel />
              </div>
            )}
          </div>
          <div>
            <i
              className="fas fa-cog fa-2x"
              role="button"
              onClick={openUserSettingsModalDispatcher}
            />
          </div>
          <div>
            <i className="fas fa-info-circle fa-2x" />
          </div>
        </div>
      )}
    </div>
  );
}
