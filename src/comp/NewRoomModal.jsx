import React from "react";
import FollowersList from "./InfoCardLists/FollowersList";
import CircleCheckBox from "./CircleCheckbox";
import Button from "./Button";

export default function NewRoomModal({ users, selected, onCheck, handleSend }) {
  const getControls = user => {
    return (
      <div className="ml-auto">
        <CircleCheckBox
          checked={selected.indexOf(user.id) >= 0}
          onChange={() => onCheck(user.id)}
        />
      </div>
    );
  };

  return (
    <>
      <FollowersList users={users} getControls={getControls} />
      <div className="flex justify-center">
        <Button onClick={() => handleSend(selected)}>Send</Button>
      </div>
    </>
  );
}
