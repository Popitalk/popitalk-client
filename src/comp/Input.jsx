import React from "react";
import classnames from "classnames";
import Button from "./Button";
import YoutubeLogo from "../assets/youtube-logo.png";
import VimeoLogo from "../assets/vimeo-logo.png";
import CrunchyrollLogo from "../assets/crunchyroll-logo.png";
import TwitchLogo from "../assets/twitch-logo.png";
import InstagramLogo from "../assets/instagram-logo.png";
import HuluLogo from "../assets/hulu-logo.png";
import GfycatLogo from "../assets/gfycat-logo.png";
import FacebookLogo from "../assets/facebook-logo.png";
import DailymotionLogo from "../assets/dailymotion-logo.png";
import SpotifyLogo from "../assets/spotify-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ControlHeader from "./ControlHeader";
import { getTextClass } from "../helpers/functions";

const sources = [
  { source: "Youtube", icon: YoutubeLogo },
  { source: "Vimeo", icon: VimeoLogo },
  { source: "Crunchyroll", icon: CrunchyrollLogo },
  { source: "Twitch", icon: TwitchLogo },
  { source: "Instagram", icon: InstagramLogo },
  { source: "Hulu", icon: HuluLogo },
  { source: "Gfycat", icon: GfycatLogo },
  { source: "Facebook", icon: FacebookLogo },
  { source: "Dailymotion", icon: DailymotionLogo },
  // { source: "Twitter", icon: TwitterLogo },
  { source: "Spotify", icon: SpotifyLogo }
];

const sourcesObj = {};

sources.forEach(source => {
  sourcesObj[source.source] = source.icon;
});

export default function Input({
  variant = "primary",
  shape = "regular",
  header,
  type,
  name,
  value = "",
  placeholder,
  onChange,
  onKeyDown,
  onBlur,
  disabled,
  readOnly,
  required,
  autoFocus,
  spellCheck = false,
  maxLength = 200,
  error,
  size = "md",
  videoSource,
  interiorButton,
  forwardedRef,
  className
}) {
  const El = variant === "textarea" ? "textarea" : "input";
  const textClasses = getTextClass(size);

  const inputClasses = classnames(
    "py-2 px-4 outline-none border-thin focus:border-highlightText disabled:cursor-not-allowed disabled:bg-disabledBackground relative bottom-0 w-full",
    textClasses,
    {
      "py-2": size === "lg",
      "border-primaryBorder": !error,
      "border-errorText": error,
      "rounded-lg": shape === "regular",
      "rounded-pill px-3": shape === "pill",
      "pl-12 pr-12 rounded-pill": variant === "video",
      "pl-3 pr-12 bg-secondaryBackground": variant === "user",
      "pr-20": variant === "counter" || variant === "textarea",
      "resize-none overflow-hidden h-32 pt-1": variant === "textarea",
      "pl-10": variant === "filter" || variant === "filterModal",
      "bg-secondaryBackground": variant === "filterModal"
    }
  );

  const counterClasses = classnames("absolute right-0 mr-2", textClasses, {
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
    "text-secondaryText": value.length < maxLength,
    "text-primaryText": value.length >= maxLength,
    "bottom-0 mb-2": variant === "textarea"
  });

  const iconClasses = classnames(
    "absolute left-0 ml-3 text-secondaryText z-10",
    textClasses
  );

  return (
    <div className={className}>
      <ControlHeader
        header={header}
        error={error}
        size={size}
        bold={variant !== "video"}
      />
      <div className="flex flex-row items-center relative">
        {(variant === "filter" || variant === "filterModal") && (
          <FontAwesomeIcon icon="search" className={iconClasses} />
        )}
        <El
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          spellCheck={spellCheck}
          required={required}
          maxLength={maxLength}
          className={inputClasses}
          ref={forwardedRef}
        />
        {interiorButton && (
          <div className="absolute right-0 mr-4">{interiorButton}</div>
        )}
        {variant === "video" && (
          <>
            <img
              src={sourcesObj[videoSource]}
              alt={videoSource}
              className="img absolute left-0 ml-4 w-6 h-6"
            />
            <Button
              icon="search"
              size="sm"
              background="primary"
              className="absolute right-0 mr-4"
            />
          </>
        )}
        {variant === "user" && (
          <>
            <Button
              icon="search"
              size="sm"
              background="secondary"
              className="absolute right-0 mr-2"
            />
          </>
        )}
        {(variant === "counter" || variant === "textarea") && (
          <>
            <p className={counterClasses}>{`${(value && value.length) || "0"}/${
              maxLength || "0"
            }`}</p>
          </>
        )}
      </div>
    </div>
  );
}
