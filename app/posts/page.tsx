"use client";
import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetching";

type Post = {
  title: string;
  text: string;
  _id: string;
  comments: [];
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const API = "https://janas-blog-api.fly.dev/posts/";
  useEffect(() => {
    fetchRequest(API, "posts", setPosts);
  }, []);
  return (
    <main className="h-min-screen flex flex-col items-start justify-center p-24 gap-24">
      my posts
      {posts?.map((post, i) => (
        <div key={i}>
          <a href={"posts/" + post._id}>
            {i + 1}. {post.title}
          </a>
          <p>{post.text}</p>
          <p>This post has {post.comments.length} comment(s) </p>
        </div>
      ))}
    </main>
  );
}
