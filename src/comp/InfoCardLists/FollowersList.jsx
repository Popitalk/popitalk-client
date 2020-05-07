import React from "react";
import ImageInfoCard from "../InfoCards/ImageInfoCard";
import InfoCardList from "./InfoCardList";

export default function FollowersList({ users, handleProfile }) {
  const itemRenderer = u => {
    return (
      <ImageInfoCard
        avatar={u.avatar}
        username={u.username}
        title={u.username}
        subtitle={`${u.firstName} ${u.lastName}`}
        cardClick={() => handleProfile(u.id)}
      />
    );
  };

  return <InfoCardList items={users} itemRenderer={itemRenderer} />;
}
