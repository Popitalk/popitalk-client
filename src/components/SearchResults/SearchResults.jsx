import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { searchVideos, addVideo } from "../../redux/actions";
import VideoCard1 from "../VideoCard1";
import Button1 from "../Button1";
import "./SearchResults.css";
import strings from "../../helpers/localization";

export default function SearchResults() {
  const { channelId } = useParams();
  const { source, terms, results, page, searched } = useSelector(
    state => state.channels[channelId].videoSearch
  );
  const dispatch = useDispatch();

  const handleAdd = videoId => {
    dispatch(
      addVideo({
        channelId,
        videoId
      })
    );
  };

  const handleLoadMore = () => {
    dispatch(
      searchVideos({
        source,
        terms,
        page: page + 1,
        channelId
      })
    );
  };

  if (!searched) return null;

  return (
    <div className="SearchResults--container">
      <h4>
        {strings.searchResult} &quot;{terms}&quot;
      </h4>
      {results.length === 0 ? (
        <div>{strings.noVideosFound}</div>
      ) : (
        <div className="SearchResults--results">
          {results.map(video => (
            <VideoCard1
              key={video.id}
              source={video.source}
              id={video.id}
              name={video.name}
              thumbnail={video.thumbnail}
              uploadDate={video.uploadDate}
              duration={video.duration}
              views={video.views}
              handleAdd={id => handleAdd(id)}
            />
          ))}
          <Button1 pill size="lg" onClick={handleLoadMore}>
            {strings.loadMoreButton}
          </Button1>
        </div>
      )}
    </div>
  );
}
