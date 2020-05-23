import React from "react";
import classnames from "classnames";
import YoutubeGradient from "../assets/youtube-gradient-logo.png";

const corners = [
  "rounded-tl-full",
  "rounded-tr-full",
  "rounded-bl-full",
  "rounded-br-full"
];

const LogoStyle = {
  bottom: "-5px"
};

const cornerRadius = (index, length) => {
  if (length === 1) return "rounded-full";
  if (length === 2 && index === 0) return "rounded-l-full";
  if (length === 2 && index === 1) return "rounded-r-full";
  if (length === 3 && index === 1) return "row-span-2 rounded-r-full";
  return corners[index];
};

export default function RoomIcon({
  ids,
  images,
  online,
  watching,
  self,
  notifications,
  size = "md",
  className
}) {
  const OnlineFriendStyle = {
    top:
      size === "sm"
        ? "-2px"
        : size === "md"
        ? "0"
        : size === "lg"
        ? "2px"
        : "4px",
    right:
      size === "sm"
        ? "-2px"
        : size === "md"
        ? "0"
        : size === "lg"
        ? "2px"
        : "4px"
  };

  const container1Classes = classnames({
    "flex flex-shrink-0 items-center justify-center relative rounded-full ": true,
    "h-8 w-8": size === "sm",
    "h-12 w-12": size === "md",
    "h-16 w-16": size === "lg",
    "h-20 w-20": size === "xl",
    "bg-imageBorder1": !watching,
    "bg-gradient-r-primary p-2px": watching,
    [className]: className
  });
  const container2Classes = classnames({
    "grid gap-px border-thin  w-full h-full rounded-full ": true,
    "grid-cols-2": images.length !== 1,
    "border-imageBorder1": !watching,
    "border-none bg-primaryBackground p-2px": watching
  });
  const avatarClasses = classnames({
    "border-thin overflow-hidden": true,
    "border-imageBorder1": !watching,
    "border-none": watching
  });
  const onlineFriendClasses = classnames({
    "h-4 w-4 rounded-full bg-onlineColor absolute border-2 border-imageBorder2": true,
    "border-imageBorder1": !watching,
    "border-primaryBackground": watching
  });
  const notificationsClasses = classnames({
    "font-regular text-primaryButtonText text-xs bg-notificationsColor h-5 w-5 rounded-full bg-onlineColor absolute left-0 top-0 flex items-center justify-center select-none": true,
    "px-2": notifications < 10,
    "px-3": notifications >= 10 && notifications <= 99,
    "px-4": notifications >= 100
  });

  return (
    <div className={container1Classes}>
      <div className={container2Classes}>
        {images.slice(0, 4).map((image, index) => (
          <div
            key={ids?.[index] || index}
            className={classnames(
              avatarClasses,
              cornerRadius(index, images.length <= 4 ? images.length : 4)
            )}
          >
            <img className="img h-full" src={image} alt="dogo" />
          </div>
        ))}
      </div>
      {online && (
        <div className={onlineFriendClasses} style={OnlineFriendStyle} />
      )}
      {self && (
        <p
          className="font-semibold text-xs absolute bottom-0
         bg-gradient-br-button text-primaryButtonText rounded flex items-center justify-center p-px px-1 select-none"
        >
          My room
        </p>
      )}
      {watching && (
        <img
          src={YoutubeGradient}
          style={LogoStyle}
          className="w-6 absolute bottom-0"
          alt=""
        />
      )}
      {notifications && (
        <p className={notificationsClasses}>
          {notifications >= 100 ? "99+" : notifications}
        </p>
      )}
    </div>
  );
}
