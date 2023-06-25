"use client";
import { fetchRequest, opts_method_get } from "@/app/utils/fetching";
import { PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostWithComments>();
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  useEffect(() => {
    fetchRequest(API_PAGE_ID, opts_method_get, "post", setPost);
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h1> UPDATE PAGE OF POST </h1>
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
