"use client";

import { useEffect, useState } from "react";
import { opts_put, updatePost } from "../utils/api_actions";

const EditPost = ({ title, text, published, API_PAGE_ID, setPost }: any) => {
  const [updatedTitle, setUpdatedTitle] = useState(String);
  const [updatedText, setUpdatedText] = useState(String);
  const [updatedPublished, setPublished] = useState(Boolean);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    opts_put.body = JSON.stringify({
      title: updatedTitle,
      text: updatedText,
      published: updatedPublished,
    });
    await updatePost(API_PAGE_ID, opts_put, setPost);
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
  }, [title, text, published]);
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
