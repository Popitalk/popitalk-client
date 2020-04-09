import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "Typography",
  decorators: [withKnobs]
};

export const Text123 = () => (
  <div>
    <h1 className="text-6xl font-bold">Hello123</h1>
    <h2 className="text-4xl font-bold">Hello123</h2>
    <h3 className="text-2xl font-bold">Hello123</h3>
    <h4 className="text-2xl font-bold">Hello123</h4>
    <h5 className="text-lg font-bold">Hello123</h5>
    <h5 className="text-lg">Hello123</h5>
    <p className="text-base font-bold">Hello123</p>
    <p className="text-base font">Hello123</p>
    <p className="text-sm">Hello123</p>
    <p className="text-xs">Hello123</p>
  </div>
);

// import { action } from "@storybook/addon-actions";
//   <Button onClick={action("clicked")}>
// import { files } from '@storybook/addon-knobs';
// const label = 'Images';
// const accept = '.xlsx, .pdf';
// const defaultValue = [];
// const groupId = 'GROUP-ID1';
// const value = files(label, accept, defaultValue, groupId);
