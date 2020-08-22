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
  cardClick,
  loading
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
    <>
      {loading ? (
        <div className="flex items-center rounded-lg px-2">
          <div className="flex animate-pulse space-x-4 w-full items-center">
            <div className="flex-shrink-0 rounded-full bg-gray-200 h-12 w-12" />
            <div className="flex flex-col w-full space-y-2">
              <div className="h-4 bg-gray-200 rounded w-11/12"></div>
              <div className="h-4 bg-gray-200 rounded w-2/4"></div>
            </div>
          </div>
        </div>
      ) : (
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
          {controls && controls}
        </div>
      )}
    </>
  );
}
