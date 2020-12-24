import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../helpers/functions";

const SiteHeaderWelcome = ({ apiLoading, apiError, dispatchLogin }) => {
  const sectionClassName = "flex flex-col w-full space-y-1";
  const inputClassName =
    "text-sm py-2 px-4 border rounded-lg bg-background-secondary border-outline-primary hover:shadow-inner duration-75 transition focus:outline-none text-copy-primary";
  const labelClassName = "w-full text-sm font-bold text-copy-primary";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileLogin, setMobileLogin] = useState(true);
  const size = useWindowSize();

  const handleLogin = e => {
    if (e) e.preventDefault();
    dispatchLogin(username, password);
    setUsername("");
    setPassword("");
  };

  const mobileLoginButton = (
    <Button
      actionButton
      size={mobileLogin === false && "sm"}
      className="block sm:hidden flex-shrink-0 rounded-lg"
      icon={mobileLogin === false && "times"}
      onClick={() => setMobileLogin(!mobileLogin)}
    >
      {strings.loginButton}
    </Button>
  );

  useEffect(() => {
    // Triggers collapse when screen size reduces.
    if (size.width >= 1024 && mobileLogin === false) {
      setMobileLogin(true);
    }
  }, [mobileLogin, size.width]);

  return (
    <header className="relative flex h-auto w-full md:px-16 px-4 py-2 justify-between">
      <Link to="/" className="flex no-underline">
        <Button
          imageButton
          imageButtonSrc={Logo}
          imageButtonClassName="w-12 h-12"
          imageButtonSpan="Popitalk"
          imageButtonSpanClassName="md:ml-2 md:text-2xl // sm:text-xl sm:ml-1 // flex ml-1 text-2xl text-copy-primary"
          analyticsString="Logo Button: SiteHeaderWelcome"
        />
      </Link>
      {mobileLoginButton}
      <div
        className={`${
          mobileLogin === true
            ? "hidden"
            : "absolute w-full z-30 -ml-4 px-8 mt-14"
        } sm:flex flex-col bg-background-primary rounded-lg`}
      >
        <div className="flex flex-col p-8 sm:p-0 sm:flex-row space-x-2 space-y-4 items-end">
          <div className={sectionClassName}>
            <label className={labelClassName} htmlFor="user">
              {strings.loginUsername}
            </label>
            <input
              className={inputClassName}
              type="text"
              value={username}
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
          </div>
          <div className={sectionClassName}>
            <label className={labelClassName} htmlFor="password">
              {strings.loginPassword}
            </label>
            <input
              className={inputClassName}
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
          </div>
          <Button
            actionButton
            className="flex-shrink-0 rounded-lg mt-8 mt:pt-0"
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
        </div>
        <small className="self-start m-1 text-copy-error text-xs h-4">
          {apiError && `${apiError}. Please try again.`}
        </small>
      </div>
    </header>
  );
};

export default SiteHeaderWelcome;
