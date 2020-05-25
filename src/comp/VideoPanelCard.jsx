import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoStatus from "./VideoStatus";

export default function VideoPanelCard({
  id,
  title,
  views,
  timeFromUpload,
  thumbnail = "somedefaultimagehere",
  status,
  statusMessage,
  type = "cancel"
}) {
  const leftInfo = `${views}`;
  const rightInfo = `${timeFromUpload}`;
  return (
    <>
      {!title && (
        <div className="flex flex-row flex-shrink-0 items-center justify-center h-48 w-full max-w-xs rounded-xl hover:shadow-xl bg-disabledBackground m-1">
          <Button
            size="lg"
            icon="plus"
            className="z-30"
            background="secondary"
          />
        </div>
      )}
      {title && (
        <div className="flex flex-row flex-shrink-0 items-center justify-center h-48 w-full max-w-xs rounded-xl hover:shadow-xl m-1">
          <div className="flex-grow flex flex-row justify-center h-48 p-3 relative">
            <div className="absolute w-full top-0 left-0 p-3 rounded-b-xl">
              <div className="flex justify-between">
                <VideoStatus status={status} statusMessage={statusMessage} />
                {type === "cancel" && (
                  <Button
                    icon="minus"
                    className="z-30 btn-no-mr"
                    shape="pill"
                    background="cancel"
                    size="sm"
                  />
                )}
                {/* <Button
                  icon="bar"
                  
                  className="z-30"
                  shape="pill"
                  background="secondary"
                  size="sm"
                /> */}
                {type === "add" && (
                  <button className="btn btn-sqr z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="24"
                      // height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
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
          </div>
        </div>
      )}
    </>
  );
}
