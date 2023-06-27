import { useEffect, useState } from "react";
import { fetchAllPosts, opts_get } from "../utils/api_actions";
import { API_ALL_POSTS } from "../utils/api_keys";
import NewPost from "./NewPost";
import PostAdminPreview from "./PostAdminPreview";

const AdminView = async () => {
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
  // async function getData() {
  //   const res = await fetch(API_ALL_POSTS);
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   return res.json();
  // }
  // const data = await getData();
  // useEffect(() => {
  //   fetchAllPosts(API_ALL_POSTS, opts_get, setPosts);
  //   console.log('refreshing everytime on', refresher)
  // }, [refresher]);

  return (
    <div>
      <h1>ADMIN PAGE</h1>
      <NewPost refresher={refresher} setRefresher={setRefresher} />
      <p>Already existing posts</p>
      <div>{allPosts}</div>
    </div>
  );
};

export default AdminView;
