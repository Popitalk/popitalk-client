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
        content: {
          gif: true,
          id: gif.id,
          title: gif.title,
          images: {
            downsized_medium: gif.images.downsized_medium.url,
            fixed_width: gif.images.fixed_width.url
          }
        },
        upload: null,
        createdAt: Date.now(),
        author: {
          id: "",
          username: currentUserUsername,
          avatar: null
        }
      })
    );
    updateGifsOpen(false);
  };
  return (
    <div className={`giftable relative bg-transparent w-84`}>
      <Input
        variant="user"
        size="sm"
        value={search}
        placeholder="Search for a gif"
        onChange={e => setSearch(e.target.value)}
        onClick={() =>
          console.log(
            "sends a call to the server to return gifs by using giphy search api endpoint with keywords: ",
            search
          )
        }
      />
      <ul className="flex overflow-scroll space-x-1 p-1">
        {testGifs.data.map(gif => {
          return (
            <li key={gif.id} role="button" onClick={() => handleSendGif(gif)}>
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
