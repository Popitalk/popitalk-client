import React from "react";

export default function GifSelection({ updateGifsOpen }) {
  return (
    <div>
      <div className="w-10 h-10 p-2 rounded-lg bg-secondaryBackground hover:bg-highlightBackground transition transform ease-in-out hover:scale-110 duration-100">
        <p
          onClick={updateGifsOpen}
          className="text-highlightText font-bold"
          role="button"
        >
          GIF
        </p>
      </div>
    </div>
  );
}
