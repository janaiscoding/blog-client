"use client";
import { useState } from "react";
import { createPost, opts_post } from "@/app/utils/api_actions";
import { API_NEW_POST } from "@/app/utils/api_keys";
import { NextPage } from "next";

interface Props {
  refresher: boolean;
  setRefresher: any;
}

const NewPost: NextPage<Props> = ({ refresher, setRefresher }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("my new data is getting submitted:", title, text);
    opts_post.body = JSON.stringify({ title, text });
    createPost(API_NEW_POST, opts_post, refresher, setRefresher);
  };

  return (
    <div>
      Write a new post:
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
};
export default NewPost;
