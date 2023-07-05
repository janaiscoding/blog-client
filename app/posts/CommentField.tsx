"use client";

import { useState } from "react";
import { createComment, opts_post_comment } from "../utils/api_actions";

import Image from "next/image";
import arrowRight from "public/icons/Arrow.png";
import Subheading from "../components/UI_components/Subheading";

const CommentField = ({ API_PAGE_ID, refresher, setRefresher }: any) => {
  const [name, setName] = useState(String);
  const [comment, setComment] = useState(String);
  const [errors, setErrors] = useState([]);
  const [hovered, setHovered] = useState<boolean>(false);
  const handleClear = () => {
    setName("");
    setComment("");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_post_comment.body = JSON.stringify({ name, comment });
    await createComment(
      API_PAGE_ID,
      opts_post_comment,
      setErrors,
      handleClear,
      refresher,
      setRefresher
    );
  };
  return (
    <form
      className="flex flex-col gap-2 max-w-md mt-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Subheading title="Write your thoughts.." />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="p-2 bg-white border border-solid border-grey rounded"
      ></input>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
        className="p-2 bg-white border border-solid border-grey rounded"
      />
      <div>
        {errors
          ? errors.map((e: { msg: string }, i) => (
              <p className="text-xs" key={i}>
                {e.msg}
              </p>
            ))
          : ""}
      </div>
      <div>
        <button
          type="submit"
          className="flex items-center border-2 border-blue p-1 gap-1"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <p className={`font-poppins300 text-base tracking-tight`}>Submit</p>
          <Image
            src={arrowRight}
            className={`w-max h-max hover-arrow ${
              hovered ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
            }`}
            alt="arrow right indicator"
          />
        </button>
      </div>
    </form>
  );
};

export default CommentField;
