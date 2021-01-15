import React from "react";
import Button from "../Controls/Button";
import Logo from "../../assets/greyicon.png";
import Logo1 from "../../assets/blueicon.png";

export default function PanelHeader({
  updateSelectedPage,
  selectedPage,
  numberOfNotifications
}) {
  const navClassName =
    "flex items-center focus:outline-none rounded-lg p-2 px-4";

  return (
    <div className="flex items-center justify-center w-full select-none space-x-4 px-4 h-12">
      <div className="flex flex-col items-center -mb-1">
        <Button
          imageButton
          imageButtonSrc={selectedPage === "channels" ? Logo1 : Logo}
          className={`${navClassName}  fill-current text-copy-primary ${
            selectedPage !== "channels" && "hover:bg-hover-highlight"
          } h-10 w-14`}
          onClick={() => updateSelectedPage("channels")}
        />
        <div
          className={`w-14 h-1 rounded-sm ${
            selectedPage === "channels"
              ? "bg-copy-link"
              : "bg-background-primary"
          }`}
        />
      </div>
      <div className="flex flex-col items-center -mb-1">
        <Button
          styleNone
          icon="user-friends"
          styleNoneIconClassName="text-2xl"
          className={`${navClassName} ${
            selectedPage === "friends"
              ? "text-copy-link"
              : "text-copy-secondary hover:bg-hover-highlight"
          }`}
          onClick={() => updateSelectedPage("friends")}
        />
        <div
          className={`w-14 h-1 rounded-sm ${
            selectedPage === "friends"
              ? " bg-copy-link"
              : "bg-background-primary"
          }`}
        />
      </div>
    </div>
  );
}
