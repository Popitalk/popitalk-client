import React, { useState } from "react";
import "./Header.css";
import Input1 from "../Input1";
import Logo from "../../assets/logo.png";

export default function Header({ header }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("LOGGIN IN");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="Header--container">
      <div className="Header--logo">
        <img src={Logo} alt="logo" />
        <h1>Playnows</h1>
      </div>
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
    </div>
  );
}
