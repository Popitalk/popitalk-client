import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Posts.css";
import {
  getPosts,
  getComments,
  refreshPosts,
  updateLike
} from "../../redux/actions";
import InfiniteScroller from "../InfiniteScroller";
import PostCard from "../PostCard";
import ReplyCard from "../ReplyCard";
import CreateReply from "../CreateReply";

const Spinner = () => (
  <div className="Posts--spinner">
    <div className="Posts--spinner--circle" />
  </div>
);

export default function Posts() {
  const { channelId } = useParams();
  const { channels, posts, comments, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const { postsApiLoading, commentsApiLoading } = useSelector(
    state => state.apiState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(refreshPosts(channelId));
    };
  }, [channelId, dispatch]);

  const onBottomView = () => {
    dispatch(getPosts(channelId));
  };

  return (
    <InfiniteScroller
      className="Posts--container"
      loading={postsApiLoading}
      loader={Spinner}
      onBottomView={onBottomView}
      hasMoreBottom={
        posts[channelId].length >= 7 &&
        channels[channelId].firstPostId !==
          posts[channelId][posts[channelId].length - 1].id
      }
    >
      {posts[channelId].map(post => (
        <div key={post.id} className="Posts--post">
          <PostCard
            id={post.id}
            username={post.author.username}
            avatar={post.author.avatar || defaultAvatar}
            likes={post.likesCount}
            liked={post.liked}
            comments={post.commentsCount}
            createdAt={post.createdAt}
            post={post.content}
            channelId={channelId}
          />
          {comments[post.id] &&
            post.firstCommentId !== comments[post.id][0].id &&
            (commentsApiLoading ? (
              <Spinner />
            ) : (
              <p
                className="Posts--viewMore"
                onClick={() => dispatch(getComments(post.id))}
              >
                View more comments
              </p>
            ))}

          {comments[post.id] && (
            <div className="Posts--replies">
              {comments[post.id].map(comment => (
                <ReplyCard
                  key={comment.id}
                  id={comment.id}
                  username={comment.author.username}
                  avatar={comment.author.avatar || defaultAvatar}
                  likes={comment.likesCount}
                  liked={comment.liked}
                  createdAt={comment.createdAt}
                  reply={comment.content}
                  postId={post.id}
                />
              ))}
            </div>
          )}
          <div className="Posts--replyDraft">
            <CreateReply postId={post.id} />
          </div>
        </div>
      ))}
    </InfiniteScroller>
  );
}
