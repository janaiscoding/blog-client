"use client";
import { useEffect, useState } from "react";
import { getJwtToken } from "../utils/authentication";
import AdminView from "../components/AdminView";
import Login from "../components/Login";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const jwtToken = getJwtToken();
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
