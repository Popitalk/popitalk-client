import React from "react";
import VideoCard from "../VideoCard";
import Button from "../Button";
import CircleCheckBox from "../CircleCheckbox";
import RoomsList from "../InfoCardLists/RoomsList";

export default function ShareModal({
  rooms,
  selected,
  onCheck,
  handleSend,
  ...rest
}) {
  const getCheckbox = room => {
    return (
      <div className="ml-auto">
        <CircleCheckBox
          checked={selected.findIndex(r => r.id === room.id) >= 0}
          onChange={() => onCheck(room.id, room.name)}
        />
      </div>
    );
  };

  return (
    <>
      <div className="pb-4 flex justify-center">
        <VideoCard {...rest} />
      </div>
      <RoomsList rooms={rooms} getControls={getCheckbox} />
      <div className="flex justify-center pt-2">
        <Button onClick={() => handleSend(selected)}>Send</Button>
      </div>
    </>
  );
}
