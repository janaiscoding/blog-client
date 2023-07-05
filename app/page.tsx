import { Suspense } from "react";
import Footer from "./components/UI_components/Footer";
import Heading from "./components/UI_components/Heading";
import { API_ALL_POSTS } from "./utils/api_keys";
import { PostWithComments } from "./utils/types";
import LoadingSpinner from "./components/UI_components/LoadingSpinner";
import ProjectDetails from "./components/UI_components/ProjectDetails";

const Posts = async () => {
  const res = await fetch(API_ALL_POSTS, { next: { revalidate: 0 } });
  const data = await res.json();
  const posts = data.posts;

  return (
    <main className="flex flex-col min-h-screen justify-between px-6 max-w-6xl h-20 md:mx-auto">
      <div className="flex flex-col">
        <ProjectDetails />
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </div>
      <Footer />
    </main>
  );
};
export default Posts;
