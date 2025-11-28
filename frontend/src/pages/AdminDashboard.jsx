import React, { useEffect, useState } from "react";
import client from "../api";
import { useNavigate } from "react-router-dom";
import "./admin.css";

export default function AdminDashboard() {
  const [regs, setRegs] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await client.get("/registrations");
        setRegs(res.data);
      } catch (err) {
        localStorage.removeItem("admin_token");
        nav("/admin-login");
      }
    };
    fetch();
  }, [nav]);

  return (
    <div className="admin-container">
      <div className="admin-card">

        {/* HEADER */}
        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("admin_token");
              nav("/admin-login");
            }}
          >
            Logout
          </button>
        </div>

        <p className="subtitle">
          Total Registrations: <strong>{regs.length}</strong>
        </p>

        {/* TABLE */}
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Payment</th>
                <th>Date Registered</th>
              </tr>
            </thead>
            <tbody>
              {regs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty">
                    No registrations yet
                  </td>
                </tr>
              ) : (
                regs.map((r) => (
                  <tr key={r._id}>
                    <td>{r.fullName}</td>
                    <td>{r.email}</td>
                    <td>{r.phone || "—"}</td>
                    <td>
                      {r.paymentImage ? (
                        <a
                          className="view-link"
                          href={
                            client.defaults.baseURL.replace("/api", "") +
                            r.paymentImage
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Proof
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td>
                      {new Date(r.createdAt).toLocaleDateString()} <br />
                      <small>
                        {new Date(r.createdAt).toLocaleTimeString()}
                      </small>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
