import React from "react";
import NotificationCard from "./NotificationCard";
import Button from "./Button";
import DropDownContainer from "./DropDownContainer";
import ModalHeader from "./ModalHeader";
import LargeList from "./InfoCardList";

export default function Notifications({ notifications, handleProfile }) {
  const itemRenderer = n => {
    return (
      <NotificationCard
        avatar={n.avatar}
        username={n.username}
        message={n.message}
        handleProfile={e => handleProfile(e, n.id)}
        onClick={e => handleProfile(e, n.id)}
      />
    );
  };

  return (
    <DropDownContainer>
      <ModalHeader title="Notifications" />
      <div className="flex justify-end pt-2">
        <Button size="sm">Clear</Button>
      </div>
      <LargeList items={notifications} itemRenderer={itemRenderer} />
    </DropDownContainer>
  );
}
