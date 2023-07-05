import Heading from "@/app/components/UI_components/Heading";
import arrowRight from "public/icons/Arrow.png";
import Image from "next/image";
import Breadcrumps from "@/app/components/UI_components/Breadcrumps";
import Footer from "@/app/components/UI_components/Footer";
import PostTemplate from "../PostTemplate";

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
    <div className="flex flex-col gap-2 px-6 pt-10 min-h-screen max-w-6xl md:mx-auto">
      <Breadcrumps />
      {post ? (
        <PostTemplate
          title={post?.title}
          date={post?.createdAt}
          markup={markup}
          id={id}
        />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Heading title={"This post does not exist!"} />
          <a
            className="flex items-center border-2 border-blue p-1 gap-1 font-poppins300 text-base tracking-tight"
            href={"/"}
          >
            <p>Go back</p>
            <Image src={arrowRight} alt="arorw right indicator" />
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
}
