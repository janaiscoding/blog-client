"use client";

import { useEffect, useState } from "react";
import {
  deletePost,
  opts_delete,
  opts_put,
  updatePost,
} from "../utils/api_actions";
import { redirect } from "next/navigation";

const EditPost = ({ title, text, id, published, API_PAGE_ID }: any) => {
  const [updatedTitle, setUpdatedTitle] = useState(String);
  const [updatedText, setUpdatedText] = useState(String);
  const [updatedPublished, setPublished] = useState(Boolean);
  const [updateComplete, setUpdateComplete] = useState(Boolean);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    opts_put.body = JSON.stringify({
      title: updatedTitle,
      text: updatedText,
      published: updatedPublished,
    });
    await updatePost(API_PAGE_ID, opts_put, setUpdateComplete);
  };

  useEffect(() => {
    if (text !== undefined) {
      setUpdatedText(text);
    }
    if (title !== undefined) {
      setUpdatedTitle(title);
    }
    if (published !== undefined) {
      setPublished(published);
    }
    console.log("updating form values");
    if (updateComplete) {
      redirect(`/posts/${id}`);
    }
  }, [title, text, published, updateComplete]);
  return (
    <div>
      <p>different component, initial data into a form</p>
      <form onSubmit={(e) => handleUpdate(e)} className="flex flex-col">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            value={updatedTitle}
            type="text"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Text</label>
          <input
            value={updatedText}
            type="text"
            onChange={(e) => setUpdatedText(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Publish</label>
          <input
            type="checkbox"
            checked={updatedPublished}
            onChange={() => setPublished(!updatedPublished)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
