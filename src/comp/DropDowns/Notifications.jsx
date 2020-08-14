import React from "react";
import Button from "../Controls/Button";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "../ContainerHeader";
import InfoCardList from "../InfoCardLists/InfoCardList";
import ImageInfoCard from "../InfoCards/ImageInfoCard";

export default function Notifications({
  notifications,
  handleProfile,
  handleClear
}) {
  const itemRenderer = n => {
    return (
      <ImageInfoCard
        avatar={n.avatar}
        username={n.username}
        title={n.message}
        hoverable={true}
        cardClick={() => handleProfile(n.id)}
        imageClick={() => handleProfile(n.id)}
      />
    );
  };

  return (
    <DropDownContainer>
      <div className="relative">
        <Button
          size="sm"
          onClickEvent={handleClear}
          className="absolute top-0 right-0 mt-1 mr-4"
          analyticsString="Clear Notification Button: Notifications"
        >
          Clear
        </Button>
        <ContainerHeader title="Notifications" />
        <InfoCardList items={notifications} itemRenderer={itemRenderer} />
      </div>
    </DropDownContainer>
  );
}
