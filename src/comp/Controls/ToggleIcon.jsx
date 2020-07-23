import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

export default function ToggleIcon({
  icons,
  colors,
  className,
  children,
  status,
  toggleStatus
}) {
  const handleToggle = () => {
    toggleStatus(status);
    console.log("toggled");
  };

  const colorChange = classnames({
    [colors.default]: !status,
    [colors.toggle]: status
  });
  return (
    <button
      className={`flex align-middle hover:text-notificationsColor duration-100 focus:outline-none ${colorChange} ${
        className && className.icon ? className.icon : ""
      }`}
      onClick={handleToggle}
    >
      {!status ? (
        <FontAwesomeIcon icon={icons.default} />
      ) : (
        <FontAwesomeIcon icon={icons.toggle} />
      )}

      {children && (
        <span
          className={
            className && className.text
              ? className.text
              : `text-sm font-bold ml-1`
          }
        >
          {children}
        </span>
      )}
    </button>
  );
}
