import React from "react";
import "../VideoStatus.css";
import ChannelPost from "./ChannelPost";
import moment from "moment";

// {
//   "channelId": "98f40347-7ec5-49ab-ae0d-0255663f9ea1",
//   "posts": [
//     {
//       "id": "13bdf518-de7b-4681-b69c-7afff8eb8240",
//       "channelId": "98f40347-7ec5-49ab-ae0d-0255663f9ea1",
//       "userId": "47fd3a46-348f-4b44-9ca0-412ff0e19712",
//       "content": "dddsddd 😍",
//       "upload": null,
//       "createdAt": "2020-06-04T21:56:14.712475-04:00",
//       "author": {
//         "id": "47fd3a46-348f-4b44-9ca0-412ff0e19712",
//         "username": "sandPill",
//         "avatar": null
//       },
//       "liked": false,
//       "likeCount": 0,
//       "commentCount": 1,
//       "selfCommentCount": 1,
//       "firstCommentId": "b7b52fab-721a-4624-826f-5c567ed4fa31",
//       "lastCommentId": "b7b52fab-721a-4624-826f-5c567ed4fa31",
//       "lastCommentAt": "2020-06-04T22:11:30.02761-04:00"
//     }
//   ],
//   "comments": [
//     {
//       "id": "b7b52fab-721a-4624-826f-5c567ed4fa31",
//       "postId": "13bdf518-de7b-4681-b69c-7afff8eb8240",
//       "userId": "47fd3a46-348f-4b44-9ca0-412ff0e19712",
//       "content": "testing testing 123",
//       "createdAt": "2020-06-04T22:11:30.02761-04:00",
//       "author": {
//         "id": "47fd3a46-348f-4b44-9ca0-412ff0e19712",
//         "username": "sandPill",
//         "avatar": null
//       },
//       "liked": false,
//       "likeCount": 0
//     }
//   ]
// }
export default function ChannelChat({
  id,
  posts,
  comments,
  saveComment,
  defaultAvatar,
  toggleLike,
  ownId,
  removePost
}) {
  return (
    <div className="flex flex-col h-auto">
      {posts &&
        posts.map((post, idx) => {
          const postComments = comments[post.id];

          return (
            <ChannelPost
              key={idx}
              id={post.id}
              name={post.author.username}
              avatar={post.author.avatar || defaultAvatar}
              timeFromPost={moment(post.createdAt).fromNow()}
              text={post.content}
              liked={post.liked}
              comments={postComments}
              saveComment={saveComment}
              defaultAvatar={defaultAvatar}
              toggleLike={toggleLike}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              authorId={post.author.id}
              ownId={ownId}
              removePost={removePost}
            />
          );
        })}
      {(!posts || (posts && posts.length === 0)) && (
        <p className="text-secondaryText text-center text-sm py-32">
          There are no posts yet
        </p>
      )}
    </div>
  );
}
