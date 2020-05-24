import React, { useState } from "react";
import sources from "./videoSourceImages";
import Input from "./Input";
import VideoSearchBar from "./VideoSearchBar";
import VideoResults from "./VideoResults";

export default function VideoSearch({ className, results, threshold }) {
  const [source, setSource] = useState("Youtube");
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col bg-secondaryBackground px-2">
      <VideoSearchBar />
      <div className="pt-4 px-3">
        <span className="text-base rainbow-text font-bold">
          Trending videos right now
        </span>
      </div>
      <VideoResults results={results} threshold={threshold} />
    </div>
  );
}
