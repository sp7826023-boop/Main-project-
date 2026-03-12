import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <div className="contact-page">

      {/* Navbar */}
      <nav className="contact-navbar">
        <Link to="/" className="contact-logo">QuickJobs</Link>
        <ul className="contact-nav-links">
          <li><Link to="/" className="contact-nav-link">Home</Link></li>
          <li><Link to="/job" className="contact-nav-link">Jobs</Link></li>
          <li><Link to="/contact" className="contact-nav-link active">Contact</Link></li>
          <li><Link to="/about" className="contact-nav-link">About</Link></li>
        </ul>
        <div className="contact-nav-right">
          <Link to="/login" className="c-signin-link">Sign In</Link>
          <Link to="/employers" className="c-employers-link">Employers / Post Job</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="contact-hero">
        <h1>Get in <span className="contact-highlight">Touch</span></h1>
        <p>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
      </section>

      {/* Main Content */}
      <section className="contact-main">

        {/* Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <span className="info-icon">📍</span>
            <h3>Visit Us</h3>
            <p>12th Floor, Tech Park,<br />Bangalore, Karnataka 560001</p>
          </div>
          <div className="info-card">
            <span className="info-icon">📞</span>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
            <p>Mon – Sat, 9am – 6pm IST</p>
          </div>
          <div className="info-card">
            <span className="info-icon">✉️</span>
            <h3>Email Us</h3>
            <p>support@quickjobs.in</p>
            <p>careers@quickjobs.in</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {!sent ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              <p className="form-subtitle">Fill in the details below and we'll get back to you shortly.</p>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Send Message →</button>
            </form>
          ) : (
            <div className="success-card">
              <span className="success-icon">✅</span>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out, <strong>{form.name}</strong>. We'll get back to you at <strong>{form.email}</strong> within 24 hours.</p>
              <button className="submit-btn" onClick={() => setSent(false)}>Send Another</button>
            </div>
          )}
        </div>

      </section>

      {/* Footer Strip */}
      <footer className="contact-footer">
        <p>© 2025 QuickJobs. All rights reserved. &nbsp;·&nbsp; <Link to="/">Home</Link> &nbsp;·&nbsp; <Link to="/job">Jobs</Link></p>
      </footer>

    </div>
  );
}

export default Contact;