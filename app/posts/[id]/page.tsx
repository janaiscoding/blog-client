import CommentField from "@/app/components/CommentField";
import Comment from "@/app/components/UI_components/Comment";
import Heading from "@/app/components/UI_components/Heading";
import { fetchPost, opts_get } from "@/app/utils/api_actions";
import { CommentType, PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://janas-blog-api.fly.dev/posts/${id}`);
  const data = await res.json();
  const post = data.post;
  const markup = { __html: `${post?.text}` }; //ah, the price I pay for cute-looking things(tinyMCE editor content)
  // const [post, setPost] = useState<PostWithComments>();
  // const [markup, setMarkup] = useState();
  // const [refresher, setRefresher] = useState<boolean>(false);

  // useEffect(() => {
  //   fetchPost(
  //     `https://janas-blog-api.fly.dev/posts/${id}`,
  //     setPost,
  //     refresher,
  //     setRefresher,
  //     setMarkup
  //   );
  // }, [refresher]);
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
      {/* <CommentField refresher={refresher} setRefresher={setRefresher} /> */}
      {/* comment list */}
      <div className="flex flex-col gap-2">
        {post?.comments.map((c:any, i:any) => (
          <Comment
            key={i}
            name={c.name}
            comment={c.comment}
            time={c.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
