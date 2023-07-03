import Heading from "./components/UI_components/Heading";
import { API_ALL_POSTS } from "./utils/api_keys";
import { PostWithComments } from "./utils/types";

const Posts = async () => {
  const res = await fetch(API_ALL_POSTS, { next: { revalidate: 10 } });
  const data = await res.json();
  const posts = data.posts;
  return (
    <main className="flex flex-col md:p-24 min-h-screen">
      <Heading title={"JanaIsCoding's Blog"} />
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
