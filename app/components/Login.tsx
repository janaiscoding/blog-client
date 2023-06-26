"use client";

import { useState } from "react";
import { setJwtToken } from "../utils/authentication";
import { loginRequest, opts_post } from "../utils/api_actions";
import { API_LOGIN } from "../utils/api_keys";

const Login = ({ setLogged }: any) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [validationErrors, setValidErrs] = useState([]);
  const [dbErrors, setDbErrs] = useState(String);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_post.body = JSON.stringify({ email, password });
    loginRequest(
      API_LOGIN,
      opts_post,
      setValidErrs,
      setDbErrs,
      setJwtToken,
      setLogged
    );
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
      <div>
        <p>errors field - validation</p>
        {validationErrors.length
          ? validationErrors.map((err: { msg: string }, i) => (
              <p key={i}>{err.msg}</p>
            ))
          : ""}
      </div>
      <div>
        <p>errors field - database</p>
        {dbErrors}
      </div>
    </div>
  );
};
export default Login;
