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
        <div className="w-full pb-16/9 relative m-1 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all ease-in-out duration-200 bg-disabledBackground">
          <div className="flex items-center justify-center absolute w-full h-full">
            <Button size="lg" icon="plus" />
          </div>
        </div>
      )}
      {title && (
        <div className="w-full m-1 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all ease-in-out duration-200">
          <div className="relative flex justify-center flex-grow pb-16/9 w-full">
            <div className="absolute top-0 left-0 w-full p-3 rounded-b-xl">
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
                {type === "add" && (
                  <button className="z-40 btn btn-sqr">
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
              className="absolute top-0 z-10 h-full img rounded-xl"
            />

            <div className="absolute top-0 z-20 w-full h-full bg-gradient-t-channelCardOverlay rounded-xl" />
            <div className="absolute bottom-0 left-0 z-20 w-full p-3 rounded-b-xl">
              <p className="z-30 mb-1 text-lg font-regular text-tertiaryText">
                {title}
              </p>
              <div className="flex flex-row items-center justify-between">
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
