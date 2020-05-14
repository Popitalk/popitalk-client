import React from "react";
import VideoCard from "./VideoCard";
import Button from "./Button";
import RoomsList from "./InfoCardLists/RoomsList";

export default function WatchModal({ rooms, handleWatchNow, ...rest }) {
  const getButton = room => {
    return (
      <Button
        size="sm"
        onClick={() => handleWatchNow(room.id)}
        className="ml-auto"
      >
        Watch Now
      </Button>
    );
  };

  return (
    <>
      <div className="pb-4 flex justify-center">
        <VideoCard {...rest} />
      </div>
      <RoomsList rooms={rooms} getControls={getButton} />
    </>
  );
}
