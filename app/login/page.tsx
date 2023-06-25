"use client";

import { useEffect, useState } from "react";
import { getJwtToken, setJwtToken } from "../utils/authentication";
import { opts_method_post } from "../utils/fetching";
import { API_LOGIN } from "../utils/api_keys";
import { redirect } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [handledError, setErrors] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_method_post.body = JSON.stringify({ email, password });

    await fetch(API_LOGIN, opts_method_post)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.token !== undefined) {
          setJwtToken(data.token);
        } else {
          setErrors(data.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
        // Here: Fix erros for invalid email/password length
      });
  };
  return (
    <div className="h-screen p-24">
      ADMIN account login page
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
