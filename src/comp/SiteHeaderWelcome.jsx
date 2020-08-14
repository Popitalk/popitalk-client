import React, { useState } from "react";
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
    <header>
      {/* Mobile header shown in Signup */}
      <div
        className={`${signup ? "" : "hidden"} sm:hidden
        // flex flex-row h-16 justify-start px-6 border-b border-primaryBorder bg-primaryBackground`}
      >
        <div className="flex w-full py-2 no-underline">
          <div className="flex flex-row items-center transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer select-none">
            <img src={Logo} alt="PlayNow's logo" className="w-8 h-8" />
            <span className="flex ml-2 text-lg font-bold text-primaryText">
              Popitalk
            </span>
          </div>
        </div>
        <div className="flex w-48 items-center justify-end">
          <button
            onClick={() => signupStatus(!signup)}
            className="text-sm text-highlightText underline focus:outline-none hover:filter-brightness-9"
          >
            Back to Login
          </button>
        </div>
      </div>
      {/* Main header */}
      <div
        className={`${
          signup ? "hidden" : ""
        } sm:flex sm:flex-row sm:h-full sm:w-screen sm:px-16 sm:py-3 sm:justify-between sm:items-start 
        // flex flex-col h-screen justify-start px-12 border-b border-primaryBorder bg-primaryBackground`}
      >
        <div
          className="sm:justify-start sm:py-3 sm:mt-0
          // flex justify-center w-full py-8 mt-4 no-underline"
        >
          <div
            className="sm:flex-row
            // flex flex-col items-center justify-start transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer select-none"
          >
            <img
              src={Logo}
              alt="PlayNow's logo"
              className="sm:w-12 sm:h-12 // w-20 h-20"
            />
            <span className="md:ml-2 md:mb-0 md:text-2xl // sm:text-xl sm:mb-0 sm:ml-1 // flex ml-0 mb-4 text-2xl font-bold text-primaryText">
              Popitalk
            </span>
          </div>
        </div>
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
                    onClickEvent={handleLogin}
                    analyticsString="Login Button: SiteHeaderWelcome"
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
                className="sm:hidden // self-center text-highlightText underline text-sm mx-1 my-8 focus:outline-none"
              >
                Don&apos;t have an account?
              </p>
            </ul>
          </form>
        </nav>
      </div>
    </header>
  );
}
