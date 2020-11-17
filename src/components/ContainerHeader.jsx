import React from "react";
import Button from "./Controls/Button";

export default function ContainerHeader({ title, handleBack }) {
  // Ensure the title is centered even if the back button isn't displayed
  const width = "w-12";

  const backButton = handleBack ? (
    <div className={width}>
      <Button
        styleNone
        icon="arrow-left"
        styleNoneIconClassName="font-bold text-copy-tertiary"
        className="p-2 inline-block"
        onClick={() => handleBack()}
      />
    </div>
  ) : (
    <div className={width}></div>
  );

  return (
    <div className="inset-x-0 top-0 bg-copy-highlight h-10 flex flex-row items-center justify-between">
      {backButton}
      <div className="text-sm font-bold text-copy-tertiary inline-block">
        {title}
      </div>
      {<div className={width}></div>}
    </div>
  );
}
