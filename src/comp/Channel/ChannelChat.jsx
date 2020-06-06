import React, { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../VideoStatus.css";
import RoomIcon from "../RoomIcon";
import AvatarIcon from "../InfoCards/AvatarIcon";
import ChannelPost from "./ChannelPost";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";
import { formatDistanceToNow } from "date-fns";

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
  defaultAvatar
}) {
  return (
    <div className="flex flex-col">
      {posts &&
        posts.map((post, idx) => {
          // const postComments = post.comments.map(commentId => {
          //   const comment = comments.filter(comment => {
          //     return commentId == comment.id;
          //   });
          //   return comment[0];
          // });
          console.log("comments in channel chat", comments, "postid", post.id);
          // const postComments = comments[post.id]; //CHECK: not sure why this works
          // const postComments = copyComments.filter((comment) => {
          //   return comment.postId === post.id
          // })
          const postComments = comments[post.id];
          console.log("postComments", postComments);

          return (
            <>
              <ChannelPost
                key={idx}
                id={post.id}
                name={post.author.username}
                avatar={post.author.avatar || defaultAvatar}
                timeFromPost={formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true
                })}
                text={post.content}
                liked={post.liked}
                comments={postComments}
                saveComment={saveComment}
                defaultAvatar={defaultAvatar}
              />
            </>
          );
        })}
      {(!posts || (posts && posts.length === 0)) && (
        <p className="text-secondaryText text-center">Nothing to Show</p>
      )}
    </div>
  );
}
