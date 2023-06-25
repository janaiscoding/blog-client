"use client";
import { useEffect, useState } from "react";
import { fetchRequest } from "../utils/fetching";
import { opts_method_get } from "../utils/fetching";
import { API_ALL_POSTS } from "../utils/api_keys";
import { Post } from "../utils/types";


export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetchRequest(API_ALL_POSTS, opts_method_get, "posts", setPosts);
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
