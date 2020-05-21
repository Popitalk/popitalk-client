import React from "react";
import Button from "../Button";
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
      <ContainerHeader title="Notifications" />
      <div className="flex justify-end pt-2 pr-2">
        <Button size="sm" onClick={handleClear}>
          Clear
        </Button>
      </div>
      <InfoCardList items={notifications} itemRenderer={itemRenderer} />
    </DropDownContainer>
  );
}
