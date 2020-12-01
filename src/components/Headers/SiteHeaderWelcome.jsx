import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";

const SiteHeaderWelcome = ({ apiLoading, apiError, dispatchLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [signup, signupStatus] = useState(false);

  const handleLogin = e => {
    if (e) e.preventDefault();
    dispatchLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <header>
      {/* Mobile header shown in Signup */}
      <div
        className={`${signup ? "" : "hidden"} sm:hidden
        // flex flex-row items-center justify-between w-full h-16 px-6 border-b border-outline-primary bg-background-primary`}
      >
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-8 h-8 mr-2"
          imageButtonSpan="Popitalk"
          analyticsString="Popitalk Logo Button: SiteHeaderWelcome"
        />
        <Button
          styleNone
          hoverable
          styleNoneContent="Back to Login"
          onClick={() => signupStatus(!signup)}
          analyticsString="Back to Login Button: SiteHeaderWelcome"
          className="text-sm text-copy-highlight underline hover:filter-brightness-9"
        />
      </div>
      {/* Main header */}
      <div
        className={`${
          signup ? "hidden" : ""
        } sm:flex sm:flex-row sm:h-full sm:w-screen sm:px-16 sm:py-3 sm:justify-between sm:items-start sm:bg-background-primary
        // flex flex-col h-screen justify-start px-12 border-b border-outline-primary bg-background-primary`}
      >
        <div
          className="sm:justify-start sm:py-3 sm:mt-0
          // flex justify-center w-full py-8 mt-4"
        >
          <Button
            imageButton
            imageButtonSrc={Logo}
            imageButtonClassName="w-12 h-12 hover:scale-105"
            imageButtonSpan="Popitalk"
            imageButtonSpanClassName="md:ml-2 md:text-2xl // sm:text-xl sm:ml-1 // flex ml-1 text-2xl text-copy-primary"
            analyticsString="Logo Button: SiteHeaderWelcome"
          />
        </div>
        <nav className="flex flex-col">
          <form>
            <ul className="flex flex-col">
              <div className="sm:flex-row sm:space-x-2 sm:space-y-0 // flex flex-col space-y-4 w-full items-center">
                <li className="flex flex-col w-full">
                  <label
                    className="sm:text-xs // w-full ml-1 mb-1 text-sm font-bold text-copy-primary"
                    htmlFor="user"
                  >
                    {strings.loginUsername}
                  </label>
                  <input
                    className="sm:h-8 sm:text-sm
                    // h-10 py-2 px-4 text-md border rounded-lg bg-background-secondary border-outline-primary focus:outline-none text-copy-primary"
                    type="text"
                    value={username}
                    size="sm"
                    id="user"
                    spellCheck={false}
                    onChange={e => setUsername(e.target.value)}
                    disabled={apiLoading}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        handleLogin();
                      }
                    }}
                  />
                </li>
                <li className="sm:pb-0 // flex flex-col w-full pb-4">
                  <label
                    className="sm:text-xs // ml-1 mb-1 text-sm font-bold text-copy-primary"
                    htmlFor="password"
                  >
                    {strings.loginPassword}
                  </label>
                  <input
                    className="sm:h-8 sm:text-sm
                    // h-10 py-2 px-4 text-md border rounded-lg bg-background-secondary border-outline-primary focus:outline-none text-copy-primary"
                    type="password"
                    id="password"
                    value={password}
                    spellCheck={false}
                    onChange={e => setPassword(e.target.value)}
                    disabled={apiLoading}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        handleLogin();
                      }
                    }}
                  />
                  {/* <small className="text-copy-secondary text-xs py-1 ml-1">
                    Forgot password?
                  </small> */}
                </li>
                <li className="sm:self-end // flex pb-2px flex-shrink-0">
                  <Button
                    actionButton
                    size="sm"
                    className="sm:h-auto sm:w-auto // w-24 h-10 shadow-none"
                    shape="regular"
                    onClick={handleLogin}
                    analyticsString="Login Button: SiteHeaderWelcome"
                    disabled={
                      apiLoading ||
                      password.trim().length === 0 ||
                      username.trim().length === 0
                    }
                  >
                    {strings.loginButton}
                  </Button>
                </li>
              </div>
              {apiError && (
                <small className="sm:self-start sm:my-1 // self-center text-copy-error text-xs mx-1 my-4">{`${apiError}. Please try again.`}</small>
              )}
            </ul>
          </form>
          <Button
            styleNone
            styleNoneContent="Don't have an account?"
            onClick={() => signupStatus(!signup)}
            analyticsString="Don't have an account Button: SiteHeaderWelcome"
            className="sm:hidden //  text-copy-highlight underline text-sm mx-1 my-8 focus:outline-none"
          />
        </nav>
      </div>
    </header>
  );
};

export default SiteHeaderWelcome;
