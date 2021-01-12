import React from "react";
import Button from "../Controls/Button";
import welcomepic from "../../assets/welcomepic.png";
import strings from "../../helpers/localization";

export default function WelcomeIntro({ openModal }) {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-full items-center p-8 bg-background-primary">
      {/* LEFT SECTION */}
      <div className="absolute md:static opacity-0 sm:opacity-25 md:opacity-100 md:flex items-center justify-center md:w-1/2 w-full h-full lg:p-24 md:p-12 sm:p-4">
        <img
          src={welcomepic}
          className="object-cover"
          alt="Watch movies and shows together"
        />
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
