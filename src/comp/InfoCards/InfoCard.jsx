import React from "react";
import classnames from "classnames";

export default function InfoCard({
  avatar,
  controls,
  title,
  subtitle,
  subtitleColor = "black",
  subtitleSize = "sm",
  backgroundColor = "transparent",
  hoverable,
  cardClick
}) {
  const subtitleClasses = classnames({
    "text-secondaryText": subtitleColor === "gray",
    "text-primaryText": subtitleColor === "black",
    "text-sm": subtitleSize === "sm",
    "text-xs": subtitleSize === "xs"
  });

  const boxClasses = classnames("flex items-center rounded-lg px-4 py-2", {
    "bg-primaryBackground": backgroundColor === "white",
    "bg-secondaryBackground": backgroundColor === "gray",
    "hover:bg-highlightBackground": hoverable
  });

  return (
    <div className={boxClasses} role="button" onClick={e => cardClick(e)}>
      {avatar}
      <div className="flex flex-col mr-4">
        {title && subtitle ? (
          <>
            <p className="text-md text-primaryText">{title}</p>
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
