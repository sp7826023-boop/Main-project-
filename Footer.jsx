import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">QuickJobs</Link>
                        <p className="footer-tagline">
                            Empowering your career journey with thousands of job opportunities and expert career advice.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon" aria-label="Facebook">FB</a>
                            <a href="#" className="social-icon" aria-label="Twitter">TW</a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">LN</a>
                            <a href="#" className="social-icon" aria-label="Instagram">IG</a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/press">Press</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link to="/job">Browse Jobs</Link></li>
                                <li><Link to="/advice">Career Advice</Link></li>
                                <li><Link to="/salary">Salary Tools</Link></li>
                                <li><Link to="/help">Help Center</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Newsletter</h3>
                            <p>Get the latest job updates and career tips directly in your inbox.</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Enter your email" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} QuickJobs. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
