import React, { useState } from "react";
import client from "../api";
import { useNavigate } from "react-router-dom";
import "./adminLogin.css";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await client.post("/auth/login", form);
      localStorage.setItem("admin_token", res.data.token);
      nav("/admin-dashboard");
    } catch (e) {
      setErr("❌ Invalid username or password");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2>Admin Login</h2>
        <p className="subtitle">Authorized access only</p>

        <form onSubmit={submit} className="admin-login-form">
          <div className="field">
            <label>Username</label>
            <input
              name="username"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
              placeholder="Enter admin username"
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              placeholder="Enter password"
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        {err && <p className="error-msg">{err}</p>}
      </div>
    </div>
  );
}
