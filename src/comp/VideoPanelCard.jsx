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
        <div className="cursor-pointer w-full flex-shrink-0 max-w-2xs relative m-1 rounded-xl hover:shadow-xl transition-all ease-in-out duration-200 bg-disabledBackground">
          <div className="pb-16/9 w-full relative">
            <div className="flex items-center justify-center w-full h-full absolute">
              <Button size="md" icon="plus" />
            </div>
          </div>
        </div>
      )}
      {title && (
        <div className="cursor-pointer w-full flex-shrink-0 max-w-2xs m-1 group">
          <div className="relative flex justify-center flex-grow pb-16/9 w-full rounded-xl group-hover:shadow-xl transition-all ease-in-out duration-100">
            <div className="absolute top-0 left-0 w-full p-2 rounded-b-xl">
              <div className="flex justify-between">
                <VideoStatus status={status} statusMessage={statusMessage} />
                {type === "cancel" && (
                  <Button
                    icon="minus"
                    className="z-30 btn-no-mr opacity-0 group-hover:opacity-100"
                    shape="pill"
                    background="cancel"
                    size="sm"
                  />
                )}
                {type === "add" && (
                  <button className="z-40 btn btn-sqr opacity-0 group-hover:opacity-100">
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

            {/* <div className="absolute top-0 z-20 w-full h-full bg-gradient-t-channelCardOverlay rounded-xl" /> */}
          </div>
          <div className="w-full py-1 px-2">
            <div className="flex items-center">
              <p className="text-xs font-regular text-secondaryText">
                {leftInfo}
              </p>
              <span className="px-1 mb-0 text-secondaryText">&middot;</span>
              <p className="text-xs font-regular text-secondaryText">
                {rightInfo}
              </p>
            </div>
            <p className="z-30 text-lg font-semibold text-primaryText">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
