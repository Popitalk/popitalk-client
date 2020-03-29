import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Text from "../comp/Text";

export default {
  title: "Typography",
  component: Text,
  decorators: [withKnobs]
};

export const Text123 = () => (
  <div>
    <Text variant="title1">Hello123</Text>
    <Text variant="title2" color="secondaryText">
      Hello123
    </Text>
    <Text variant="subtitle1" color="highlightText">
      Hello123
    </Text>
    <Text variant="subtitle2" color="errorText">
      Hello123
    </Text>
    <Text variant="button1">Hello123</Text>
    <Text variant="button2">Hello123</Text>
    <Text variant="text1">Hello123</Text>
    <Text variant="text2">Hello123</Text>
    <Text variant="small1">Hello123</Text>
    <Text variant="small2">Hello123</Text>
  </div>
);

export const Text321 = () => {
  const content = text("children", "Hello123");
  const variant = select(
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
    <Text variant={variant} color={color}>
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
