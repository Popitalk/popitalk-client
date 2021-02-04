import React, { useState } from "react";
import strings from "../../localization/strings";
import SignInButton from "../SignInButton";

export default function LeftPanelDescription() {
  const boxClassName =
    "bg-background-secondary p-4 space-y-4 rounded-md shadow-xs";
  const [hover, setHover] = useState("");
  const iconsListArray = [
    {
      path: "https://i.ibb.co/y5bfPpL/watch-Together.png",
      hover: "first",
      alt: strings.descriptionCardTitle1
    },
    {
      path: "https://i.ibb.co/X5BHwwZ/chat.png",
      hover: "second",
      alt: strings.descriptionCardTitle2
    },
    {
      path: "https://i.ibb.co/PYv5D1N/public-Channels.png",
      hover: "third",
      alt: strings.descriptionCardTitle3
    }
  ];
  // === Function to repeat items. `items={array}` === //
  function IconsList({ items }) {
    return items.map(item => (
      <img
        key={item.path}
        className={`${
          hover === item.hover && "bg-background-quaternary rounded-lg"
        } h-16 w-16 p-2 hover:bg-background-quaternary transition transform ease-in-out hover:scale-105 duration-100 rounded-md cursor-pointer`}
        src={item.path}
        alt={item.alt}
        onClick={() => setHover(item.hover)}
      />
    ));
  }

  return (
    <div className="space-y-4">
      <div className={boxClassName}>
        <h1 className="text-copy-primary">{strings.descriptionHeader2}</h1>
        <div className="flex justify-evenly space-x-2">
          <IconsList items={iconsListArray} />
        </div>
        {/* === Image hover description === */}
        <h2 className="text-sm text-copy-primary h-20">
          {hover === "first"
            ? strings.descriptionCardBody1
            : hover === "second"
            ? strings.descriptionCardBody2
            : hover === "third"
            ? strings.descriptionCardBody3
            : strings.descriptionCardBody1}
        </h2>
      </div>
      {/* === Sign Up === */}
      <div className={boxClassName}>
        <p className="text-copy-primary font-bold text-sm">
          {strings.friendsButtonHover}
        </p>
        <SignInButton />
      </div>
    </div>
  );
}
