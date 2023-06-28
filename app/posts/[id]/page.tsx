"use client";
import CommentField from "@/app/components/CommentField";
import Heading from "@/app/components/UI_components/Heading";
import { fetchPost, opts_get } from "@/app/utils/api_actions";
import { PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostWithComments>();

  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  //Dangerous by default,but fine in this scenario where I am the only admin and only the fetched posts.text gets html'd
  const createHtml = () => {
    return { __html: post?.text };
  };
  useEffect(() => {
    fetchPost(API_PAGE_ID, opts_get, setPost);
  }, []);
  return (
    <div className="h-screen flex flex-col gap-10 p-10">
      <Heading title={post?.title} />
      <div dangerouslySetInnerHTML={createHtml()}></div>
      <CommentField API_PAGE_ID={API_PAGE_ID}/>
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
