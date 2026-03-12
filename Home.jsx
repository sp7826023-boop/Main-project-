import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from './assets/photo/businessman-working-on-laptop.jpg';

function Home() {
    return (
        <div className="home-container">
            <div className="content-wrapper">
                {/* Navbar Section */}
                <nav className="navbar">
                    <div className="logo-container">
                        <h1 className="logo">QuickJobs</h1>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link active">Home</Link></li>
                        <li><Link to="/job" className="nav-link">jobs</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                    </ul>
                    <div className="nav-right">
                        <Link to="/register" className="auth-link">Register</Link>
                        <Link to="/login" className="auth-link">Login</Link>
                        <span className="divider">|</span>
                        <Link to="/employers" className="auth-link">Employers / Post Job</Link>
                    </div>
                </nav>

                {/* Split-Screen Hero Section */}
                <main className="hero-content">
                    <div className="hero-text">
                        <h1>Find Your <span className="highlight">Dream Job</span> Today</h1>
                        <p>Discover thousands of opportunities, connect with top employers, and take the next step in your career journey.</p>
                        <div className="hero-buttons">
                            <Link to="/job" className="btn-primary">Explore Jobs</Link>
                            <Link to="/register" className="btn-secondary">Upload Resume</Link>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <img src={heroImage} alt="Working from home illustration" className="animated-hero-image" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;