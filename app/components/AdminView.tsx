"use client";
import { useEffect, useState } from "react";
import { fetchAllPosts, opts_get } from "../utils/api_actions";
import { API_ALL_POSTS } from "../utils/api_keys";
import PostAdminPreview from "./PostAdminPreview";

const AdminView = () => {
  const [posts, setPosts] = useState([]);
  const [refresher, setRefresher] = useState(Boolean);
  const allPosts = posts.map((post: any, i) => (
    <PostAdminPreview
      key={i}
      post={post}
      refresher={refresher}
      setRefresher={setRefresher}
    />
  ));

  useEffect(() => {
    fetchAllPosts(API_ALL_POSTS, opts_get, setPosts);
    console.log('refreshing data', refresher)
    console.log(posts)
  }, [refresher]);

  return (
    <div>
      <h1>ADMIN PAGE VIEW POSTS</h1>
      <a href="/admin/new">New post</a>
      <p>Already existing posts</p>
      <div className="grid grid-cols-3">{allPosts}</div>
    </div>
  );
};

export default AdminView;
