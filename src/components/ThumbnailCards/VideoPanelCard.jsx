import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import classnames from "classnames";
import moment from "moment";
import Button from "../Controls/Button";
import VideoStatus from "../VideoStatus";
import strings from "../../helpers/localization";

export default function VideoPanelCard({
  id,
  title,
  views,
  publishedAt,
  thumbnail = "somedefaultimagehere",
  status,
  statusMessage,
  type = "cancel",
  handleSkip,
  handleAddVideo,
  handleDeleteVideo,
  handleFindMore,
  url,
  loading,
  size,
  className
}) {
  // const leftInfo = `${views}`;
  const rightInfo = `${moment(publishedAt).locale(strings.location).fromNow()}`;
  const [disableButton, setDisableButton] = useState();
  const [addButtonIcon, setAddButtonIcon] = useState("plus");
  const [removeButtonIcon, setRemoveButtonIcon] = useState("minus");

  const cardClasses = classnames({
    "max-w-2xs": size === "sm",
    "max-w-md": size === "md",
    "max-w-lg": size === "lg",
    "w-full flex-shrink-0 items-center": true,
    [className]: className
  });
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
  useEffect(() => {
    const timer = setInterval(() => {
      setDisableButton(false);
      setAddButtonIcon("plus");
    }, 100000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);
  return (
    <>
      {loading ? (
        <div className="animate-pulse flex-shrink-0">
          <div className="flex shadow-xs rounded-md pb-16/9 my-4 items-between bg-background-quaternary" />
          <div className="flex-1 space-y-2 w-full">
            <div className="h-4 bg-background-quaternary rounded" />
            <div className="h-4 bg-background-quaternary rounded w-5/6" />
          </div>
        </div>
      ) : (
        <>
          {!title && (
            <div
              className="flex w-full flex-shrink-0 max-w-2xs items-center pr-2"
              role="button"
              // onClick={handleFindMore}
            >
              <div className="relative cursor-pointer pb-16/9 w-full rounded-sm shadow-xs hover:shadow-md transition-all ease-in-out duration-100 bg-background-disabled hover:bg-hover-highlight focus:outline-none">
                <div className="absolute flex items-center justify-center w-full h-full">
                  <Button
                    styleNone
                    styleNoneContent={strings.findMoreVideos}
                    icon="search"
                    styleNoneContentClassName="mx-2 text-sm"
                    className="text-copy-secondary"
                    analyticsString="Direct to Search Button: VideoPanelCard"
                  />
                </div>
              </div>
            </div>
          )}
          {title && (
            <div
              className={`relative opacity-100 hover:opacity-75 cursor-pointer ${cardClasses}`}
              onClick={type === "add" && addButtonPressed}
              role="button"
            >
              {type === "add" && (
                <div className="absolute flex justify-end p-1 items-start w-full h-full z-50">
                  <Button
                    actionButton
                    icon={addButtonIcon}
                    disabled={disableButton}
                    styleNoneContentClassName="text-copy-primary"
                    styleNoneIconClassName="text-copy-primary"
                    size="sm"
                  />
                </div>
              )}
              <div className="relative flex justify-center flex-grow pb-16/9 w-full rounded-md shadow-xs hover:shadow-md transition-all ease-in-out duration-100">
                <div className="absolute top-0 left-0 w-full h-full rounded-b-xl">
                  <div className="relative flex justify-between p-1">
                    <VideoStatus
                      status={status}
                      statusMessage={statusMessage}
                    />
                    {type === "cancel" && (
                      <Button
                        actionButton
                        className="absolute right-0 mr-1 flex z-10 bg-background-highlight"
                        onClick={removeButtonPressed}
                        analyticsString="Remove Video: VideoPanelCard"
                        onMouseLeave={() => setRemoveButtonIcon("minus")}
                        icon={removeButtonIcon}
                        size="sm"
                        background="cancel"
                        tooltip="Remove Video"
                        tooltipPlace="left"
                      />
                    )}
                  </div>
                </div>
                <img
                  src={thumbnail}
                  alt="video-thumbnail"
                  className="absolute top-0 w-full h-full img rounded-sm object-cover"
                  onClick={handleSkip && (() => handleSkip(id))}
                />
              </div>
              <div
                className="w-full pt-2"
                role="button"
                onClick={addButtonPressed}
              >
                <p
                  className="text-sm font-semibold truncate-2-lines overflow-hidden text-copy-primary break-words"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <div className="flex items-end">
                  <p className="text-xs pt-2 text-copy-secondary items-end ">
                    {"YouTube"} &middot; {rightInfo}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
