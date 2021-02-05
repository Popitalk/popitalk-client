import React, { useState } from "react";
import strings from "../../localization/strings";
import TvIcon from "../../assets/icons/tv";
import FriendsIcon from "../../assets/icons/friends";

export default function PanelHeader({
  updateSelectedPage,
  selectedPage,
  viewer,
  numberOfNotifications
}) {
  const [hover, setHover] = useState(false);

  const buttonClassName =
    "relative flex h-12 items-center justify-center w-24 rounded-md duration-100 cursor-pointer";
  const buttonInner = "flex items-center justify-center rounded-lg h-10 w-full";
  const bottomIndicator = (
    <div className="absolute bottom-0 w-full h-1 bg-copy-link rounded-t-sm" />
  );

  if (viewer) {
    return (
      <div className="flex items-center justify-center w-full select-none space-x-4 px-4 h-12">
        <div className={buttonClassName}>
          <div className={buttonInner}>
            <TvIcon active={true} />
          </div>
          {bottomIndicator}
        </div>
        <div
          className={buttonClassName}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          role="button"
        >
          <div
            className={`${buttonInner} hover:bg-background-secondary cursor-not-allowed`}
          >
            <FriendsIcon active={selectedPage === "friends" ? true : false} />
          </div>
        </div>
        {hover === true && (
          <div className="absolute flex top-0 mt-14 w-64 px-6 py-4 bg-background-primary shadow-md rounded-md">
            <p className="text-sm text-copy-primary font-bold">
              {strings.friendsButtonHover}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full select-none px-4 h-12">
      <div
        className={buttonClassName}
        onClick={() => updateSelectedPage("channels")}
        role="button"
      >
        <div
          className={`${buttonInner} ${
            selectedPage !== "channels" && "hover:bg-background-secondary"
          }`}
        >
          <TvIcon active={selectedPage === "channels" ? true : false} />
        </div>
        {selectedPage === "channels" && bottomIndicator}
      </div>
      <div
        className={buttonClassName}
        onClick={() => updateSelectedPage("friends")}
        role="button"
      >
        <div
          className={`${buttonInner} ${
            selectedPage !== "friends" && "hover:bg-background-secondary"
          }`}
        >
          <FriendsIcon active={selectedPage === "friends" ? true : false} />
        </div>
        {selectedPage === "friends" && bottomIndicator}
      </div>
    </div>
  );
}
