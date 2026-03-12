import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const stats = [
  { value: '50K+', label: 'Jobs Posted' },
  { value: '120K+', label: 'Job Seekers' },
  { value: '8K+', label: 'Companies' },
  { value: '95%', label: 'Success Rate' },
];

const team = [
  { name: 'Aryan Sharma', role: 'CEO & Co-Founder', emoji: '👨‍💼' },
  { name: 'Priya Mehta', role: 'CTO & Co-Founder', emoji: '👩‍💻' },
  { name: 'Rahul Verma', role: 'Head of Product', emoji: '👨‍🎨' },
  { name: 'Sneha Joshi', role: 'Head of Growth', emoji: '👩‍📊' },
];

const values = [
  { icon: '🎯', title: 'Transparency', desc: 'No hidden fees, no fake listings, no spam — just honest job matches.' },
  { icon: '⚡', title: 'Speed', desc: 'Get matched with the right job in hours, not weeks.' },
  { icon: '🤝', title: 'Trust', desc: 'Every company is verified before posting jobs on our platform.' },
  { icon: '🌍', title: 'Inclusion', desc: 'We build for every job seeker — from freshers to senior leaders.' },
];

function About() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <nav className="about-navbar">
        <Link to="/" className="about-logo">QuickJobs</Link>
        <ul className="about-nav-links">
          <li><Link to="/" className="about-nav-link">Home</Link></li>
          <li><Link to="/job" className="about-nav-link">Jobs</Link></li>
          <li><Link to="/contact" className="about-nav-link">Contact</Link></li>
          <li><Link to="/about" className="about-nav-link active">About</Link></li>
        </ul>
        <div className="about-nav-right">
          <Link to="/login" className="a-signin-link">Sign In</Link>
          <Link to="/employers" className="a-employers-link">Employers / Post Job</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">🚀 Our Story</span>
          <h1>Connecting <span className="about-highlight">Talent</span> with <span className="about-highlight">Opportunity</span></h1>
          <p>QuickJobs was born with a simple mission — make job searching fast, fair, and human. We believe the right job shouldn't take months to find.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="mission-text">
          <h2>Why We Built QuickJobs</h2>
          <p>
            Millions of talented people struggle to find jobs that match their skills. Meanwhile, great companies spend weeks filtering through irrelevant applications. We built QuickJobs to bridge that gap — using smart matching and a clean, human-first experience.
          </p>
          <p>
            Founded in 2023 in Bangalore, we've helped over 50,000 people land their dream jobs and partnered with thousands of startups and enterprises across India.
          </p>
          <Link to="/job" className="mission-cta">Explore Open Jobs →</Link>
        </div>
        <div className="mission-visual">
          <div className="mission-card-stack">
            <div className="m-card m-card-1">🏢 500+ MNCs</div>
            <div className="m-card m-card-2">💼 Full-Time · Remote · Hybrid</div>
            <div className="m-card m-card-3">📍 Pan-India Opportunities</div>
            <div className="m-card m-card-4">⭐ Top Startups &amp; Unicorns</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2>What We Stand For</h2>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <p className="team-subtitle">The people behind QuickJobs are passionate about careers and technology.</p>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-avatar">{member.emoji}</div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="about-cta">
        <h2>Ready to find your next role?</h2>
        <p>Join thousands of professionals who've already landed their dream jobs through QuickJobs.</p>
        <div className="about-cta-buttons">
          <Link to="/job" className="cta-primary">Browse Jobs</Link>
          <Link to="/contact" className="cta-secondary">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2025 QuickJobs. All rights reserved. &nbsp;·&nbsp; <Link to="/">Home</Link> &nbsp;·&nbsp; <Link to="/job">Jobs</Link> &nbsp;·&nbsp; <Link to="/contact">Contact</Link></p>
      </footer>

    </div>
  );
}

export default About;