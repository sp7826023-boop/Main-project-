import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const jobListings = [
  {
    id: 1,
    company: 'Google',
    logo: 'https://logo.clearbit.com/google.com',
    title: 'Senior Frontend Engineer',
    location: 'Bangalore, India',
    type: 'Full-Time',
    salary: '₹30L – ₹50L/yr',
    tags: ['React', 'TypeScript', 'GraphQL'],
    posted: '2 days ago',
    color: '#4285F4',
  },
  {
    id: 2,
    company: 'Microsoft',
    logo: 'https://logo.clearbit.com/microsoft.com',
    title: 'Software Development Engineer II',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    salary: '₹25L – ₹45L/yr',
    tags: ['Azure', 'C#', '.NET'],
    posted: '1 day ago',
    color: '#00A4EF',
  },
  {
    id: 3,
    company: 'Amazon',
    logo: 'https://logo.clearbit.com/amazon.com',
    title: 'Backend Engineer – AWS',
    location: 'Mumbai, India',
    type: 'Full-Time',
    salary: '₹28L – ₹48L/yr',
    tags: ['Node.js', 'AWS', 'Microservices'],
    posted: '3 days ago',
    color: '#FF9900',
  },
  {
    id: 4,
    company: 'Flipkart',
    logo: 'https://logo.clearbit.com/flipkart.com',
    title: 'Product Designer – UX',
    location: 'Bangalore, India',
    type: 'Full-Time',
    salary: '₹18L – ₹30L/yr',
    tags: ['Figma', 'UX Research', 'Prototyping'],
    posted: '5 days ago',
    color: '#2874F0',
  },
  {
    id: 5,
    company: 'Infosys',
    logo: 'https://logo.clearbit.com/infosys.com',
    title: 'Data Scientist',
    location: 'Pune, India',
    type: 'Hybrid',
    salary: '₹12L – ₹22L/yr',
    tags: ['Python', 'ML', 'TensorFlow'],
    posted: '1 week ago',
    color: '#007DC1',
  },
  {
    id: 6,
    company: 'Razorpay',
    logo: 'https://logo.clearbit.com/razorpay.com',
    title: 'Full Stack Developer',
    location: 'Bangalore, India',
    type: 'Remote',
    salary: '₹20L – ₹35L/yr',
    tags: ['React', 'Go', 'PostgreSQL'],
    posted: '4 days ago',
    color: '#2F80ED',
  },
  {
    id: 7,
    company: 'Swiggy',
    logo: 'https://logo.clearbit.com/swiggy.com',
    title: 'DevOps Engineer',
    location: 'Bangalore, India',
    type: 'Full-Time',
    salary: '₹18L – ₹28L/yr',
    tags: ['Kubernetes', 'Docker', 'CI/CD'],
    posted: '6 days ago',
    color: '#FC8019',
  },
  {
    id: 8,
    company: 'BYJU\'S',
    logo: 'https://logo.clearbit.com/byjus.com',
    title: 'Android Developer',
    location: 'Remote',
    type: 'Remote',
    salary: '₹14L – ₹24L/yr',
    tags: ['Kotlin', 'Android', 'Jetpack'],
    posted: '2 days ago',
    color: '#7B2FF7',
  },
  {
    id: 9,
    company: 'Zomato',
    logo: 'https://logo.clearbit.com/zomato.com',
    title: 'Marketing Manager',
    location: 'Delhi, India',
    type: 'Full-Time',
    salary: '₹10L – ₹18L/yr',
    tags: ['Growth', 'SEO', 'Campaigns'],
    posted: '3 days ago',
    color: '#E23744',
  },
];

const typeColors = {
  'Full-Time': { bg: '#e8f0fe', color: '#1254d3' },
  'Remote': { bg: '#e6f9f1', color: '#12a05c' },
  'Hybrid': { bg: '#fff4e5', color: '#d97706' },
};

function Job() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Full-Time', 'Remote', 'Hybrid'];

  const filtered = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || job.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="job-page">
      {/* Navbar */}
      <nav className="job-navbar">
        <Link to="/" className="job-logo">QuickJobs</Link>
        <ul className="job-nav-links">
          <li><Link to="/" className="job-nav-link">Home</Link></li>
          <li><Link to="/job" className="job-nav-link active">Jobs</Link></li>
          <li><Link to="/contact" className="job-nav-link">Contact</Link></li>
          <li><Link to="/about" className="job-nav-link">About</Link></li>
        </ul>
        <div className="job-nav-right">
          <Link to="/login" className="job-signin-link">Sign In</Link>
          <Link to="/employers" className="job-employers-link">Employers / Post Job</Link>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="job-hero">
        <div className="job-hero-content">
          <h1>Browse <span className="job-highlight">Open Positions</span></h1>
          <p>Explore opportunities from top companies across India. Your next career move starts here.</p>
          <div className="job-search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by title, company, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="job-filter-section">
        <div className="job-filter-wrapper">
          <span className="filter-label">Filter by type:</span>
          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="result-count">{filtered.length} jobs found</span>
        </div>
      </section>

      {/* Job Cards Grid */}
      <section className="job-grid-section">
        <div className="job-grid">
          {filtered.length > 0 ? (
            filtered.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-card-header">
                  <div className="company-logo-wrap" style={{ borderColor: job.color + '33' }}>
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="company-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="company-logo-fallback"
                      style={{ background: job.color, display: 'none' }}
                    >
                      {job.company[0]}
                    </div>
                  </div>
                  <div className="job-card-company-info">
                    <span className="company-name">{job.company}</span>
                    <span className="posted-time">{job.posted}</span>
                  </div>
                  <span
                    className="job-type-badge"
                    style={{
                      background: typeColors[job.type]?.bg,
                      color: typeColors[job.type]?.color,
                    }}
                  >
                    {job.type}
                  </span>
                </div>

                <h3 className="job-title">{job.title}</h3>

                <div className="job-meta">
                  <span className="job-meta-item">📍 {job.location}</span>
                  <span className="job-meta-item">💰 {job.salary}</span>
                </div>

                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span className="job-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="job-card-footer">
                  <button className="apply-btn">Apply Now</button>
                  <button className="save-btn">♡ Save</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span>😕</span>
              <p>No jobs match your search. Try different keywords.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Job;