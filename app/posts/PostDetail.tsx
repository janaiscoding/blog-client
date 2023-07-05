const PostDetail = ({ date }: { date: string }) => {
  return (
    <div className="self-end font-overpass text-grey">
      {" "}
      Written by{" "}
      <a href="https://www.linkedin.com/in/jana-istrate/" className="text-blue">
        JanaIsCoding
      </a>{" "}
      on {new Date(date).toLocaleDateString()} -{" "}
      {new Date(date).toLocaleTimeString()}
    </div>
  );
};

export default PostDetail;
