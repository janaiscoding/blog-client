type Post = {
  title: string;
  text: string;
  _id: string;
  comments: [];
  createdAt: string;
};

type PostWithComments = {
  title: string;
  text: string;
  _id: string;
  comments: [
    {
      comment: string;
      name: string;
      createdAt: string;
    }
  ];
  published: Boolean;
  createdAt: string;
};
type CommentType = {
  name: string;
  comment: string;
  createdAt: string;
};
export type { Post, PostWithComments, CommentType };
