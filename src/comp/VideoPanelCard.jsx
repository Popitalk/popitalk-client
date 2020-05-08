import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoPanelCard({
  id,
  title,
  views,
  timeFromUpload,
  thumbnail = "somedefaultimagehere",
  videoStatus
}) {
  const leftInfo = `${views}`;
  const rightInfo = `${timeFromUpload}`;
  return (
    <>
      {!title && (
        <div className="flex flex-row items-center justify-center h-48 max-w-xs rounded-xl hover:shadow-xl bg-disabledBackground">
          <Button size="lg" icon="plus" className="z-30" />
        </div>
      )}
      {title && (
        <div className="flex flex-row items-center justify-center h-48 max-w-xs rounded-xl hover:shadow-xl">
          <div className="group flex-grow flex flex-row justify-center h-48 p-3 relative">
            <img
              src={thumbnail}
              alt="video-thumbnail"
              className="img absolute top-0 h-full rounded-xl z-10"
            />

            <div className="h-full w-full absolute top-0 bg-gradient-t-channelCardOverlay z-20 rounded-xl" />
            <div className="absolute w-full bottom-0 left-0 p-3 rounded-b-xl z-20">
              <p className="text-lg font-regular text-tertiaryText mb-1 z-30">
                {title}
              </p>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xs font-regular text-tertiaryText">
                  {leftInfo}
                </p>
                <p className="text-xs font-regular text-tertiaryText">
                  {rightInfo}
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  z-40 py-2 px-4 rounded-full">
              <FontAwesomeIcon icon="plus" style={{ color: "white" }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}