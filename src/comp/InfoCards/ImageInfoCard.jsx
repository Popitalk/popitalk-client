import React from "react";
import InfoCard from "./InfoCard";
import AvatarIcon from "./AvatarIcon";

export default function ImageInfoCard({
  avatar,
  username,
  imageClick,
  ...rest
}) {
  const image = (
    <AvatarIcon avatar={avatar} username={username} imageClick={imageClick} />
  );

  return <InfoCard avatar={image} {...rest} />;
}
