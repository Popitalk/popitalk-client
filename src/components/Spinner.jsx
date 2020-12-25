import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-4">
      <div className="relative flex items-center justify-center animate-spin h-8 w-8 bg-copy-link rounded-full">
        <div className="top-0 absolute w-8 h-4 bg-background-secondary"></div>
        <div className="flex animate-spin h-6 w-6 bg-background-secondary rounded-full"></div>
      </div>
    </div>
  );
}
