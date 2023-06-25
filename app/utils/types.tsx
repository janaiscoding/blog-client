type Post = {
    title: string;
    text: string;
    _id: string;
    comments: [];
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
};

export type { Post, PostWithComments };