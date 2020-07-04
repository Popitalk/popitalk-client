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
    <header className="top-0 w-screen flex flex-col px-4 py-3 border-b md:px-16 sm:justify-between sm:flex-row bg-primaryBackground border-primaryBorder z-20">
      <Link to="/welcome" className="no-underline">
        <div className="flex items-center transition transform ease-in-out hover:scale-105 duration-100 py-3">
          <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
          <span className="ml-3 text-2xl font-bold text-primaryText">
            Popitalk
          </span>
        </div>
      </Link>
      <nav>
        <form>
          <ul className="flex flex-col sm:space-x-2 sm:flex-row">
            {apiError ? (
              <li className="self-center">
                <small className="text-errorText text-xs mr-4">{`${apiError}. Please try again.`}</small>
              </li>
            ) : (
              <></>
            )}
            <li className="flex flex-col">
              <label
                className="ml-1 mb-1 text-xs font-bold text-primaryText"
                htmlFor="user"
              >
                Username or email
              </label>
              <input
                className="h-8 py-2 px-3 border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none text-sm text-primaryText"
                type="text"
                value={username}
                size="sm"
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
              <label
                className="ml-1 mb-1 text-xs font-bold text-primaryText"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="h-8 py-2 px-3 border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none text-sm"
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
              <small className="text-secondaryText text-xs py-1 ml-1">
                Forgot password?
              </small>
            </li>
            <li className="flex self-end sm:self-center pb-2 transition transform ease-in-out hover:scale-105 duration-100">
              <Button
                size="sm"
                className=""
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
