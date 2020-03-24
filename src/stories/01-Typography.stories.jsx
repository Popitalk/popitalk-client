import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Text from "../components/Text";

export default {
  title: "Typography",
  component: Text,
  decorators: [withKnobs]
};

export const Text123 = () => (
  <div>
    <Text type="title1">Hello123</Text>
    <Text type="title2" color="secondaryText">
      Hello123
    </Text>
    <Text type="subtitle1" color="highlightText">
      Hello123
    </Text>
    <Text type="subtitle2" color="errorText">
      Hello123
    </Text>
    <Text type="button1">Hello123</Text>
    <Text type="button2">Hello123</Text>
    <Text type="text1">Hello123</Text>
    <Text type="text2">Hello123</Text>
    <Text type="small1">Hello123</Text>
    <Text type="small2">Hello123</Text>
  </div>
);

export const Text321 = () => {
  const content = text("children", "Hello123");
  const type = select(
    "select",
    [
      "title1",
      "title2",
      "subtitle1",
      "subtitle2",
      "button1",
      "button2",
      "text1",
      "text2",
      "small1",
      "small2"
    ],
    "text1"
  );
  const color = select(
    "colors",
    [
      "primaryText",
      "secondaryText",
      "tertiaryText",
      "highlightText",
      "linkText",
      "errorText",
      "disabledText"
    ],
    "primaryText"
  );
  return (
    <Text type={type} color={color}>
      {content}
    </Text>
  );
};

// import { action } from "@storybook/addon-actions";
//   <Button onClick={action("clicked")}>
// import { files } from '@storybook/addon-knobs';
// const label = 'Images';
// const accept = '.xlsx, .pdf';
// const defaultValue = [];
// const groupId = 'GROUP-ID1';
// const value = files(label, accept, defaultValue, groupId);
