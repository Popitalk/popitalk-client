import React, { useState, useRef, useEffect } from "react";
import "./Posts.css";
import PostCard from "../PostCard";
import ReplyCard from "../ReplyCard";
import CreateReply from "../CreateReply";

const posts = {
  abc1: {
    username: "Username1",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    likes: 6,
    createdAt: "2019-12-03T01:30:27.206Z",
    comments: 2,
    post:
      "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
  },
  abc2: {
    username: "Username1",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    likes: 12,
    createdAt: "2019-12-03T01:30:27.206Z",
    comments: 2,
    post:
      "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
  },
  abc3: {
    username: "Username1",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    likes: 12,
    createdAt: "2019-12-03T01:30:27.206Z",
    comments: 2,
    post:
      "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
  },
  abc4: {
    username: "Username1",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    likes: 122,
    createdAt: "2019-12-03T01:30:27.206Z",
    comments: 2,
    post:
      "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
  }
};

const replies = {
  abc1: [
    {
      id: "xyz1",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      comments: 2,
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    },
    {
      id: "xyz2",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    }
  ],
  abc2: [
    {
      id: "xyz3",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      comments: 2,
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    },
    {
      id: "xyz4",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    }
  ],
  abc3: [
    {
      id: "xyz5",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      comments: 2,
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    },
    {
      id: "xyz6",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    }
  ],
  abc4: [
    {
      id: "xyz7",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      comments: 2,
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    },
    {
      id: "xyz8",
      username: "Username1",
      avatar: "https://i.imgur.com/tLljw1z.jpg",
      likes: 6,
      createdAt: "2019-12-03T01:30:27.206Z",
      reply:
        "qweqweqdasasadasdasdsaddsadsasdasdasaqweqqQweqeqwe qweqweqweqweqweqweqweqweqweqe"
    }
  ]
};

export default function Posts() {
  return (
    <div className="Posts--container">
      {Object.entries(posts).map(([postId, post]) => (
        <div key={postId} className="Posts--post">
          <PostCard
            username={post.username}
            avatar={post.avatar}
            likes={post.likes}
            comments={post.comments}
            createdAt={post.createdAt}
            post={post.post}
          />
          <div className="Posts--replies">
            {replies[postId].map(reply => (
              <ReplyCard
                key={reply.id}
                username={reply.username}
                avatar={reply.avatar}
                likes={reply.likes}
                createdAt={reply.createdAt}
                reply={reply.reply}
              />
            ))}
          </div>
          <div className="Posts--replyDraft">
            <CreateReply />
          </div>
        </div>
      ))}
    </div>
  );
}
