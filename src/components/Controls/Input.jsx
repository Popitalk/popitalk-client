import React from "react";
import classnames from "classnames";
import Button from "./Button";
import sources from "../../helpers/videoSourceImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ControlHeader from "./ControlHeader";
import { getTextClass, getInputClasses } from "../../helpers/functions";

const sourcesObj = {};

sources.forEach(source => {
  sourcesObj[source.source] = source.icon;
});

export default function Input({
  variant = "primary",
  shape = "regular",
  header,
  value = "",
  maxLength = 200,
  error,
  size = "sm",
  videoSource,
  interiorButton,
  forwardedRef,
  className,
  onClick = () => console.log("clicked"),
  ...rest
}) {
  const El = variant === "textarea" ? "textarea" : "input";
  const textClasses = getTextClass(size);

  const inputClasses = classnames(
    getInputClasses(shape, error),
    "relative bottom-0 py-2 px-4 rounded-md transition duration-100 text-copy-primary bg-background-primary",
    textClasses,
    {
      "border-outline-primary": error,
      "rounded-md px-3": shape === "pill",
      "pl-12 pr-12 rounded-md": variant === "video",
      "pr-8 bg-background-tertiary": variant === "user",
      "pr-8 bg-background-primary": variant === "channel",
      "pr-20": variant === "counter" || variant === "textarea",
      "resize-none overflow-hidden h-32 pt-1": variant === "textarea",
      "pl-10": variant === "filter" || variant === "filterModal",
      "bg-background-secondary": variant === "filterModal"
    }
  );

  const counterClasses = classnames("absolute right-0 mr-2", textClasses, {
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
    "text-copy-secondary": value.length < maxLength,
    "text-copy-primary": value.length >= maxLength,
    "bottom-0 mb-2": variant === "textarea"
  });

  const iconClasses = classnames(
    "absolute left-0 ml-3 text-copy-secondary z-10",
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
      <div className="relative flex flex-row items-center">
        {(variant === "filter" || variant === "filterModal") && (
          <FontAwesomeIcon icon="search" className={iconClasses} />
        )}
        <El
          value={value}
          maxLength={maxLength}
          className={inputClasses}
          ref={forwardedRef}
          {...rest}
        />
        {interiorButton && (
          <div className="absolute right-0 mr-2 transition transform ease-in-out hover:scale-105 duration-100">
            {interiorButton}
          </div>
        )}
        {variant === "video" && (
          <>
            <FontAwesomeIcon
              icon={sourcesObj[videoSource]}
              className="absolute left-0 ml-4 object-contain text-copy-error"
            />
            <Button
              actionButton
              icon="search"
              size="sm"
              background="secondary"
              className="absolute right-0 mr-2 shadow-none"
              onClick={onClick}
              analyticsString="Search Button: Input"
            />
          </>
        )}
        {(variant === "user" || variant === "channel") && (
          <Button
            hoverable
            styleNone
            icon="search"
            styleNoneIconClassName="text-copy-link"
            background="secondary"
            className="absolute right-0 mr-3"
            onClick={onClick}
            analyticsString="Search Button: Input"
          />
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
