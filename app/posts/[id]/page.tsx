"use client";
import Heading from "@/app/components/UI_components/Heading";
import { fetchRequest, opts_get } from "@/app/utils/api_actions";
import { PostWithComments } from "@/app/utils/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostWithComments>();

  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  //Dangerous by default,but fine in this scenario where I am the only admin and only the fetched posts.text gets html'd
  const createHtml = () => {
    return { __html: post?.text };
  };
  useEffect(() => {
    fetchRequest(API_PAGE_ID, opts_get, "post", setPost);
  }, []);
  return (
    <div className="h-screen flex flex-col gap-10">
      <Heading title={post?.title} />
      <div dangerouslySetInnerHTML={createHtml()}></div>
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
