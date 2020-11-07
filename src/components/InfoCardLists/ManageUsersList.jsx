import React from "react";
import PopupMenu from "../Controls/PopupMenu";
import ImageInfoCard from "../InfoCards/ImageInfoCard";
import InfoCardList from "./InfoCardList";

export default function ManageUsersList({
  users,
  handleProfile,
  options,
  ownerId,
  ...rest
}) {
  const { admins } = rest;
  const adminsIds = admins ? admins.map(({ id }) => id) : [];

  const itemRenderer = a => {
    const control =
      a.id === ownerId ? (
        <p className="text-secondaryText text-sm mr-2">Owner</p>
      ) : adminsIds.includes(a.id) ? (
        <p className="text-secondaryText text-sm mr-2">Admin</p>
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

  return <InfoCardList items={users} itemRenderer={itemRenderer} {...rest} />;
}
