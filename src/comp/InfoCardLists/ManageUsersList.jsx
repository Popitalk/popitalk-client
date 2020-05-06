import React from "react";
import classnames from "classnames";
import PopupMenu from "../PopupMenu";
import ImageInfoCard from "../InfoCards/ImageInfoCard";
import InfoCardList from "./InfoCardList";

export default function ManageUsersList({
  variant = "manage",
  users,
  handleProfile,
  options,
  className
}) {
  const itemRenderer = a => {
    const control = a.owner ? (
      <p className="text-secondaryText ml-auto">Owner</p>
    ) : (
      <PopupMenu id={a.id} options={options} className="ml-auto" />
    );

    return (
      <ImageInfoCard
        avatar={a.avatar}
        username={a.username}
        title={a.username}
        subtitle={`${a.firstName} ${a.lastName}`}
        controls={control}
        cardClick={() => handleProfile(a.id)}
      />
    );
  };

  return <InfoCardList items={users} itemRenderer={itemRenderer} />;
}
