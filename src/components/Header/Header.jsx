/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Input1 from "../Input1";
import HeaderNotifications from "../HeaderNotifications";
import HeaderFriends from "../HeaderFriends";
import HeaderProfile from "../HeaderProfile";
import HeaderSettings from "../HeaderSettings";
import Logo from "../../assets/logo.png";

const loggedIn = true;

export default function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [headerLandingPage, setHeaderLandingPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/welcome")) {
      setHeaderLandingPage(true);
    }
  }, [location]);

  const handleLogin = () => {
    console.log("LOGGIN IN");
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
