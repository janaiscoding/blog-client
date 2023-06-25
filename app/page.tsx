"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const API = "https://janas-blog-api.fly.dev/posts/";

  useEffect(() => {
    fetch(API, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <main className="h-screen flex flex-col items-start justify-center p-24 gap-24">
      {posts.map((post, i) => (
        <div key={i}>
          <p>
            {i + 1}. {post.title}
          </p>
          <p>{post.text}</p>
        </div>
      ))}
    </main>
  );
}
