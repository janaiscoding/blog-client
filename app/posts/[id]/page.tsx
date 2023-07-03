import Heading from "@/app/components/UI_components/Heading";
import CommentSection from "./CommentSection";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://janas-blog-api.fly.dev/posts/${id}`);
  const data = await res.json();
  const post = data.post;
  const markup = { __html: `${post?.text}` }; //ah, the price I pay for cute-looking things(tinyMCE editor content)

  return (
    <div className="flex flex-col gap-2 p-10 min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">All posts</a>
          </li>
          <li>Current Post</li>
        </ul>
      </div>
      <Heading title={post?.title} />
      <div dangerouslySetInnerHTML={markup}></div>
      <CommentSection id={id} />
    </div>
  );
}
