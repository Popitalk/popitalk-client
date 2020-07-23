import React from "react";
import moment from "moment";

export default function VideoCard({
  id,
  title,
  views,
  publishedAt,
  thumbnail = "somedefaultimagehere",
  handleShare,
  handleWatch
}) {
  // const leftInfo = `${views}`;
  const rightInfo = `${moment(publishedAt).fromNow()}`;
  return (
    <div className="cursor-pointer w-full flex-shrink-0 max-w-lg h-64 group">
      <div className="relative flex justify-center flex-grow pb-16/9 w-full rounded-md group-hover:shadow-xl transition-all ease-in-out duration-100">
        <img
          src={thumbnail}
          alt="video-thumbnail"
          className="absolute top-0 h-full pb-px img rounded-md object-cover"
        />
        <div className="flex absolute w-full h-full top-0 left-0 rounded-md justify-center items-center text-tertiaryText text-md font-bold bg-black bg-opacity-25 transition-opacity opacity-0 hover:opacity-100 duration-100">
          Watch it in a room
          {/* <Button size="sm" icon="share" shape="square" className="px-0 py-4" /> */}
        </div>
      </div>
      <div className="w-full pt-2 px-1">
        <p className="text-md font-semibold truncate-2-lines overflow-hidden text-primaryText break-words">
          Some long long long long long long long long long long Title
          {title}
        </p>
        <div className="flex items-end">
          <p className="text-xs pt-2 text-secondaryText items-end">
            {"Youtube"} &middot; {rightInfo}
          </p>
        </div>
      </div>
    </div>
  );
}
