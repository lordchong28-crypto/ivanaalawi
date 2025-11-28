import React from "react";

export default function About() {
  return (
    <div className="section light">
      <h2>About the Singing Contest</h2>

      <p style={{ maxWidth: "800px", margin: "0 auto 50px", opacity: 0.9 }}>
        The Ormoc City Singing Contest is organized to discover, support, and
        celebrate local musical talent. This annual event brings together
        passionate singers, fair judges, and a dedicated organizing team to
        create an unforgettable musical experience at the Ormoc City Superdome.
      </p>

      {/* ================= STAFF & ORGANIZERS ================= */}
      <h2>Staff & Organizers</h2>

      <div className="cards">
        <div className="card">
          <img
            src="https://i.imgur.com/5Raru2S.png"
            alt="Mark Ivan Hatico"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
          />
          <h3>Mark Ivan Hatico</h3>
          <p>
            Lead Organizer & Founder. Mark Ivan is passionate about music and
            community development. He leads the planning, coordination, and
            overall execution of the singing contest to ensure fairness and
            professionalism.
          </p>
        </div>

        <div className="card">
          <img
            src="https://i.imgur.com/xHYpRT1.png"
            alt="Kyle Zoilo"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
          />
          <h3>Kyle Zoilo</h3>
          <p>
            Technical & Registration Head. Kyle manages the online registration
            system, participant records, and event technology, ensuring smooth
            operations before and during the contest.
          </p>
        </div>

        <div className="card">
          <img
            src="https://i.imgur.com/xdS6SRF.png"
            alt="John Bernie Calimutan"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
          />
          <h3>John Bernie Calimutan</h3>
          <p>
            Program Coordinator. John Bernie organizes the program flow, stage
            management, and coordination with judges and performers to deliver
            a well-structured and exciting event.
          </p>
        </div>
      </div>

      {/* ================= RULES ================= */}
      <div className="section">
        <h2>Contest Rules</h2>

        <div style={{ maxWidth: "800px", margin: "auto", textAlign: "left" }}>
          <ul style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
            <li>Contestants must complete the official online registration.</li>
            <li>Participants must arrive on time on the contest day.</li>
            <li>Each contestant is allowed one song performance only.</li>
            <li>No offensive language or inappropriate content in songs.</li>
            <li>Judges’ decisions are final and irrevocable.</li>
            <li>Participants must follow stage and safety instructions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
