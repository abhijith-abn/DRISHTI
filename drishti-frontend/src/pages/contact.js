import React from "react";
import "./contact.css";
import Navbar from "../components/Navbar";
import girlImg from "../assets/girl-study.png.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />

      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>
      <div className="gold-line gold-line1"></div>
      <div className="gold-line gold-line2"></div>

      <main className="contact-main">
        {/* Top Section */}
        <section className="top-grid">
          {/* Left Side */}
          <div className="left-col fade-up">
            <h1 className="main-title">
              Contact <span>Us</span>
            </h1>
            <div className="title-line"></div>
            <p className="main-subtitle">
              We’d love to hear from you. Reach out for inquiries, suggestions,
              or collaborations.
            </p>

            <div className="touch-card">
              <h2>
                Get In <span>Touch</span>
              </h2>

              <div className="touch-item">
                <div className="icon-circle">✉️</div>
                <div>
                  <p className="label">Email</p>
                  <p className="value">contact@drishti.org.in</p>
                </div>
              </div>

              <div className="touch-item">
                <div className="icon-circle">📞</div>
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+91 98765 43210</p>
                </div>
              </div>

              <div className="touch-item">
                <div className="icon-circle">📍</div>
                <div>
                  <p className="label">Address</p>
                  <p className="value">
                    Amrita Vishwa Vidyapeetham, Amritapuri
                  </p>
                </div>
              </div>

              <div className="social-icons">
                <span>📸</span>
                <span>in</span>
                <span>🐦</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-col fade-up delay-1">
            <div className="girl-card float-card">
              <img src={girlImg} alt="Girl" className="girl-img" />

              <div className="floating bubble-blue">📞</div>
              <div className="floating bubble-gold">✉️</div>
              <div className="floating bubble-chat">💬</div>
            </div>

            <div className="form-card">
              <h2>
                Send Us A <span>Message</span>
              </h2>

              <form>
                <div className="input-box">
                  <span>👤</span>
                  <input type="text" placeholder="Name" />
                </div>

                <div className="input-box">
                  <span>✉️</span>
                  <input type="email" placeholder="Email" />
                </div>

                <div className="input-box">
                  <span>📞</span>
                  <input type="text" placeholder="Phone" />
                </div>

                <div className="input-box textarea-box">
                  <span>💬</span>
                  <textarea placeholder="Message"></textarea>
                </div>

                <button className="send-btn" type="submit">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="bottom-grid">
          <div className="visit-block fade-up delay-2">
            <h3 className="section-title">
              Visit Us <span></span>
            </h3>

            <div className="map-card">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6683899864074!2d76.48924447426879!3d9.09394228797056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0602e7b4a2049d%3A0x3af3246b5138db0f!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Amritapuri!5e0!3m2!1sen!2sin!4v1775927294381!5m2!1sen!2sin"
                  width="100%"
                  height="230"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="map-iframe"
                  title="Drishti Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="map-tag">
                  <div className="map-pin">📍</div>
                  <div>
                    <h4>Drishti’s Location</h4>
                    <p>Amrita Vishwa Vidyapeetham,</p>
                    <p>Amritapuri</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Amrita Vishwa Vidyapeetham Amritapuri"
                target="_blank"
                rel="noreferrer"
                className="map-link-text"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="connect-card fade-up delay-3">
            <div className="connect-glow"></div>

            <div className="connect-head">
              <div className="connect-icon pulse-icon">🤝</div>
              <h3>Let’s Connect</h3>
            </div>

            <p>
              We’re always happy to hear from students, learners, and
              collaborators.
            </p>

            <ul>
              <li>
                <span className="tick">✓</span> Quick responses
              </li>
              <li>
                <span className="tick">✓</span> Open for collaborations
              </li>
              <li>
                <span className="tick">✓</span> Student-friendly support
              </li>
            </ul>

            
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;