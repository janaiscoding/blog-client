"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  const setJwtToken = (token: string) => {
    return sessionStorage.setItem("jwt", token);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      "https://janas-blog-api.fly.dev/login",
      requestOptions
    );
    const data = await response.json();
    console.log(data, "logged in"); // MY JWT TOKEN
    setJwtToken(data);
  };

  return (
    <div className="h-screen p-24">
      ADMIN account :)
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
