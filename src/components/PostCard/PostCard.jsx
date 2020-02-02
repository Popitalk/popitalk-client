import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { updateLike } from "../../redux/actions";
import "./PostCard.css";

export default function PostCard({
  id,
  username,
  avatar,
  createdAt,
  post,
  likes,
  liked,
  comments,
  channelId
}) {
  const { likesApiLoading: apiLoading } = useSelector(state => state.apiState);

  const dispatch = useDispatch();

  const likeHandler = () => {
    dispatch(updateLike({ channelId, postId: id, liked }));
  };

  return (
    <div className="PostCard--container">
      <div className="PostCard--user">
        <img src={avatar} alt="avatar" />
        <div>
          <h6>{username}</h6>
          <p>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true
            })}
          </p>
        </div>
      </div>
      <div className="PostCard--post">
        <p>{post}</p>
      </div>
      <div className="PostCard--stats">
        <div>
          <i className="fas fa-heart" />
          <p>{likes}</p>
        </div>
        <p>{comments} comments</p>
      </div>
      <div className="PostCard--buttons">
        <button type="button" onClick={apiLoading ? undefined : likeHandler}>
          {liked ? (
            <i className="fas fa-heart fa-lg PostCard--liked" />
          ) : (
            <>
              <i className="far fa-heart fa-lg PostCard--buttons--visible" />
              <i className="fas fa-heart fa-lg PostCard--buttons--hidden PostCard--like" />
            </>
          )}
          <p>Like</p>
        </button>
        <button type="button">
          <i className="far fa-comment fa-lg PostCard--buttons--visible" />
          <i className="fas fa-comment fa-lg PostCard--buttons--hidden PostCard--comment" />
          <p>Comment</p>
        </button>
      </div>
    </div>
  );
}
