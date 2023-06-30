import CommentField from "@/app/components/CommentField";
import Comment from "@/app/components/UI_components/Comment";
import Heading from "@/app/components/UI_components/Heading";

// export const getData = async (id: string) => {
//   const res = await fetch(`https://janas-blog-api.fly.dev/posts/${id}`);
//   console.log("fetching...");
//   if (!res.ok) {
//     throw new Error("Failed");
//   }
//   return res.json();
// };

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://janas-blog-api.fly.dev/posts/${id}`);
  const post = await res.json();
  const markup = { __html: `${post?.text}` };
  return (
    <div className="flex flex-col gap-2 p-10 min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">All Posts</a>
          </li>
          <li>Current Post</li>
        </ul>
      </div>
      <Heading title={post?.title} />
      <div dangerouslySetInnerHTML={markup}></div>
      {/* comment form field  */}
      <CommentField />
      {/* comment list */}
      <div className="flex flex-col gap-2">
        {/* {post?.comments.map((c, i) => (
          <Comment
            key={i}
            name={c.name}
            comment={c.comment}
            time={c.createdAt}
          />
        ))} */}
      </div>
    </div>
  );
}
