import React, { useState } from "react";
import client from "../api";
import "./register.css";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketType: "General",
    age: "",
    gender: "",
    address: "",
    emergencyContact: "",
    notes: "",
  });

  const [contestantImage, setContestantImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");

    const data = new FormData();
    Object.keys(form).forEach((k) => data.append(k, form[k]));

    // ✅ CONTESTANT IMAGE (still sent as paymentImage for backend compatibility)
    if (contestantImage) data.append("paymentImage", contestantImage);

    try {
      await client.post("/registrations", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Registration successful!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        ticketType: "General",
        age: "",
        gender: "",
        address: "",
        emergencyContact: "",
        notes: "",
      });
      setContestantImage(null);
    } catch {
      setMessage("❌ Submission failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Contest Registration</h2>
        <p>Ormoc City Superdome • Singing Contest</p>

        <form onSubmit={submit} className="register-form">

          {/* BASIC INFO */}
          <div className="form-grid">
            <div className="field">
              <label>Full Name</label>
              <input name="fullName" value={form.fullName} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} />
            </div>

            <div className="field">
              <label>Ticket Type</label>
              <select name="ticketType" value={form.ticketType} onChange={handleChange}>
                <option>General</option>
                <option>VIP</option>
              </select>
            </div>

            <div className="field">
              <label>Age</label>
              <input name="age" value={form.age} onChange={handleChange} />
            </div>

            <div className="field">
              <label>Gender</label>
              <input name="gender" value={form.gender} onChange={handleChange} />
            </div>
          </div>

          {/* FULL WIDTH */}
          <div className="field full">
            <label>Address</label>
            <input name="address" value={form.address} onChange={handleChange} />
          </div>

          <div className="field full">
            <label>Emergency Contact</label>
            <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} />
          </div>

          <div className="field full">
            <label>Notes / Song Choice (Optional)</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} />
          </div>

          {/* ✅ IMAGE PROOF */}
          <div className="field full">
            <label>Contestant Image Proof</label>
            <small style={{ opacity: 0.7 }}>
              Upload a clear photo of the contestant (ID-style or portrait).
            </small>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setContestantImage(e.target.files[0])}
            />
          </div>

          <button className="register-btn" type="submit">
            Submit Registration
          </button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </div>
    </div>
  );
}
