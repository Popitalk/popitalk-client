import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { likeComment, unlikeComment } from "../../redux/actions";
import "./ReplyCard.css";

export default function ReplyCard({
  id,
  username,
  avatar,
  createdAt,
  reply,
  likes,
  liked,
  postId,
  comments
}) {
  // const { likesApiLoading: apiLoading } = useSelector(state => state.apiState);
  const apiLoading = false;
  const dispatch = useDispatch();

  const likeHandler = () => {
    if (liked) {
      dispatch(unlikeComment({ commentId: id }));
    } else {
      dispatch(likeComment({ commentId: id }));
    }
  };

  return (
    <div className="ReplyCard--container">
      <img src={avatar} alt={`${username}'s avatar`} />
      <div>
        <p className="ReplyCard--reply">
          <span>{username}</span> {reply}
        </p>
        <p className="ReplyCard--date">
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true
          })}
        </p>
      </div>
      <button type="button" onClick={apiLoading ? undefined : likeHandler}>
        {liked ? (
          <i className="fas fa-heart fa-lg ReplyCard--liked" />
        ) : (
          <>
            <i className="far fa-heart fa-lg  ReplyCard--buttons--visible" />
            <i className="fas fa-heart fa-lg ReplyCard--buttons--hidden" />
          </>
        )}
      </button>
      <p>{likes}</p>
    </div>
  );
}
