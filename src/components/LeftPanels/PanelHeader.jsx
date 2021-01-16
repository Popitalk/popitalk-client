import React, { useState } from "react";
import Button from "../Controls/Button";
import Logo from "../../assets/greyicon.png";
import Logo1 from "../../assets/blueicon.png";

export default function PanelHeader({
  updateSelectedPage,
  selectedPage,
  viewer,
  numberOfNotifications
}) {
  const navClassName =
    "flex items-center focus:outline-none rounded-lg p-2 px-4";

  const [hover, setHover] = useState(false);

  if (viewer) {
    return (
      <div className="flex items-center justify-center w-full select-none space-x-4 px-4 h-12">
        <div className="flex flex-col items-center -mb-1">
          <Button
            imageButton
            imageButtonSrc={Logo1}
            className={`${navClassName} fill-current text-copy-primary h-10 w-14`}
          />
          <div className="w-14 h-1 rounded-sm bg-copy-link" />
        </div>
        <div
          className="flex flex-col items-center -mb-1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Button
            styleNone
            icon="user-friends"
            styleNoneIconClassName="text-2xl"
            className={`${navClassName} text-copy-secondary hover:bg-hover-highlight`}
          />
        </div>
        {hover === true && (
          <div className="absolute flex top-0 mt-14 w-64 px-6 py-4 bg-background-primary shadow-md rounded-md">
            <p className="text-sm text-copy-primary">
              To watch privately with friends in a Direct Room, you must sign
              in.
            </p>
          </div>
        )}
      </div>
    );
  }

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
