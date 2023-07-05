import Heading from "../components/UI_components/Heading";
import { Suspense } from "react";
import LoadingSpinner from "../components/UI_components/LoadingSpinner";
import PostDetail from "./PostDetail";
import CommentSection from "./CommentSection";

const PostTemplate = ({
  title,
  date,
  markup,
  id,
}: {
  title: string;
  date: string;
  markup: any; //{ __html: string }
  id: string;
}) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Heading title={title} />
      <div dangerouslySetInnerHTML={markup}></div>
      <PostDetail date={date} />  
      <CommentSection id={id} />
    </Suspense>
  );
};

export default PostTemplate;
