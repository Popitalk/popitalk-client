import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "Typography",
  decorators: [withKnobs]
};
export const Text123 = () => (
  <div>
    <h4 className="text-lg font-bold text-tertiaryText bg-quaternaryBackground">
      Size
    </h4>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-5xl</h4>
    <h1 className="text-5xl">The quick brown fox jumped over the lazy dog</h1>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-4xl</h4>
    <h2 className="text-4xl">The quick brown fox jumped over the lazy dog</h2>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-2xl</h4>
    <h3 className="text-2xl">The quick brown fox jumped over the lazy dog</h3>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-xl</h4>
    <h4 className="text-xl">The quick brown fox jumped over the lazy dog</h4>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-lg</h4>
    <h5 className="text-lg">The quick brown fox jumped over the lazy dog</h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-base</h4>
    <p className="text-base">The quick brown fox jumped over the lazy dog</p>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-sm</h4>
    <p className="text-sm">The quick brown fox jumped over the lazy dog</p>
    <br></br>
    <h4 className="text-sm text-secondaryText">text-xs</h4>
    <p className="text-xs">The quick brown fox jumped over the lazy dog</p>
    <br></br>
    <h4 className="text-lg font-bold text-tertiaryText bg-quaternaryBackground">
      Weight
    </h4>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-thin</h4>
    <h5 className="text-lg font-thin">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-light</h4>
    <h5 className="text-lg font-light">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-normal</h4>
    <h5 className="text-lg font-normal">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-medium</h4>
    <h5 className="text-lg font-medium">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-semibold</h4>
    <h5 className="text-lg font-semibold">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-bold</h4>
    <h5 className="text-lg font-bold">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-extrabold</h4>
    <h5 className="text-lg font-extrabold">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
    <h4 className="text-sm text-secondaryText">font-black</h4>
    <h5 className="text-lg font-black">
      The quick brown fox jumped over the lazy dog
    </h5>
    <br></br>
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
