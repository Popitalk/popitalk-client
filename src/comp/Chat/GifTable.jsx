import React, { useState } from "react";
import Input from "../Controls/Input";
import { testGifs } from "../../stories/seed-arrays";

export default function GifTable() {
  const [search, setSearch] = useState("");
  return (
    <div className={`giftable relative bg-transparent w-84`}>
      <Input
        variant="user"
        size="sm"
        value={search}
        placeholder="Search for a gif"
        onChange={e => setSearch(e.target.value)}
      />
      <ul className="flex overflow-scroll space-x-1 p-1">
        {testGifs.data.map(gif => {
          return (
            <li key={gif.id} role="button" onClick={() => console.log(gif.id)}>
              <img
                className="h-20 max-w-none"
                src={gif.images.fixed_width.url}
                alt={gif.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
