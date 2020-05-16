import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";
import ChannelPost from "./ChannelPost";
import ChannelComment from "./ChannelComment";

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
              <ChannelPost key={idx} {...post} />
              {postComments &&
                postComments.map((comment, idx) => {
                  return <ChannelComment key={idx} {...comment} />;
                })}
            </>
          );
        })}
      {!posts && <p>Nothing to Show</p>}
    </div>
  );
}
