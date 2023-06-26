"use client";
import { fetchRequest, opts_get } from "@/app/utils/api_actions";
import { PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";
import EditPost from "@/app/components/EditPost";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostWithComments>();
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  useEffect(() => {
    fetchRequest(API_PAGE_ID, opts_get, "post", setPost);
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h1> UPDATE PAGE OF POST </h1>
      <EditPost
        title={post?.title}
        text={post?.text}
        published={post?.published}
        API_PAGE_ID={API_PAGE_ID}
        setPost={setPost}
      />
    </div>
  );
}
