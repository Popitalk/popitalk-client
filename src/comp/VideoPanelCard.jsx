import React from "react";
import Button from "./Controls/Button";
import VideoStatus from "./VideoStatus";
import moment from "moment";

export default function VideoPanelCard({
  id,
  title,
  views,
  publishedAt,
  thumbnail = "somedefaultimagehere",
  status,
  statusMessage,
  type = "cancel"
}) {
  // const leftInfo = `${views}`;
  const rightInfo = `${moment(publishedAt).fromNow()}`;
  return (
    <>
      {!title && (
        <div className="cursor-pointer w-full flex-shrink-0 max-w-2xs mr-4 rounded-md shadow-xs hover:shadow-md transition-all ease-in-out duration-100 bg-disabledBackground">
          <div className="relative pb-16/9 w-full">
            <div className="absolute flex items-center justify-center w-full h-full">
              <Button size="sm" icon="search" />
              <p className="mx-2 text-secondaryText text-sm hover:filter-brightness-9">
                Search for a video
              </p>
            </div>
          </div>
        </div>
      )}
      {title && (
        <div className="cursor-pointer w-full flex-shrink-0 max-w-2xs mr-2 group">
          <div className="relative flex justify-center flex-grow pb-16/9 w-full rounded-md group-hover:shadow-md transition-all ease-in-out duration-100">
            <div className="absolute top-0 left-0 w-full p-2 rounded-b-xl">
              <div className="flex justify-between">
                <VideoStatus status={status} statusMessage={statusMessage} />
                {type === "cancel" && (
                  <Button
                    icon="minus"
                    className="z-10 btn btn-no-mr transition-opacity opacity-0 group-hover:opacity-100 duration-150"
                    shape="rounded"
                    background="cancel"
                    size="sm"
                  />
                )}
                {type === "add" && (
                  <button className="z-10 btn btn-sqr opacity-0 group-hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="24"
                      // height="24"
                      viewBox="0 0 24 24"
                      shape="pill"
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
              className="absolute top-0 pb-px h-full img rounded-md object-cover"
            />
          </div>
          <div className="w-full pt-2 px-0">
            <p className="text-sm font-semibold truncate-2-lines overflow-hidden text-primaryText break-words">
              {title}
            </p>
            <div className="flex items-end">
              <p className="text-xs pt-2 text-secondaryText items-end ">
                {/* {leftInfo} &middot; {rightInfo} */}
                {"Youtube"} &middot; {rightInfo}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
