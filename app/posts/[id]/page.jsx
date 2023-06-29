"use client";
import CommentField from "@/app/components/CommentField";
import Comment from "@/app/components/UI_components/Comment";
import Heading from "@/app/components/UI_components/Heading";
import { opts_get } from "@/app/utils/api_actions";
import { useState } from "react";

export default async function Page({ params }) {
  const [refresher, setRefresher] = useState(false);
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;
  const post = await fetch(API_PAGE_ID, opts_get)
    .then((response) => response.json())
    .then((data) => {
      return data.post;
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      return;
    });

  return (
    <div className="flex flex-col gap-2 p-10 min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">All Posts</a>
          </li>
          <li>Current Post</li>
        </ul>
      </div>
      <Heading title={post?.title} />
      <div dangerouslySetInnerHTML={{ __html: post?.text }}></div>
      {/* comment form field  */}
      <CommentField
        API_PAGE_ID={API_PAGE_ID}
        refresher={refresher}
        setRefresher={setRefresher}
      />
      {/* comment list */}
      <div className="flex flex-col gap-2">
        {post?.comments.map((c, i) => (
          <Comment
            key={i}
            name={c.name}
            comment={c.comment}
            time={c.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
