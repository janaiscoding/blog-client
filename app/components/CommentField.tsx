"use client";

import { useState } from "react";
import { createComment, opts_post } from "../utils/api_actions";

const CommentField = ({ API_PAGE_ID }: { API_PAGE_ID: string }) => {
  const [name, setName] = useState(String);
  const [comment, setComment] = useState(String);
  const [data, setData] = useState();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(API_PAGE_ID, {
        method:'POST',
        body: JSON.stringify({comment, name})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "comment was sent");
    })
    .catch((error) => {
      console.log(error.message);
    });
    console.log(JSON.stringify({comment, name}))
    // opts_post.body = JSON.stringify({ comment, name });
    // console.log(API_PAGE_ID);
    // createComment(API_PAGE_ID, opts_post, setData);
    // console.log(data);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="p-2"
      ></input>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
        className="p-2"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentField;
