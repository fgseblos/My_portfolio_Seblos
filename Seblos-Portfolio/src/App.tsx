// App.tsx
import { useState } from 'react';
import './App.css';

import profileImage from './assets/IMG_20260528_161111.jpg';
import legacyResponsive from './assets/legacy-responsive.png';
import frontendDevelopment from './assets/frontend-development.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">

      {/* Header */}
      <header className="header">

        <h1 className="logo">
          Francis Seblos
        </h1>

        {/* Desktop Navigation */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Mobile Dropdown */}
        <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

      </header>

      {/* Hero Section */}
      <section id="home" className="hero">

        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />

        <div className="hero-text">
          <h2>Hello, I'm Francis 👋</h2>
          <p>IT Technology Junior Associate.</p>
        </div>

      </section>

      {/* About */}
      <section id="about" className="section">

        <div className="about-form">

          <h2 className="about-title">
            👨‍💻 About Me
          </h2>

          <form className="about-box">

            <div className="form-group">
              <label>🎯 Main Focus</label>

              <input
                type="text"
                value="Frontend Development, Legacy Responsive"
                readOnly
              />
            </div>

            <div className="form-group">
              <label>⚛️ Technologies</label>

              <input
                type="text"
                value="React, TypeScript, CSS"
                readOnly
              />
            </div>

            <div className="form-group">
              <label>📝 Description</label>

              <textarea
                readOnly
                value="My main focus is on technologies such as React, TypeScript, and CSS."
              />
            </div>

          </form>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="section">

        <h2>🚀 Certificate  </h2>

        <div className="projects">

          {/* Project 1 */}
          <div className="card">

            <img
              src={legacyResponsive}
              alt="Legacy Responsive"
            />

            <h3>Legacy Responsive</h3>

            <p>
              CSS techniques for flexible and user-friendly layouts.
            </p>

          </div>

          {/* Project 2 */}
          <div className="card">

            <img
              src={frontendDevelopment}
              alt="Front-End Development"
            />

            <h3>Front-End Development</h3>

            <p>
              TypeScript to deliver responsive web experiences.
            </p>

          </div>

        </div>

      </section>

      {/* Experience */}
      <section id="experience" className="section">

        <h2 className="section-title">
          💼 Experience
        </h2>

        <div className="experience-container">

          <div className="experience-card">

            <div className="emoji">🚀</div>

            <h3>Sites@Scale Intern</h3>

            <span className="experience-year">
              📅 2026
            </span>

            <p>
              Built responsive websites using React and TypeScript.
            </p>

          </div>

          <div className="experience-card">

            <div className="emoji">💻</div>

            <h3>Junior Associate</h3>

            <span className="experience-year">
              📅 2026
            </span>

            <p>
              Developed modern websites with responsive UI.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="section">

        <h2 className="contact-title">
          📬 Contact Me
        </h2>

        <form className="contact-form">

          <div className="form-group">
            <label>👤 Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>📧 Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>📱 Phone</label>
            <input type="text" placeholder="Enter your number" />
          </div>

          <div className="form-group">
            <label>💬 Message</label>
            <textarea placeholder="Write your message..." />
          </div>

          <button type="submit" className="contact-btn">
            🚀 Send Message
          </button>

        </form>

      </section>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-box">

          <h3>📬 Stay Connected</h3>

          <p>
            Subscribe or leave a quick message 👇
          </p>

          <div className="footer-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Send 🚀
            </button>

          </div>

          <p className="copyright">
            © 2026 Francis Seblos
          </p>

        </div>

      </footer>

    </div>
  );
}