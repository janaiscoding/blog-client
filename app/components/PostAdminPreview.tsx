import { NextPage } from "next";
import DeletePost from "./DeletePost";

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
    <div className="grid grid-cols-5">
      <a href={`/posts/${post._id}`}>{post.title}</a>
      <p>{post.text}</p>
      {post.published ? <p>Is published</p> : <p>Not published</p>}
      <a href={`/posts/${post._id}/update`}>Edit</a>
      <DeletePost id={post._id} refresher={refresher} setRefresher={setRefresher} />
    </div>
  );
};

export default PostAdminPreview;
