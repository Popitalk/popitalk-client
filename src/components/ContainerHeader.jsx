import React from "react";
import Button from "./Controls/Button";

export default function ContainerHeader({ title, handleBack }) {
  // Ensure the title is centered even if the back button isn't displayed
  const width = "w-12";

  const backButton = handleBack ? (
    <Button
      styleNone
      icon="arrow-left"
      styleNoneIconClassName="font-bold text-copy-secondary"
      className={`p-2 inline-block ${width}`}
      onClick={() => handleBack()}
    />
  ) : (
    <div className={width}></div>
  );

  return (
    <div className="inset-x-0 px-2 bg-background-primary rounded-xl h-10 flex flex-row items-center justify-between">
      {backButton}
      <div className="text-sm font-bold text-copy-primary inline-block">
        {title}
      </div>
      {<div className={width}></div>}
    </div>
  );
}
