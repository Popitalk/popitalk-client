import React from "react";
import classnames from "classnames";

export default function InfoCard({
  avatar,
  controls,
  title,
  subtitle,
  subtitleColor = "black",
  subtitleSize = "xs",
  boldFont = false,
  backgroundColor = "transparent",
  hoverable = true,
  addBorder,
  padding = "none",
  cardClick
}) {
  const titleClasses = classnames("text-sm text-primaryText truncate", {
    "font-bold": boldFont
  });

  const subtitleClasses = classnames("truncate", {
    "text-secondaryText": subtitleColor === "gray",
    "text-primaryText": subtitleColor === "black",
    "font-bold": boldFont,
    "text-sm": subtitleSize === "sm",
    "text-xs": subtitleSize === "xs"
  });

  const boxClasses = classnames("flex items-center rounded-lg px-2", {
    "bg-primaryBackground": backgroundColor === "white",
    "bg-secondaryBackground": backgroundColor === "gray",
    "bg-highlightBackground": backgroundColor === "highlight",
    "hover:bg-highlightBackground duration-75": hoverable,
    "py-2": padding === "sm",
    "py-1": padding === "xs",
    "py-0": padding === "none",
    "border border-highlightText": addBorder
  });

  return (
    <div
      className={boxClasses}
      role={cardClick ? "button" : null}
      onClick={cardClick ? e => cardClick(e) : null}
    >
      {avatar}
      <div className="flex flex-col mx-3 my-2 space-y-1 truncate">
        {title && subtitle ? (
          <>
            <p className={titleClasses}>{title}</p>
            <p className={subtitleClasses}>{subtitle}</p>
          </>
        ) : (
          <p className={titleClasses}>{title}</p>
        )}
      </div>
      {controls ? controls : <></>}
    </div>
  );
}
