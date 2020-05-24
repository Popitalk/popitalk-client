import React, { useState } from "react";
import sources from "./videoSourceImages";
import Input from "./Input";

export default function VideoSearchBar({ className, onClick }) {
  const [source, setSource] = useState("Youtube");
  const [value, setValue] = useState("");

  return (
    <div className="bg-secondaryBackground p-2 w-1/2">
      <form
        className={className ? className : "pb-2"}
        onSubmit={e => e.preventDefault()}
      >
        <Input
          variant="video"
          size="lg"
          placeholder="Search for a video to watch next"
          value={value}
          onChange={e => setValue(e.target.value)}
          videoSource={source}
          onClick={() => onClick(value)}
        />
      </form>
      <div className="flex">
        {sources.map((img, idx) => {
          return (
            <button
              key={idx}
              className={`flex justify-center items-center mx-1 ${
                source === img.source
                  ? "bg-quaternaryBackground"
                  : "bg-primaryBackground"
              } h-10 w-10 rounded-full`}
              onClick={() => setSource(img.source)}
            >
              <img src={img.icon} alt={img.source} className="h-6 w-6" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
