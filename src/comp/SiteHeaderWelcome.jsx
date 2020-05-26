import React from "react";
import Logo from "../assets/logo.png";

import Button from "./Button";

export default function SiteHeaderWelcome() {
  return (
    <header className="flex flex-col px-16 py-4 border-b md:justify-between md:flex-row bg-primaryBackground border-primaryBorder">
      <div className="flex items-center justify-center mb-8">
        <img src={Logo} alt="PlayNow's logo" className="w-12 h-12" />
        <span className="ml-2 text-3xl font-bold text-primaryText">
          Popitalk
        </span>
      </div>
      <nav>
        <form>
          <ul className="flex flex-col md:space-x-2 md:flex-row">
            <li className="flex flex-col">
              <label className="mb-1 text-sm font-bold" htmlFor="user">
                Username or email
              </label>
              <input
                className="h-8 p-2 border rounded-lg bg-tertiaryBackground border-primaryBorder focus:outline-none"
                type="text"
                id="user"
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
              />
              <small className="text-secondaryText">Forgot password?</small>
            </li>
            <li className="flex self-end md:self-center">
              <Button size="sm" className="h-8 mt-1" shape="regular">
                Log In
              </Button>
            </li>
          </ul>
        </form>
      </nav>
    </header>
  );
}
