import React from "react";
import classnames from "classnames";
import Button from "./Button";

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
    <Button
      styleNone
      icon={!status ? icons.default : icons.toggle}
      styleNoneContent={children && children}
      styleNoneContentClassName={
        className && className.text ? className.text : `text-sm font-bold ml-1`
      }
      className={`flex items-center p-2 rounded-xl hover:text-notificationsColor duration-100 focus:outline-none ${colorChange} ${
        className && className.icon ? className.icon : ""
      }`}
      onClick={handleToggle}
      analyticsString="Like Button: ToggleIcon"
    />
  );
}