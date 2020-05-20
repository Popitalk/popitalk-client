import React, { useRef, useEffect, useState } from "react";
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
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [ref]);

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
      <div className="flex flex-col items-stretch w-full h-full pt-4 relative space-y-1">
        <div className="pb-4 flex justify-center shadow-search">
          <VideoCard {...rest} />
        </div>
        <div ref={ref} className="flex flex-grow">
          <RoomsList rooms={rooms} getControls={getCheckbox} height={height} />
        </div>
        <div className="absolute bottom-0 inset-x-0 pb-4 flex justify-center">
          <Button onClick={() => handleSend(selected)}>Send</Button>
        </div>
      </div>
    </>
  );
}
