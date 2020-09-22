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
          className="relative hover:bg-highlightText rounded-sm duration-75"
        >
          <img
            className="w-full max-h-none p-1 rounded-md"
            src={gif.images.fixed_height_downsampled.url}
            alt={gif.title}
          />
        </li>
      );
    });
  }
  return (
    <div className="flex flex-col giftable relative bg-secondaryBackground rounded-md w-84 h-64">
      <Input
        variant="user"
        size="sm"
        value={search}
        placeholder={strings.searchGifInput}
        onChange={e => setSearch(e.target.value)}
        onClick={() => {
          console.log(
            "sends a call to the server to return gifs by using giphy search api endpoint with keywords: ",
            search
          );
          dispatch(setDisplay(gifsDisplay.searchResults));
          dispatch(getSearchGifs({ term: search, offset: 0 }));
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            dispatch(setDisplay(gifsDisplay.searchResults));
            dispatch(getSearchGifs({ term: search, offset: 0 }));
          }
        }}
        className="p-1"
      />
      <div className="overflow-y-auto">
        <ul className="flex items-center grid grid-cols-2 overflow-y-auto py-4">
          {displayGifs()}
        </ul>
        <div className="flex justify-center w-full">
          {display === gifsDisplay.trending ? (
            <Button
              styleNone
              styleNoneContent={strings.loadMoreButton}
              hoverable
              styleNoneContentClassName="text-highlightText text-xs font-bold inline-block px-4 py-2"
              className="hover:bg-highlightBackground rounded-xl my-2"
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
              styleNoneContentClassName="text-highlightText text-xs font-bold inline-block px-4 py-2"
              className="hover:bg-highlightBackground my-2 rounded-xl"
              onClick={() => {
                dispatch(setDisplay(gifsDisplay.trending));
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
