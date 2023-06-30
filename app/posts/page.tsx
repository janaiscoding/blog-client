import { PostWithComments } from "../utils/types";
import Heading from "../components/UI_components/Heading";
import { API_ALL_POSTS } from "../utils/api_keys";

const Posts = async () => {
  const res = await fetch(API_ALL_POSTS);
  const data = await res.json();
  const posts = data.posts;
  return (
    <main className="flex flex-col p-24 min-h-screen">
      <Heading title={"Published blog posts"} />
      {posts.map((post: PostWithComments, i: string) => (
        <div key={i}>
          <a className="text-blue text-xl" href={`/posts/${post._id}`}>
            {post.title}
          </a>
          <p className="text-grey text-sm">
            Written on {new Date(post.createdAt).toLocaleDateString()} -{" "}
            {post.comments.length} Comments{" "}
          </p>
        </div>
      ))}
    </main>
  );
};
export default Posts;
