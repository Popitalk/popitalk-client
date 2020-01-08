/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { login } from "../../redux/actions";
import Input1 from "../Input1";
import HeaderNotifications from "../HeaderNotifications";
import HeaderFriends from "../HeaderFriends";
import HeaderProfile from "../HeaderProfile";
import HeaderSettings from "../HeaderSettings";
import Logo from "../../assets/logo.png";
import Button1 from "../Button1";

const Spinner = () => (
  <div className="Header--spinner">
    <div className="Header--spinner--circle">
      <div></div>
    </div>
  </div>
);

export default function Header() {
  const { loggedIn } = useSelector(state => state.userState);
  const { userApiLoading: apiLoading, userApiError: apiError } = useSelector(
    state => state.apiState
  );
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [headerLandingPage, setHeaderLandingPage] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname.startsWith("/welcome")) {
      setHeaderLandingPage(true);
    } else {
      setHeaderLandingPage(false);
    }
  }, [location]);

  const handleLogin = () => {
    dispatch(
      login({
        usernameOrEmail: username,
        password: password
      })
    );
    setUsername("");
    setPassword("");
  };

  return (
    <div
      className={`Header--container${
        headerLandingPage ? " Header--landingPage" : ""
      }`}
    >
      <Link to="/channels/following" className="Header--logo">
        <img src={Logo} alt="logo" />
        <h1>Playnows</h1>
      </Link>
      {!loggedIn && (
        <div className="Header--login">
          <div className={apiError ? "Header--login--error" : ""}>
            <p>Username or email</p>
            <input
              name="username"
              type="text"
              value={username}
              spellCheck={false}
              onChange={e => setUsername(e.target.value)}
              disabled={apiLoading}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  handleLogin();
                }
              }}
            />
          </div>
          <div className={apiError ? "Header--login--error" : ""}>
            <p>Password</p>
            <input
              name="password"
              type="password"
              value={password}
              spellCheck={false}
              onChange={e => setPassword(e.target.value)}
              disabled={apiLoading}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  handleLogin();
                }
              }}
            />
          </div>
          <p>Forgot Password?</p>
          <Button1 pill onClick={handleLogin} disabled={apiLoading}>
            {apiLoading ? <Spinner /> : "Log in"}
          </Button1>
        </div>
      )}
      {loggedIn && (
        <div className="Header--user">
          <HeaderProfile />
          <HeaderFriends />
          <HeaderNotifications />
          <HeaderSettings />
          <a href="https://google.com" className="Header--community">
            <i className="fas fa-info-circle fa-2x" />
          </a>
        </div>
      )}
    </div>
  );
}
