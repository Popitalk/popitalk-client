import React from "react";
import InfoCardList from "./InfoCardList";
import RequestCard from "../InfoCards/RequestCard";
import ReactTooltip from "react-tooltip";

export default function FriendUsersList({ users, handleProfile, ...rest }) {
  const itemRenderer = u => {
    return <RequestCard user={u} handleProfile={handleProfile} />;
  };
  return (
    <>
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-md rounded-md py-1 px-3 opacity-100"
        arrowColor="transparent"
      />
      <InfoCardList
        items={users}
        itemRenderer={itemRenderer}
        itemSize={60}
        {...rest}
      />
    </>
  );
}
