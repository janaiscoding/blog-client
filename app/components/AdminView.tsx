"use client";
import { useEffect, useState } from "react";
import { fetchAllPosts, opts_get } from "../utils/api_actions";
import { API_ALL_POSTS } from "../utils/api_keys";
import PostAdminPreview from "./PostAdminPreview";

const AdminView = () => {
  const [posts, setPosts] = useState([]);
  const [deleted, setDeleted] = useState(Boolean);

  const allPosts = posts.map((post: any, i) => (
    <PostAdminPreview
      key={i}
      post={post}
      deleted={deleted}
      setter={setDeleted}
    />
  ));

  useEffect(() => {
    fetchAllPosts(API_ALL_POSTS, opts_get, setPosts);
    console.log("how many times does this get called");
  }, [deleted]);

  return (
    <div>
      <h1>ADMIN PAGE</h1>
      <a href="/posts/new">New post</a>
      <div>{allPosts}</div>
    </div>
  );
};

export default AdminView;
