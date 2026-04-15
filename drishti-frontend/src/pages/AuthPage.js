import React, { useState, useEffect } from 'react';
import './AuthPage.css';
import Navbar from '../components/Navbar';
import amritaBg from '../components/Amritacollege.jpg';

const AuthPage = () => {
  const [isSchoolMode, setIsSchoolMode] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="auth-page-wrapper min-h-screen relative flex flex-col">
      {/* BACKGROUND IMAGE LAYER */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${amritaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* TINT OVERLAY - Lightened so you can actually see the image */}
      <div className="absolute inset-0 bg-[#032b7a]/50 backdrop-blur-[1px] z-1"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 flex justify-center items-center px-4 animate-on-scroll slide-up">
          <div className={`auth-container shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${isSchoolMode ? 'right-panel-active' : ''}`}>

            {/* --- STUDENT SIDE --- */}
            <div className="form-container student-login-container">
              <form className="auth-form bg-[#f8f5ee]" onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-3xl font-black mb-2 text-[#032b7a] uppercase tracking-tighter">
                    {isRegistering ? "Student Register" : "Student Login"}
                </h1>
                <div className="w-16 h-1 bg-[#f4b41a] mb-8 rounded-full"></div>

                {isRegistering && (
                  <>
                    <input type="text" placeholder="Full Name" className="auth-input" />
                    <input type="email" placeholder="Email Address" className="auth-input" />
                  </>
                )}
                <input type="text" placeholder="Username" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />

                <button className="auth-button bg-[#032b7a] text-white hover:scale-105 transition-transform">
                    {isRegistering ? "SIGN UP" : "LOG IN"}
                </button>

                <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-[#032b7a]" onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? "Already have an account? Login" : "New to Drishti? Register here"}
                </p>
              </form>
            </div>

            {/* --- INSTITUTION SIDE --- */}
            <div className="form-container teacher-login-container">
              <form className="auth-form bg-[#f8f5ee]" onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-3xl font-black mb-2 text-[#032b7a] uppercase tracking-tighter">
                    {isRegistering ? "Institution Register" : "Institution Login"}
                </h1>
                <div className="w-16 h-1 bg-[#f4b41a] mb-8 rounded-full"></div>

                {isRegistering && (
                  <>
                    <input type="text" placeholder="Institution Name" className="auth-input" />
                    <input type="email" placeholder="Official Email" className="auth-input" />
                  </>
                )}
                <input type="text" placeholder="Username" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />

                <button className="auth-button bg-[#032b7a] text-white hover:scale-105 transition-transform">
                    {isRegistering ? "REGISTER" : "LOG IN"}
                </button>

                <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-[#032b7a]" onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? "Back to Login" : "Register Institution"}
                </p>
              </form>
            </div>

            {/* --- SLIDING OVERLAY --- */}
            <div className="overlay-container">
              <div className="overlay bg-gradient-to-br from-[#032b7a] via-[#05266e] to-[#032b7a]">
                <div className="overlay-panel overlay-left">
                  <h1 className="text-4xl font-black text-[#f4b41a] uppercase tracking-tighter">Welcome Back!</h1>
                  <p className="my-6 text-sm text-blue-100 font-medium">To keep connected with us please login with your student info</p>
                  <button className="ghost-button" onClick={() => {setIsSchoolMode(false); setIsRegistering(false);}}>
                    STUDENT LOGIN
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="text-4xl font-black text-[#f4b41a] uppercase tracking-tighter">Hello, Welcome!</h1>
                  <p className="my-6 text-sm text-blue-100 font-medium">Are you looking to manage your institution?</p>
                  <button className="ghost-button" onClick={() => {setIsSchoolMode(true); setIsRegistering(false);}}>
                    INSTITUTION LOGIN
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;