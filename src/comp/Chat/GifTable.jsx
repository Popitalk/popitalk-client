import React, { useState } from "react";
import Input from "../Controls/Input";
import { useSelector, useDispatch } from "react-redux";
import {
  addMessage,
  getTrendingGifs,
  getSearchGifs,
  saveOffset,
  setDisplay
} from "../../redux/actions";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import strings from "../../helpers/localization";
import { gifsDisplay } from "../../helpers/constants";
import Button from "../Controls/Button";

export default function GifTable({ updateGifsOpen }) {
  const offset = useSelector(state => state.gifs.offset);
  const display = useSelector(state => state.gifs.display);
  const trendingGifs = useSelector(state => state.gifs.trending);
  const searchResultGifs = useSelector(state => state.gifs.searchResults);
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
      })
    );
    // updateGifsOpen(false);
  };
  function displayGifs() {
    let gifs = trendingGifs;
    if (display === gifsDisplay.searchResults) {
      gifs = searchResultGifs;
    }

    return gifs.map(gif => {
      return (
        <li
          key={gif.id}
          role="button"
          onClick={() => handleSendGif(gif)}
          className="relative"
        >
          <div className="flex absolute w-full h-full top-0 left-0 justify-center items-center text-tertiaryText text-md font-bold bg-black bg-opacity-25 transition-opacity opacity-0 hover:opacity-100 duration-100">
            <p className="shadow-xl">{strings.SendText}</p>
          </div>
          <img
            className="h-24 max-w-none"
            src={gif.images.fixed_height_downsampled.url}
            alt={gif.title}
          />
        </li>
      );
    });
  }
  return (
    <div className="flex flex-col giftable relative bg-transparent w-84">
      <Input
        variant="user"
        size="sm"
        value={search}
        placeholder="Search for a GIF"
        onChange={e => setSearch(e.target.value)}
        onClick={() => {
          console.log(
            "sends a call to the server to return gifs by using giphy search api endpoint with keywords: ",
            search
          );
          dispatch(setDisplay(gifsDisplay.searchResults));
          dispatch(getSearchGifs({ term: search, offset: 0 }));
        }}
        className="px-1"
      />
      <ul className="flex items-center overflow-scroll space-x-1 p-1">
        {displayGifs()}
        <li>
          {display === gifsDisplay.trending ? (
            <Button
              styleNone
              styleNoneContent={strings.loadMoreButton}
              hoverable
              styleNoneContentClassName="text-highlightText text-xs font-bold"
              className="w-24 hover:bg-highlightBackground h-10 mx-2 rounded-xl"
              onClick={() => {
                const newOffset = offset + 10;
                dispatch(getTrendingGifs(newOffset));
                dispatch(saveOffset(newOffset));
              }}
            />
          ) : (
            <Button
              styleNone
              styleNoneContent={strings.backToTrendingButton}
              hoverable
              styleNoneContentClassName="text-highlightText text-xs font-bold"
              className="w-24 hover:bg-highlightBackground h-10 mx-2 rounded-xl"
              onClick={() => {
                dispatch(setDisplay(gifsDisplay.trending));
              }}
            />
          )}
        </li>
      </ul>
    </div>
  );
}
