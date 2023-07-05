"use client";


import Comment from "@/app/components/UI_components/Comment";
import { fetchPost } from "@/app/utils/api_actions";
import { PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";
import CommentField from "./CommentField";

const CommentSection = ({ id }: any) => {
  const [post, setPost] = useState<PostWithComments>();
  const [refresher, setRefresher] = useState<boolean>(false);

  useEffect(() => {
    fetchPost(`https://janas-blog-api.fly.dev/posts/${id}`, setPost);
  }, [refresher]);
  return (
    <>
      <CommentField
        API_PAGE_ID={`https://janas-blog-api.fly.dev/posts/${id}`}
        refresher={refresher}
        setRefresher={setRefresher}
      />
      {/* comment list */}
      <div className="flex flex-col gap-2">
        {post?.comments.map((c: any, i: any) => (
          <Comment
            key={i}
            name={c.name}
            comment={c.comment}
            time={c.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default CommentSection;
