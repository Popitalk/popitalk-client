import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-end justify-center w-full h-4">
      <div className="flex animate-ping h-2 w-2 bg-copy-highlight rounded-full" />
    </div>
  );
}
