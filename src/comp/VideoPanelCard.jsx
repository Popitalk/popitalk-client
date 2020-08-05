import React, { useState } from "react";
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
  type = "cancel",
  handleAddVideo,
  handleDeleteVideo,
  url
}) {
  // const leftInfo = `${views}`;
  const rightInfo = `${moment(publishedAt).fromNow()}`;
  const [disableButton, setDisableButton] = useState();
  const [addButtonIcon, setAddButtonIcon] = useState("plus");
  const [removeButtonIcon, setRemoveButtonIcon] = useState("minus");
  const removeButtonPressed = () => {
    setRemoveButtonIcon("check");
    handleDeleteVideo(id);
  };
  const addButtonPressed = () => {
    setAddButtonIcon("check");
    const videoInfo = {
      title: title,
      publishedAt: publishedAt,
      thumbnail: thumbnail,
      url: url
    };
    handleAddVideo({
      source: "youtube",
      sourceId: id,
      videoInfo: JSON.stringify(videoInfo)
    });
    setDisableButton(true);
  };
  return (
    <>
      {!title && (
        <div className="flex w-full flex-shrink-0 max-w-2xs items-center pr-2">
          <div className="relative cursor-pointer pb-16/9 w-full rounded-md shadow-xs hover:shadow-md transition-all ease-in-out duration-100 bg-disabledBackground hover:bg-highlightBackground focus:outline-none">
            <div className="absolute flex items-center justify-center w-full h-full">
              <Button
                size="sm"
                icon="search"
                className="opacity-75 shadow-none"
              />
              <p className="mx-2 text-secondaryText text-sm hover:filter-brightness-9">
                Search for a video
              </p>
            </div>
          </div>
        </div>
      )}
      {title && (
        <div className="w-full flex-shrink-0 max-w-2xs mr-2">
          <div className="relative flex justify-center flex-grow pb-16/9 w-full rounded-md group-hover:shadow-md transition-all ease-in-out duration-100">
            <div className="absolute top-0 left-0 w-full p-2 rounded-b-xl">
              <div className="flex justify-between">
                <VideoStatus status={status} statusMessage={statusMessage} />
                {type === "cancel" && (
                  <Button
                    className="flex z-10 bg-highlightBackground"
                    onClick={removeButtonPressed}
                    onMouseLeave={() => setRemoveButtonIcon("minus")}
                    icon={removeButtonIcon}
                    size="sm"
                    background="cancel"
                  />
                )}
                {type === "add" && (
                  <Button
                    disabled={disableButton}
                    className="flex z-10 bg-highlightBackground"
                    onClick={addButtonPressed}
                    icon={addButtonIcon}
                    size="sm"
                  />
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
            <p
              className="text-sm font-semibold truncate-2-lines overflow-hidden text-primaryText break-words"
              dangerouslySetInnerHTML={{ __html: title }}
            />
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
