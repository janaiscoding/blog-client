"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function New() {
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const getJwtToken = () => {
    return sessionStorage.getItem("jwt");
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwtToken()}`,
    },
    body: JSON.stringify({ title, text }),
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("https://janas-blog-api.fly.dev/posts/new", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(data); // yay the new post was sent!
        // here i will add a redirect to the post page :)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const jwtToken = getJwtToken();
    if (!jwtToken) {
      redirect("/login");
    }
  }, []);
  return (
    <div className="h-screen">
      Protected new page(meow meow JWT Tokens are awesomeeee)
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Create new post</button>
      </form>
    </div>
  );
}
