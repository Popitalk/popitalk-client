import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getInitialTheme = _ => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) {
      return "light";
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return "light";
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = theme => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(
    _ => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// toggle.js

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <label className="flex items-center space-x-2 p-1 pr-3 cursor-pointer bg-background-primary rounded-md transition transform ease-in-out hover:scale-105 duration-100 shadow-sm">
      <input
        type="checkbox"
        checked={isDark()}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
        className="hidden"
      />
      <FontAwesomeIcon
        className={`text-lg cursor-pointer ${
          theme === "dark" ? "text-copy-highlight" : "text-copy-secondary"
        }`}
        icon={theme === "dark" ? ["fa", "moon"] : ["far", "moon"]}
      />
      <div>{theme === "dark" ? "On" : "Off"}</div>
    </label>
  );
};
