import React, { useState } from "react";
import "./Header.css";
import Input1 from "../Input1";
import Input3 from "../Input3";
import Logo from "../../assets/logo.png";

const loggedIn = true;

export default function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

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
      <div className="Header--logo">
        <img src={Logo} alt="logo" />
        <h1>Playnows</h1>
      </div>
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
          <div>
            <h4>Andrew</h4>
            <div>
              <img src="https://i.imgur.com/aqjzchq.jpg" alt="avatar" />
            </div>
          </div>
          <div>
            <i className="fas fa-user-plus fa-2x" />
          </div>
          <div>
            <i className="fas fa-bell fa-2x" />
          </div>
          <div>
            <i className="fas fa-cog fa-2x" />
          </div>
          <div>
            <i className="fas fa-info-circle fa-2x" />
          </div>
        </div>
      )}
    </div>
  );
}
