import React from "react";
import classnames from "classnames";

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
  className
}) {
  const container1Classes = classnames({
    "flex items-center justify-center relative rounded-full": true,
    "h-6 w-6": size === "sm",
    "h-8 w-8": size === "md",
    "h-12 w-12": size === "lg",
    "h-16 w-16": size === "xl",
    "bg-imageBorder1": !watching,
    "bg-pink": watching,
    [className]: className
  });
  const container2Classes = classnames({
    "grid gap-px border-thin p-px w-full h-full rounded-full": true,
    "grid-cols-2": images.length !== 1,
    "border-imageBorder1": !watching,
    "border-pink": watching
  });
  const avatarClasses = classnames({
    "border-thin overflow-hidden": true,
    "border-imageBorder1": !watching,
    "border-pink": watching
  });
  const onlineFriendClasses = classnames({
    "h-5 w-5 rounded-full bg-onlineColor absolute right-0 top-0 border-2 border-imageBorder2": true,
    "border-imageBorder1": !watching,
    "border-pink": watching
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
        {images.map((image, index) => (
          <div
            key={ids?.[index] || index}
            className={classnames(
              avatarClasses,
              cornerRadius(index, images.length)
            )}
          >
            <img className="img h-full" src={image} alt="dogo" />
          </div>
        ))}
      </div>
      {online && <div className={onlineFriendClasses} />}
      {self && (
        <p
          className="font-semibold text-xs absolute bottom-0
         bg-gradient-br-button text-primaryButtonText rounded-pill flex items-center justify-center py-1 px-1 select-none"
        >
          My room
        </p>
      )}
      {notifications && (
        <p className={notificationsClasses}>
          {notifications >= 100 ? "99+" : notifications}
        </p>
      )}
    </div>
  );
}
