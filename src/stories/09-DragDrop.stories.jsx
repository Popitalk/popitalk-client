import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ChannelListQueue from "../comp/Channel/ChannelListQueue";
import { testQueue } from "../stories/seed-arrays";

export default {
  title: "Drag and Drop",
  decorators: [withKnobs]
};

export const GridDragAndDrop = () => {
  return (
    <div>
      <ChannelListQueue playlist={testQueue} />
    </div>
  );
};
