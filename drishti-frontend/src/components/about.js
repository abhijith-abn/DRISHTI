import React, { useEffect } from 'react';
import './about.css';
import Navbar from '../components/Navbar';
// 1. Import your saved image file
import heroImage from './sasint-students-1807505.jpg'; 

const About = () => {

  // Logic for Scroll-Triggered Animations (standard Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup observer on unmount
    return () => animatedElements.forEach(el => observer.unobserve(el));
  }, []);

  // Data for the Subject Grid
  const sessions = [
    { title: "Financial Literacy", icon: "📊", desc: "Foundational knowledge on finance basics, and account management." },
    { title: "Introduction to Commerce", icon: "📈", desc: "Understanding practical finance and investing basics." },
    { title: "Investment & Savings", icon: "💰", desc: "Personal finance, budgeting, and savings strategies." },
    { title: "Scholarships", icon: "🎓", desc: "Guidance on various student aid and academic support pathways." },
    { title: "Consumer Rights", icon: "⚖️", desc: "Awareness of rights, ethics, and responsible leadership." },
    { title: "Cyber Safety", icon: "🔒", desc: "Knowledge on safe digital finance and information security." }
  ];

  return (
    <div className="about-drishti-wrapper">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="about-hero animate-on-scroll fade-in-down">
        {/* Background Waves with Gold Dust */}
        <div className="bg-waves"></div>
        <div className="gold-dust"></div>

        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">See Beyond.<br />Learn <span className="gold-text">Beyond.</span><br />Lead <span className="gold-text">Beyond.</span></h1>
            <p className="hero-p">
              Drishti is a student-led initiative committed to empowering individuals through 
              practical knowledge in commerce, finance, and life skills. Bridge the gap between 
              academic learning and real-world decision making.
            </p>
            <div className="hero-buttons">
              <button className="btn-explore">Explore Programs</button>
              <button className="btn-learn">Learn More</button>
            </div>
          </div>

          <div className="hero-right">
            {/* The Image from the design with correct variable */}
            <div className="hero-image-container">
              <img src={heroImage} alt="Students Learning" className="hero-main-img" />
              
              {/* Floating Stat Card - Glassmorphism */}
              <div className="floating-card glass">
                <p className="card-val">10+ <span className="card-unit">Topics</span></p>
                <p className="card-desc">Interactive Sessions</p>
                <div className="card-badge">✨ Future-Ready Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY / INTRO */}
      <section className="about-intro animate-on-scroll slide-up">
        <div className="container">
          <div className="intro-text">
            <h2>About Drishti</h2>
            <p>
              At Drishti, we believe the right perspective can transform opportunities. Through 
              knowledge, discussion, and mentorship, we nurture financially aware, responsible, 
              and future-ready individuals.
            </p>
            <button className="btn-read-more">Read More</button>
          </div>

          <div className="core-values">
            <div className="value-card glass">
              <div className="icon-wrap bg-gold-fade">💡</div>
              <div>
                <h3>Practical Learning</h3>
                <p>Knowledge that solves problems and prepares students for future challenges.</p>
              </div>
            </div>
            <div className="value-card glass">
              <div className="icon-wrap bg-blue-fade">🤝</div>
              <div>
                <h3>Real-World Relevance</h3>
                <p>Bridging the gap between theory and practical career pathways.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SESSIONS GRID */}
      <section className="sessions-section animate-on-scroll fade-in">
        <h2 className="section-label">Sessions That Shape Smarter Futures</h2>
        <div className="grid-container">
          {sessions.map((session, index) => (
            <div key={index} className="session-card glass hover-float" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <span className="s-icon">{session.icon}</span>
                <h4>{session.title}</h4>
              </div>
              <p>{session.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISION / MISSION FOOTER */}
      <section className="vision-mission-footer animate-on-scroll zoom-in">
        {/* Navy/Gold Wave Background */}
        <div className="dark-wave-bg"></div>

        <div className="footer-content">
          <div className="left-vision glass">
            <h3 className="section-sub-label gold-text">Vision</h3>
            <p>
              To create a financially aware, empowered generation equipped with practical 
              knowledge, critical thinking, and leadership skills to navigate the evolving 
              world with confidence.
            </p>
          </div>

          <div className="right-mission glass">
            <h3 className="section-sub-label gold-text">Mission</h3>
            <ul>
              <li><span className="b-mark">✔️</span> Deliver accessible sessions on commerce, finance, & life skills.</li>
              <li><span className="b-mark">✔️</span> Promoting financial literacy, responsible decision making, & wealth awareness.</li>
              <li><span className="b-mark">✔️</span> Guidance on scholarships, career pathways, & academic opportunities.</li>
              <li><span className="b-mark">✔️</span> Bridgingclassroom learning and real-world application.</li>
            </ul>
          </div>
        </div>

        <div className="join-movement">
          <h3>Be a part of a future-ready learning movement.</h3>
          <p>Explore meaningful sessions, practical insights, and guidance that matters.</p>
        </div>
      </section>
    </div>
  );
};

export default About;