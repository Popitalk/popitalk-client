import React from "react";
import InfoCardList from "./InfoCardList";
import RoomInfoCard from "../InfoCards/RoomInfoCard";

//--I commented these below while merging timestamp onto subtitle. The edits were made in RoomsInfoCard.jsx-- ANDREW

// import dateFormatter from "../../util/dateFormatter";

// export const getTimeFromMessage = room => {
//   return (
//     <div className="absolute top-0 right-0 mr-2 self-start">
//       <p className="text-xs text-secondaryText">
//         {dateFormatter(new Date(room.lastMessageAt))}
//       </p>
//     </div>
//   );
// };

export default function RoomsList({
  rooms,
  // getControls = getTimeFromMessage,
  selected,
  handleSelect,
  ...rest
}) {
  const itemRenderer = room => {
    return (
      <RoomInfoCard
        room={room}
        // controls={getControls(room)}
        selected={selected}
        handleSelect={handleSelect}
      />
    );
  };

  return (
    <InfoCardList
      items={rooms}
      itemRenderer={itemRenderer}
      itemSize={70}
      {...rest}
    />
  );
}
