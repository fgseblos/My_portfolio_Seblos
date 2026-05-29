// App.tsx
import { useState } from 'react';
import './App.css';

import profileImage from './assets/IMG_20260528_161111.jpg';
import legacyResponsive from './assets/legacy-responsive.png';
import frontendDevelopment from './assets/frontend-development.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* HEADER */}
      <header className="header">

        <h1 className="logo">Francis Seblos</h1>

        {/* Desktop Nav */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <img src={profileImage} alt="Profile" className="profile-image" />

        <div className="hero-text">
          <h2>Hello, I'm Francis 👋</h2>
          <p style={{ color: 'black' }}>
            IT Technology Junior Associate.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>👨‍💻 About Me</h2>

        <div className="about-box">
          <div className="form-group">
            <label>🎯 Main Focus</label>
            <input value="Frontend Development, Legacy Responsive" readOnly />
          </div>

          <div className="form-group">
            <label>⚛️ Technologies</label>
            <input value="React, TypeScript, CSS" readOnly />
          </div>

          <div className="form-group">
            <label>📝 Description</label>
            <textarea
              readOnly
              value="My main focus is on technologies such as React, TypeScript, and CSS."
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>🚀 Certificate</h2>

        <div className="projects">

          <div className="card">
            <img src={legacyResponsive} alt="Legacy Responsive" />
            <h3>Legacy Responsive</h3>
            <p>CSS techniques for flexible and user-friendly layouts.</p>
          </div>

          <div className="card">
            <img src={frontendDevelopment} alt="Front-End Development" />
            <h3>Front-End Development</h3>
            <p>TypeScript to deliver responsive web experiences.</p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>💼 Experience</h2>

        <div className="experience-container">

          <div className="experience-card">
            <div className="emoji">🚀</div>
            <h3>Sites@Scale Intern</h3>
            <span className="experience-year">📅 2026</span>
            <p>Built responsive websites using React and TypeScript.</p>
          </div>

          <div className="experience-card">
            <div className="emoji">💻</div>
            <h3>Junior Associate</h3>
            <span className="experience-year">📅 2026</span>
            <p>Developed modern websites with responsive UI.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>📬 Contact Me</h2>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message..." />
          </div>

          <button className="contact-btn">Send 🚀</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-box">
          <h3>Stay Connected</h3>
          <p>Subscribe or leave a message 👇</p>

          <div className="footer-form">
            <input placeholder="Enter your email" />
            <button>Send</button>
          </div>

          <p className="copyright">© 2026 Francis Seblos</p>
        </div>
      </footer>

    </div>
  );
}