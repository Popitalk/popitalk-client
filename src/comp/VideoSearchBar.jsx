import React, { useState } from "react";
import sources from "./videoSourceImages";
import Input from "./Input";

export default function VideoSearchBar({ className, onClick }) {
  const [source, setSource] = useState("Youtube");
  const [value, setValue] = useState("");

  return (
    <div className="p-2 bg-secondaryBackground">
      <form
        className={className ? className : "mb-4"}
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
          className="w-full md:w-2/4"
        />
      </form>
      <div className="flex flex-wrap grid-cols-services">
        {sources.map((img, idx) => {
          return (
            <button
              key={idx}
              className={`flex justify-center m-2 items-center ${
                source === img.source
                  ? "bg-gradient-r-button shadow-md"
                  : "bg-primaryBackground"
              } h-10 w-10 rounded-full focus:outline-none`}
              onClick={() => setSource(img.source)}
            >
              <img src={img.icon} alt={img.source} className="h-6" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
