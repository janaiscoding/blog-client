"use client";

import { useEffect, useState } from "react";
import Login from "../components/Login";
import AdminView from "../components/AdminView";
import { getJwtToken } from "../utils/authentication";

export default function Admin() {
  const [logged, setLogged] = useState(Boolean);
  useEffect(() => {
    const jwtToken = getJwtToken(); //logged is either set on initial login or on searching is the user is already logged in
    if (jwtToken) {
      setLogged(true);
    }
  }, []);
  return (
    <div className="h-screen">
      {logged ? <AdminView /> : <Login setLogged={setLogged} />}
    </div>
  );
}
