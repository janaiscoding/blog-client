"use client";
import fetchRequest from "@/app/utils/fetching";
import { useEffect, useState } from "react";
type Post = {
  title: string;
  text: string;
  _id: string;
  comments: [
    {
      comment: string;
      name: string;
      createdAt: Date;
    }
  ];
};
export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post>();
  const API = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  useEffect(() => {
    fetchRequest(API, "post", setPost);
    console.log(post?.comments);
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <div>{post?.title}</div>
      <div>{post?.text}</div>
      <div>
        {post?.comments.map((c, i) => (
          <div key={i}>
            <p>{c.comment}</p>
            <p>{c.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
