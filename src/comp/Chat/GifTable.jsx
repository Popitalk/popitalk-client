import React, { useState } from "react";
import Input from "../Controls/Input";
import { testGifs } from "../../stories/seed-arrays";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function GifTable({ updateGifsOpen }) {
  const params = useParams();
  const channelId = params.channelId || params.roomId;
  const userId = useSelector(state => state.self.id);
  const currentUserUsername = useSelector(state => state.self.username);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSendGif = gif => {
    dispatch(
      addMessage({
        id: uuidv4(),
        userId,
        channelId,
        content: JSON.stringify({
          id: gif.id,
          title: gif.title,
          still: gif.embed_url,
          images: {
            downsized_medium: gif.images.fixed_height.url,
            fixed_height: gif.images.fixed_height.url
          }
        }),
        upload: "gif",
        createdAt: Date.now(),
        author: {
          id: "",
          username: currentUserUsername,
          avatar: null
        }
      }),
      console.log(gif)
    );
    // updateGifsOpen(false);
  };
  return (
    <div className={`giftable relative bg-transparent w-84`}>
      <Input
        variant="user"
        size="sm"
        value={search}
        placeholder="Search for a GIF"
        onChange={e => setSearch(e.target.value)}
        onClick={() =>
          console.log(
            "sends a call to the server to return gifs by using giphy search api endpoint with keywords: ",
            search
          )
        }
        className="px-1"
      />
      <ul className="flex overflow-scroll space-x-1 p-1">
        {testGifs.data.map(gif => {
          console.log(gif);
          return (
            <li
              key={gif.id}
              role="button"
              onClick={() => handleSendGif(gif)}
              className="relative"
            >
              <div className="flex absolute w-full h-full top-0 left-0 justify-center items-center text-tertiaryText text-md font-bold bg-black bg-opacity-25 transition-opacity opacity-0 hover:opacity-100 duration-100">
                <p className="shadow-xl">Send</p>
              </div>
              <img
                className="h-24 max-w-none"
                src={gif.images.fixed_height_downsampled.url}
                alt={gif.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
