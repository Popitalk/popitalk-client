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

  const [signup, signupStatus] = useState(false);

  const handleLogin = () => {
    dispatchLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <header
      className={`${
        signup ? "hidden" : ""
      } sm:flex sm:flex-row sm:h-full sm:w-screen sm:px-16 sm:py-3 sm:justify-between sm:items-start 
      // flex flex-col h-screen justify-start px-12 border-b border-primaryBorder bg-primaryBackground`}
    >
      <Link
        to="/welcome"
        className="sm:justify-start sm:py-3 sm:mt-0
        // flex justify-center w-full py-8 mt-4 no-underline"
      >
        <div
          className="sm:flex-row
          // flex flex-col items-center justify-start transition transform ease-in-out hover:scale-105 duration-100"
        >
          <img
            src={Logo}
            alt="PlayNow's logo"
            className="sm:w-12 sm:h-12 // w-20 h-20"
          />
          <span className="sm:ml-2 sm:mb-0 sm:text-2xl // flex ml-0 mb-4 text-2xl font-bold text-primaryText">
            Popitalk
          </span>
        </div>
      </Link>
      <nav>
        <form>
          <ul className="flex flex-col">
            <div className="sm:flex-row sm:space-x-2 sm:space-y-0 // flex flex-col space-y-4 w-full items-center">
              <li className="flex flex-col w-full">
                <label
                  className="sm:text-xs // w-full ml-1 mb-1 text-sm font-bold text-primaryText"
                  htmlFor="user"
                >
                  Username or email
                </label>
                <input
                  className="sm:h-8 sm:text-sm
                  // h-10 py-2 px-4 text-md border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none text-primaryText"
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
              <li className="sm:pb-0 // flex flex-col w-full pb-4">
                <label
                  className="sm:text-xs // ml-1 mb-1 text-sm font-bold text-primaryText"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="sm:h-8 sm:text-sm
                  // h-10 py-2 px-4 text-md border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none text-primaryText"
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
                {/* <small className="text-secondaryText text-xs py-1 ml-1">
                  Forgot password?
                </small> */}
              </li>
              <li className="sm:self-end // flex pb-2px flex-shrink-0">
                <Button
                  size="sm"
                  className="sm:h-auto sm:w-auto // w-24 h-10"
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
            </div>
            {apiError ? (
              <small className="sm:self-start sm:my-1 // self-center text-errorText text-xs mx-1 my-4">{`${apiError}. Please try again.`}</small>
            ) : (
              <></>
            )}
            <p
              onClick={() => signupStatus(!signup)}
              role="button"
              className="sm:hidden // self-center text-secondaryText underline text-sm mx-1 my-8 focus:outline-none"
            >
              Don&apos;t have an account?
            </p>
          </ul>
        </form>
      </nav>
    </header>
  );
}
