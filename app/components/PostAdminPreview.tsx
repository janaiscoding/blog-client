import { NextPage } from "next";
import DeletePost from "./DeletePost";
import Heading from "./UI_components/Heading";

interface Props {
  post: {
    title: string;
    text: string;
    _id: string;
    published: boolean;
  };
  refresher: boolean;
  setRefresher: any;
}

const PostAdminPreview: NextPage<Props> = ({ post, refresher, setRefresher }) => {

  return (
    <div className="border">
      <a href={`/posts/${post._id}`}><Heading title={post.title} /></a>
      {post.published ? <p>Is published</p> : <p>Not published</p>}
      <a href={`/posts/${post._id}/update`}>Edit</a>
      <DeletePost id={post._id} refresher={refresher} setRefresher={setRefresher} />
    </div>
  );
};

export default PostAdminPreview;
