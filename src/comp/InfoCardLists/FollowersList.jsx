import React from "react";
import ImageInfoCard from "../InfoCards/ImageInfoCard";
import InfoCardList from "./InfoCardList";

export default function FollowersList({
  users,
  getControls,
  handleProfile,
  ...rest
}) {
  const itemRenderer = u => {
    return (
      <ImageInfoCard
        avatar={u.avatar}
        username={u.username}
        title={u.username}
        subtitle={`${u.firstName} ${u.lastName}`}
        controls={getControls ? getControls(u) : null}
        cardClick={handleProfile ? () => handleProfile(u.id) : null}
      />
    );
  };

  return <InfoCardList items={users} itemRenderer={itemRenderer} {...rest} />;
}
