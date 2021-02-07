import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import Button from "../Controls/Button";
import VideoStatus from "../VideoStatus";
import strings from "../../localization/strings";

export default function VideoCardHorizontalPlaylist({
  id,
  title,
  views,
  publishedAt,
  thumbnail = "somedefaultimagehere",
  status,
  statusMessage,
  type,
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
  const [hoverCard, setHoverCard] = useState(false);
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
  useEffect(() => {
    const timer = setInterval(() => {
      setDisableButton(false);
      setAddButtonIcon("plus");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse flex-shrink-0">
        <div className="flex shadow-xs rounded-md pb-16/9 my-4 items-between bg-background-quaternary" />
        <div className="flex-1 space-y-2 w-full">
          <div className="h-4 bg-background-quaternary rounded" />
          <div className="h-4 bg-background-quaternary rounded w-5/6" />
        </div>
      </div>
    );
  }
  if (!title) {
    return (
      <Button
        styleNone
        styleNoneContent={strings.searchAddVideos}
        styleNoneContentClassName="text-center text-copy-secondary text-sm"
        className="h-12 w-full bg-background-primary my-1 hover:shadow-sm hover:bg-hover-highlight transition duration-100 rounded-lg"
        analyticsString="Direct to search Button: VideoCardVerticalPlaylist"
        onClick={handleFindMore}
      />
    );
  } else if (title) {
    return (
      <div
        className="relative opacity-100 hover:opacity-75 cursor-pointer"
        onClick={() => {
          if (type === "add") {
            addButtonPressed();
          }
        }}
        role="button"
        onMouseEnter={() => setHoverCard(true)}
        onMouseLeave={() => setHoverCard(false)}
      >
        {type === "add" && (
          <div className="absolute flex justify-end p-1 items-start w-full h-full z-20">
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
              <div className="m-1 z-20">
                <VideoStatus status={status} />
              </div>
              {type === "cancel" && hoverCard === true && (
                <Button
                  actionButton
                  className="absolute right-0 mr-1 flex z-20 bg-background-highlight"
                  onClick={removeButtonPressed}
                  analyticsString="Remove Video: VideoCardVerticalPlaylist"
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
          {status === "playing" ? (
            <div className="absolute p-2px bg-gradient-br-primary top-0 w-full h-full img rounded-sm object-cover">
              <div className=" p-2px bg-background-secondary top-0 w-full h-full img rounded-sm object-cover">
                <img
                  src={thumbnail}
                  alt={`${title} - Popitalk`}
                  className="top-0 w-full h-full img rounded-sm object-cover"
                  onClick={handleSkip && (() => handleSkip(id))}
                />
              </div>
            </div>
          ) : (
            <img
              src={thumbnail}
              alt={`${title} - Popitalk`}
              className="absolute top-0 w-full h-full img rounded-sm object-cover"
              onClick={handleSkip && (() => handleSkip(id))}
            />
          )}
        </div>
        <div className="w-full pt-2" role="button" onClick={addButtonPressed}>
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
    );
  }
}
