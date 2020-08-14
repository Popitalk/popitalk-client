import React, { useState } from "react";
import sources from "./videoSourceImages";
import Input from "./Controls/Input";
import Button from "./Controls/Button";

export default function VideoSearchBar({ className, onClick }) {
  const [source, setSource] = useState("Youtube");
  const [value, setValue] = useState("");

  return (
    <div className="bg-secondaryBackground px-4 py-4">
      <form
        className={className ? className : "mb-4"}
        onSubmit={e => e.preventDefault()}
      >
        <Input
          variant="video"
          size="md"
          placeholder="Search for a video to watch next"
          value={value}
          onChange={e => setValue(e.target.value)}
          videoSource={source}
          onClick={() => onClick(value)}
          className="w-full md:w-3/4"
        />
      </form>
      <div className="flex flex-wrap my-2 grid-cols-services">
        {sources.map((img, idx) => {
          return (
            <Button
              key={idx}
              imageButton
              imageButtonSrc={img.icon}
              imageButtonClassName="h-6"
              className={`flex justify-center mr-2 items-center ${
                source === img.source
                  ? "bg-gradient-r-button shadow-md"
                  : "bg-primaryBackground hover:bg-highlightBackground"
              } h-10 w-10 rounded-full focus:outline-none`}
              onClick={() => setSource(img.source)}
            />
          );
        })}
      </div>
    </div>
  );
}
