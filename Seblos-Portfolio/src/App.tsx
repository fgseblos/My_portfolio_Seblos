// App.tsx
import './App.css';

export default function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <h1>Francis Seblos</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="/src/assets/DIT-F-Seblos-Francis-James-G_business-attire-edited.jpg"
          alt="Profile"
          className="profile-image"
        />

        <div className="hero-text">
          <h2>Hello, I'm Francis 👋</h2>
          <p>
            A beginner web developer learning React and TypeScript.
          </p>

          <button>View Projects</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          My main focus is on technologies such as React, TypeScript, and CSS. With React, I build dynamic and reusable user interface components that make websites faster and easier to maintain. Using TypeScript helps me write cleaner, more reliable, and scalable code by adding type safety to JavaScript. I also use CSS to create attractive layouts, responsive designs, animations, and visually appealing user interfaces.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Project 1"
            />
            <h3>Portfolio Website</h3>
            <p>Simple portfolio built with React TSX.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Project 2"
            />
            <h3>Cash Register App</h3>
            <p>JavaScript app for handling purchases and change.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: francis@example.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Francis Seblos</p>
      </footer>
    </div>
  );
}