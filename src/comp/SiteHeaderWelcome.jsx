import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./Controls/Button";

export default function SiteHeaderWelcome({
  apiLoading,
  apiError,
  dispatchLogin
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatchLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <header className="fixed top-0 w-screen flex flex-col px-4 py-2 border-b md:px-16 sm:justify-between sm:flex-row bg-primaryBackground border-primaryBorder z-20">
      <div className="flex items-center">
        <Link to="/welcome">
          <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
        </Link>
        <span className="ml-2 text-3xl font-bold text-primaryText">
          Popitalk
        </span>
      </div>
      <nav>
        <form>
          <ul className="flex flex-col sm:space-x-2 sm:flex-row">
            {apiError ? (
              <li className="self-center">
                <small className="text-errorText">{`${apiError}. Please try again.`}</small>
              </li>
            ) : (
              <></>
            )}
            <li className="flex flex-col">
              <label className="mb-1 text-sm font-bold" htmlFor="user">
                Username or email
              </label>
              <input
                className="h-8 p-2 border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none"
                type="text"
                value={username}
                id="user"
                spellCheck={false}
                onChange={e => setUsername(e.target.value)}
                disabled={apiLoading}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    handleLogin();
                  }
                }}
              />
            </li>
            <li className="flex flex-col">
              <label className="mb-1 text-sm font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="h-8 p-2 border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none"
                type="password"
                id="password"
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
              <small className="text-secondaryText">Forgot password?</small>
            </li>
            <li className="flex self-end sm:self-center">
              <Button
                size="sm"
                className="h-8 mt-1"
                shape="regular"
                onClick={handleLogin}
                disabled={
                  apiLoading ||
                  password.trim().length === 0 ||
                  username.trim().length === 0
                }
              >
                Log In
              </Button>
            </li>
          </ul>
        </form>
      </nav>
    </header>
  );
}
