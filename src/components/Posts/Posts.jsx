import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Posts.css";
import {
  getPosts,
  getComments,
  flushPosts
  // updateLike
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
  const { defaultAvatar } = useSelector(state => state.general);
  const channel = useSelector(state => state.channels[channelId]);
  const posts = useSelector(state => state.posts[channelId]);
  const { id: ownId } = useSelector(state => state.self);
  const comments = useSelector(state => state.comments);
  const postsApiLoading = false;
  const commentsApiLoading = false;
  // const { postsApiLoading, commentsApiLoading } = useSelector(
  //   state => state.apiState
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(flushPosts({ channelId }));
    };
  }, [channelId, dispatch]);

  const onBottomView = () => {
    dispatch(getPosts(channelId));
  };

  const isAdmin = channel?.admins?.includes(ownId);

  return (
    <InfiniteScroller
      className="Posts--container"
      loading={postsApiLoading}
      loader={Spinner}
      onBottomView={onBottomView}
      hasMoreBottom={
        posts.length >= 7 && channel.firstPostId !== posts[posts.length - 1].id
      }
    >
      {posts.map(post => (
        <div key={post.id} className="Posts--post">
          <PostCard
            id={post.id}
            username={post.author.username}
            avatar={post.author.avatar || defaultAvatar}
            likes={post.likeCount}
            liked={post.liked}
            comments={post.commentCount}
            createdAt={post.createdAt}
            post={post.content}
            channelId={channelId}
          />
          {comments[post.id] &&
            !comments[post.id].find(
              comment => comment.id === post.firstCommentId
            ) &&
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
                  likes={comment.likeCount}
                  liked={comment.liked}
                  createdAt={comment.createdAt}
                  reply={comment.content}
                  postId={post.id}
                />
              ))}
            </div>
          )}
          {(isAdmin || post.selfCommentCount < 5) && (
            <div className="Posts--replyDraft">
              <CreateReply postId={post.id} />
            </div>
          )}
        </div>
      ))}
    </InfiniteScroller>
  );
}
