import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Input from "../comp/Input";

export default {
  title: "Inputs",
  component: Input,
  decorators: [withKnobs]
};

export const Inputs123 = () => {
  const [input, setInput] = useState("");

  return (
    <div className="p-5 grid grid-cols-1 gap-1 row-gap-3">
      <Input
        size="sm"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
      />
      <Input
        size="md"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
        shape="pill"
      />
      <Input
        size="lg"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
      />
      <Input
        variant="video"
        size="lg"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
        videoSource="Youtube"
        // disabled={true}
      />
      <Input
        variant="counter"
        size="sm"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
      />
      <Input
        variant="counter"
        size="md"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
      />
      <Input
        variant="counter"
        size="lg"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        header="Email"
        error="Bad input"
      />
      <Input
        variant="filter"
        size="lg"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
      />
      <Input
        variant="filterModal"
        size="lg"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
      />
      <Input
        variant="user"
        size="lg"
        value={input}
        placeholder="Search friends"
        onChange={e => setInput(e.target.value)}
      />
      <Input
        variant="channel"
        size="lg"
        value={input}
        placeholder="Search for channels"
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
};
