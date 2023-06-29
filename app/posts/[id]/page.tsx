"use client";
import CommentField from "@/app/components/CommentField";
import Comment from "@/app/components/UI_components/Comment";
import Heading from "@/app/components/UI_components/Heading";
import { fetchPost, opts_get } from "@/app/utils/api_actions";
import { PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostWithComments>();
  const [refresher, setRefresher] = useState(Boolean);
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  useEffect(() => {
    fetchPost(API_PAGE_ID, opts_get, setPost);
  }, [refresher]);
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
      <div dangerouslySetInnerHTML={{__html: post?.text}}></div>
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
