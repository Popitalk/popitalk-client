import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

export default function ToggleIcon({
  icons,
  colors,
  className,
  children,
  status
}) {
  const [toggle, setToggle] = useState(status);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const colorChange = classnames({
    [colors.default]: !toggle,
    [colors.toggle]: toggle
  });
  return (
    <button
      className={`flex align-middle ${colorChange} ${
        className && className.icon ? className.icon : ""
      }`}
      onClick={handleToggle}
    >
      {!toggle ? (
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
