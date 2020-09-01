import React from "react";
import classnames from "classnames";
import strings from "../../helpers/localization";

const corners = [
  "rounded-tl-full",
  "rounded-tr-full",
  "rounded-bl-full",
  "rounded-br-full"
];

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
  className,
  tooltip,
  tooltipPlace,
  isLoading
}) {
  const OnlineFriendStyle = {
    bottom:
      size === "sm"
        ? "-2px"
        : size === "md"
        ? "0"
        : size === "lg"
        ? "2px"
        : "4px",
    left:
      size === "sm"
        ? "-2px"
        : size === "md"
        ? "0"
        : size === "lg"
        ? "2px"
        : "4px"
  };

  const container1Classes = classnames({
    "flex flex-shrink-0 items-center justify-center relative rounded-full rounded-circle": true,
    "h-8 w-8": size === "sm",
    "h-12 w-12": size === "md",
    "h-14 w-14": size === "lg",
    "h-16 w-16": size === "xl",
    "h-20 w-20": size === "2xl",
    "bg-imageBorder1": !watching,
    "bg-gradient-r-primary p-2px": watching,
    [className]: className
  });
  const container2Classes = classnames({
    "grid w-full h-full rounded-full overflow-hidden": true,
    "grid-cols-2": images.length !== 1,
    "border-imageBorder1": !watching,
    "border-none bg-primaryBackground p-2px": watching
  });
  const avatarClasses = classnames({
    "border overflow-hidden": true,
    "border-imageBorder1": !watching,
    "border-none": watching
  });
  const onlineFriendClasses = classnames({
    "h-4 w-4 rounded-full border border-imageBorder2 bg-onlineColor absolute": true,
    "border-imageBorder1": !watching,
    "border-primaryBackground": watching
  });
  const notificationsClasses = classnames({
    "font-regular text-primaryButtonText text-xs bg-gradient-r-cancel h-2 w-2 animate-bounce rounded-lg absolute right-0 top-0 flex items-center justify-center select-none": true
    // "px-2": notifications < 10,
    // "px-3": notifications >= 10 && notifications <= 99,
    // "px-4": notifications >= 100
  });

  return (
    <div className={container1Classes}>
      {isLoading ? (
        <div className="animate-pulse bg-gray-200 grid w-full h-full rounded-full overflow-hidden" />
      ) : (
        <>
          <div className={container2Classes}>
            {images.slice(0, 4).map((image, index) => (
              <div
                key={ids?.[index] || index}
                className={classnames(
                  avatarClasses,
                  cornerRadius(index, images.length <= 4 ? images.length : 4)
                )}
              >
                <img
                  className="img h-full"
                  src={image}
                  alt="dogo"
                  data-tip={tooltip}
                  data-place={tooltipPlace}
                />
              </div>
            ))}
          </div>
          {online && (
            <div className={onlineFriendClasses} style={OnlineFriendStyle} />
          )}
          {self && (
            <p
              className="font-bold text-xs absolute bottom-0 left-0 truncate
            text-highlightText bg-primaryBackground rounded-xl p-1 flex items-center justify-center select-none"
            >
              {strings.myRoom}
            </p>
          )}
          {notifications && (
            <p className={notificationsClasses}>
              {notifications >= 100 ? "99+" : notifications}
            </p>
          )}
        </>
      )}
    </div>
  );
}
