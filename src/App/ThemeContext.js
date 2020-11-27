import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getInitialTheme = _ => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return "dark";
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
    <label className="px-2 cursor-pointer">
      <input
        // id="checkbox-element"
        type="checkbox"
        checked={isDark()}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
        className="hidden"
      />
      <FontAwesomeIcon
        className={`text-xl cursor-pointer transition transform ease-in-out hover:scale-105 duration-100 ${
          theme === "dark" ? "text-copy-highlight" : "text-copy-secondary"
        }`}
        icon={theme === "dark" ? ["fa", "moon"] : ["far", "moon"]}
      />
    </label>
  );
};
