import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ChannelListQueue from "../comp/ChannelListQueue";

export default {
  title: "Drag and Drop",
  decorators: [withKnobs]
};

export const GridDragAndDrop = () => {
  return (
    <div>
      <ChannelListQueue />
    </div>
  );
};
