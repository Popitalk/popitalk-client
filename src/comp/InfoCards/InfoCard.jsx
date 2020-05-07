import React from "react";
import classnames from "classnames";

export default function InfoCard({
  avatar,
  controls,
  title,
  subtitle,
  subtitleColor = "black",
  subtitleSize = "sm",
  boldFont = false,
  backgroundColor = "transparent",
  hoverable,
  addBorder,
  padding = "md",
  cardClick
}) {
  const titleClasses = classnames("text-md text-primaryText", {
    "font-bold": boldFont
  });

  const subtitleClasses = classnames({
    "text-secondaryText": subtitleColor === "gray",
    "text-primaryText": subtitleColor === "black",
    "font-bold": boldFont,
    "text-sm": subtitleSize === "sm",
    "text-xs": subtitleSize === "xs"
  });

  const boxClasses = classnames("flex items-center rounded-lg px-4", {
    "bg-primaryBackground": backgroundColor === "white",
    "bg-secondaryBackground": backgroundColor === "gray",
    "bg-highlightBackground": backgroundColor === "highlight",
    "hover:bg-highlightBackground": hoverable,
    "py-2": padding === "md",
    "py-1": padding === "sm",
    "border border-highlightText": addBorder
  });

  return (
    <div className={boxClasses} role="button" onClick={e => cardClick(e)}>
      {avatar}
      <div className="flex flex-col ml-4">
        {title && subtitle ? (
          <>
            <p className={titleClasses}>{title}</p>
            <p className={subtitleClasses}>{subtitle}</p>
          </>
        ) : (
          <p className="text-md text-primaryText">{title}</p>
        )}
      </div>
      {controls ? controls : <></>}
    </div>
  );
}
