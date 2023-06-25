"use client";
import { useEffect, useState } from "react";

type Post = {
  title: string;
  text: string;
  _id: string;
  comments: [];
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const API = "https://janas-blog-api.fly.dev/posts/";

  const fetchRequest = (url: string, setter: any) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setter(data.posts);
        console.log("setting successful");
        console.log(data.posts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchRequest(API, setPosts);
  }, []);
  return (
    <main className="h-screen flex flex-col items-start justify-center p-24 gap-24">
      {posts.map((post, i) => (
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
