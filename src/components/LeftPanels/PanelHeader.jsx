import React from "react";
import strings from "../../localization/strings";
import TvIcon from "../../assets/icons/tv";
import FriendsIcon from "../../assets/icons/friends";

export default function PanelHeader({
  updateSelectedPage,
  selectedPage,
  viewer,
  numberOfNotifications,
  openSignUpRequiredModal
}) {
  const buttonClassName =
    "flex h-16 items-center justify-center w-full rounded-md duration-100 cursor-pointer hover:bg-hover-highlight space-x-2";
  const buttonInner = "flex items-center justify-center h-14 w-14";

  return (
    <div className="flex flex-col items-center justify-center w-full select-none p-4 h-40">
      <div
        className={buttonClassName}
        onClick={() => updateSelectedPage("channels")}
        role="button"
      >
        <div className={buttonInner}>
          <TvIcon active={selectedPage === "channels" ? true : false} />
        </div>
        <h2
          className={`text-xl w-32 ${
            selectedPage === "channels"
              ? "text-copy-link"
              : "text-copy-secondary"
          }`}
        >
          {strings.channels}
        </h2>
      </div>
      <div
        className={buttonClassName}
        role="button"
        onClick={
          !viewer
            ? () => updateSelectedPage("friends")
            : openSignUpRequiredModal
        }
      >
        <div className={buttonInner}>
          <FriendsIcon active={selectedPage === "friends" ? true : false} />
        </div>
        <h2
          className={`text-xl w-32 ${
            selectedPage === "friends"
              ? "text-copy-link"
              : "text-copy-secondary"
          }`}
        >
          {strings.friends}
        </h2>
      </div>
    </div>
  );
}
