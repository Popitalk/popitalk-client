import React, { useState } from "react";
import strings from "../../helpers/localization";
import SignInButton from "../SignInButton";

export default function LeftPanelViewer({ friendsPanel }) {
  const [hover, setHover] = useState("");

  return (
    <div className="px-6">
      <div className="flex justify-evenly space-x-2">
        <img
          className="h-16 w-16 transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer"
          src="https://i.ibb.co/y5bfPpL/watch-Together.png"
          alt={strings.descriptionCardTitle1}
          onMouseEnter={() => setHover("first")}
        />
        <img
          className="h-16 w-16 transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer"
          src="https://i.ibb.co/X5BHwwZ/chat.png"
          alt={strings.descriptionCardTitle2}
          onMouseEnter={() => setHover("second")}
        />
        <img
          className="h-16 w-16 transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer"
          src="https://i.ibb.co/PYv5D1N/public-Channels.png"
          alt={strings.descriptionCardTitle3}
          onMouseEnter={() => setHover("third")}
        />
      </div>
      {/* === Image hover description === */}
      <h2 className="text-sm text-copy-primary p-2 h-20 mt-2 rounded-md">
        {hover === "first"
          ? strings.descriptionCardBody1
          : hover === "second"
          ? strings.descriptionCardBody2
          : hover === "third"
          ? strings.descriptionCardBody3
          : strings.descriptionCardBody1}
      </h2>
      {/* === Sign Up === */}
      <div className="bg-background-secondary my-6 p-6 space-y-4 rounded-md shadow-md">
        <p className="text-copy-primary font-bold text-sm">
          {strings.signInText}
        </p>
        <SignInButton />
      </div>
    </div>
  );
}
