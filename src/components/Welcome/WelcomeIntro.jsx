import React from "react";
import Button from "../Controls/Button";
import strings from "../../localization/strings";

export default function WelcomeIntro({ openModal }) {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-full items-center p-8 bg-background-primary">
      {/* LEFT SECTION */}
      <div className="flex items-center justify-center md:w-1/2 w-full p-4 xxl:p-12">
        <video
          className="flex object-cover rounded-circle"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={strings.adVideo} type="video/mp4" />
        </video>
      </div>
      {/* RIGHT SECTION */}
      <div className="flex flex-col md:p-12 p-4 justify-center items-center md:items-start md:w-1/2 w-full h-full space-y-4 z-20">
        <h1 className="text-5xl font-bold text-copy-primary">
          <span>{strings.welcomeHeader1}</span> <br />
          <span>{strings.welcomeHeader2}</span>
        </h1>
        <h2 className="text-copy-secondary text-sm">
          {strings.WelcomeSubheader}
        </h2>
        <div className="space-x-2 pt-8">
          <Button
            hoverable
            styleNone
            styleNoneContent={strings.welcomeButton1}
            className="bg-copy-link text-copy-tertiary py-3 px-4 rounded-xl"
            onClick={openModal}
          />
          <a href="/">
            <Button
              hoverable
              styleNone
              styleNoneContent={strings.welcomeButton2}
              className="py-3 px-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
