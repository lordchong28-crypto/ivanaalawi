import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';  // Make sure to import the CSS

export default function Home() {
  const eventDate = new Date('March 15, 2025 18:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ ended: true })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <>
      {/* ✅ HERO / BANNER */}
      <div className="hero-banner">
        <h1>🎤 Ormoc City Singing Contest 2025</h1>
        <p className="hero-location">Live at <strong>Ormoc City Superdome</strong></p>

        {/* ✅ Countdown */}
        <div className="countdown">
          {timeLeft.ended ? (
            <span>Event Started!</span>
          ) : (
            <>
              <div><span>{timeLeft.days}</span>Days</div>
              <div><span>{timeLeft.hours}</span>Hours</div>
              <div><span>{timeLeft.minutes}</span>Minutes</div>
              <div><span>{timeLeft.seconds}</span>Seconds</div>
            </>
          )}
        </div>

        <Link to="/register">
          <button className="hero-btn">Register Now</button>
        </Link>
      </div>

      {/* ✅ PRIZE SECTION */}
      <section className="section">
        <h2>🏆 Prizes</h2>
        <div className="cards">
          <div className="card gold">🥇 Champion<br/>₱50,000 + Trophy</div>
          <div className="card silver">🥈 1st Runner-up<br/>₱30,000</div>
          <div className="card bronze">🥉 2nd Runner-up<br/>₱15,000</div>
        </div>
      </section>

      {/* ✅ JUDGES WITH IMAGES */}
      <section className="section light">
        <h2>🎼 Judges</h2>

        <div className="judge-grid">
          <div className="judge-card">
            {/* Replace with actual URLs */}
            <img src="https://i.imgur.com/fGVMUpE.png" alt="Judge A" />
            <h3>Judge A</h3>
            <p>Professional Vocal Coach</p>
            <p>GARRY V</p>
          </div>

          <div className="judge-card">
            {/* Replace with actual URLs */}
            <img src="https://i.imgur.com/NTRVi29.png" alt="Judge B" />
            <h3>Judge B</h3>
            <p>Record Producer</p>
            <p>OGIE ALCASID</p>
          </div>

          <div className="judge-card">
            {/* Replace with actual URLs */}
            <img src="https://i.imgur.com/yKIPEl8.png" alt="Judge C" />
            <h3>Judge C</h3>
            <p>Music Artist</p>
            <p>KAPOKAW</p>
          </div>
        </div>
      </section>

      {/* ✅ SPONSORS */}
      <section className="section">
        <h2>🤝 Sponsored By</h2>
        <div className="cards">
          <div className="card">Ormoc City LGU</div>
          <div className="card">Music Store PH</div>
          <div className="card">Radio Station 101.1</div>
        </div>
      </section>
    </>
  )
}
