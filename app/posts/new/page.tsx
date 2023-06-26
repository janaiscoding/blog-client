"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getJwtToken } from "@/app/utils/authentication";
import { fetchRequest, opts_post } from "@/app/utils/api_actions";
import { API_NEW_POST } from "@/app/utils/api_keys";
import { Post } from "@/app/utils/types";

export default function New() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [post, setPost] = useState<Post>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_post.body = JSON.stringify({ title, text });
    fetchRequest(API_NEW_POST, opts_post, "post", setPost);
  };

  useEffect(() => {
    const jwtToken = getJwtToken();
    if (!jwtToken) {
      redirect("/login");
    }
  }, []);
  return (
    <div className="h-screen">
      Protected new page(meow meow JWT Tokens are awesomeeee)
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Create new post</button>
      </form>
    </div>
  );
}
