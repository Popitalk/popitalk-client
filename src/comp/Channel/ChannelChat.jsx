import React, { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../VideoStatus.css";
import RoomIcon from "../RoomIcon";
import AvatarIcon from "../InfoCards/AvatarIcon";
import ChannelPost from "./ChannelPost";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";

export default function ChannelChat({ id, posts, comments }) {
  return (
    <div className="flex flex-col">
      {posts &&
        posts.map((post, idx) => {
          const postComments = post.comments.map(commentId => {
            const comment = comments.filter(comment => {
              return commentId == comment.id;
            });
            return comment[0];
          });

          return (
            <>
              <ChannelPost key={idx} {...post} comments={postComments} />
            </>
          );
        })}
      {(!posts || (posts && posts.length === 0)) && (
        <p className="text-secondaryText text-center">Nothing to Show</p>
      )}
    </div>
  );
}
