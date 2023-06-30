"use client";

import { useEffect, useState } from "react";
import { createComment, opts_post_comment } from "../utils/api_actions";
import Button from "./UI_components/Button";
import Subheading from "./UI_components/Subheading";

const CommentField = ({ API_PAGE_ID }: any) => {
  const [name, setName] = useState(String);
  const [comment, setComment] = useState(String);
  const [errors, setErrors] = useState([]);
  const handleClear = () => {
    setName("");
    setComment("");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_post_comment.body = JSON.stringify({ name, comment });
   //issue here
    console.log(name, comment);
    await createComment(API_PAGE_ID, opts_post_comment, setErrors, handleClear);
  };
  return (
    <form
      className="flex flex-col gap-2 max-w-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Subheading title="Write your thoughts.." />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="p-2"
        required
      ></input>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
        className="p-2"
        required
      ></textarea>
      <div>
        {errors
          ? errors.map((e: { msg: string }, i) => (
              <p className="text-xs" key={i}>
                {e.msg}
              </p>
            ))
          : ""}
      </div>
      <div>
            <button type="submit" className="btn btn-neutral">Submit</button>
      </div>
    </form>
  );
};

export default CommentField;
