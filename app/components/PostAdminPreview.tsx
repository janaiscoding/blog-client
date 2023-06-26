import { NextPage } from "next";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { deletePost, opts_delete } from "../utils/api_actions";

interface Props {
  post: {
    title: String;
    text: String;
    _id: String;
    published: Boolean;
  };
  setter: any;
  deleted: Boolean;
}

const PostAdminPreview: NextPage<Props> = ({ post, deleted, setter }) => {
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${post._id}`;

  const handleDelete = () => {
    deletePost(API_PAGE_ID, opts_delete, setter);
    deleted ? !deleted : deleted;
  };

  return (
    <div className="grid grid-cols-5">
      <a href={`/posts/${post._id}`}>{post.title}</a>
      <p>{post.text}</p>
      {post.published ? <p>Is published</p> : <p>Not published</p>}
      <a href={`/posts/${post._id}/update`}>Edit</a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostAdminPreview;
