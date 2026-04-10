//import React, { useState } from 'react';
//import './AuthPage.css'; // See CSS below
//
//const AuthPage = () => {
//  const [isSchoolMode, setIsSchoolMode] = useState(false);
//
//  return (
//    <div className="auth-body flex items-center justify-center min-h-screen bg-gray-100">
//      <div className={`auth-container ${isSchoolMode ? 'right-panel-active' : ''}`}>
//
//        {/* Registration as School/Student Logic will go in these forms */}
//        <div className="form-container student-login-container">
//          <form className="auth-form">
//            <h1 className="text-3xl font-bold mb-6">Student Login</h1>
//            <input type="text" placeholder="Username" className="auth-input" />
//            <input type="password" placeholder="Password" className="auth-input" />
//            <button className="auth-button">LOG IN</button>
//          </form>
//        </div>
//
//        <div className="form-container teacher-login-container">
//          <form className="auth-form">
//            <h1 className="text-3xl font-bold mb-6">Institution Login</h1>
//            <input type="text" placeholder="Username" className="auth-input" />
//            <input type="password" placeholder="Password" className="auth-input" />
//            <button className="auth-button">LOG IN</button>
//          </form>
//        </div>
//
//        {/* The Sliding Overlay from your video */}
//        <div className="overlay-container">
//          <div className="overlay">
//            <div className="overlay-panel overlay-left">
//              <h1 className="text-4xl font-bold">Welcome Back!</h1>
//              <p className="my-6">To keep connected with us please login with your student info</p>
//              <button onClick={() => setIsSchoolMode(false)} className="ghost-button">STUDENT LOGIN</button>
//            </div>
//            <div className="overlay-panel overlay-right">
//              <h1 className="text-4xl font-bold">Hello, Welcome!</h1>
//              <p className="my-6">Are you looking to manage your institution?</p>
//              <button onClick={() => setIsSchoolMode(true)} className="ghost-button">INSTITUTION LOGIN</button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};
//
//export default AuthPage;
import React, { useState } from 'react';
import './AuthPage.css';
import Navbar from '../components/Navbar';
import drishtiLogo from '../components/drishtilogo.png';
import amritaBg from '../components/Amritacollege.jpg';

const AuthPage = () => {
  const [isSchoolMode, setIsSchoolMode] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="auth-page-wrapper" style={{ backgroundImage: `url(${amritaBg})` }}>
      <div className="content-on-top">
        <Navbar />

        <div className="flex justify-center items-center mt-12">
          <div className={`auth-container ${isSchoolMode ? 'right-panel-active' : ''}`}>

            {/* --- STUDENT SIDE --- */}
            <div className="form-container student-login-container">
              <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-3xl font-bold mb-6 text-slate-800">
                    {isRegistering ? "Student Register" : "Student Login"}
                </h1>

                {/* Registration Only Fields */}
                {isRegistering && (
                  <>
                    <input type="text" placeholder="Full Name" className="auth-input" />
                    <input type="email" placeholder="Email Address" className="auth-input" />
                  </>
                )}

                {/* Always show for both Login & Register */}
                <input type="text" placeholder="Username" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />

                <button className="auth-button">
                    {isRegistering ? "SIGN UP" : "LOG IN"}
                </button>

                <p className="mt-6 text-sm text-gray-600">
                  {isRegistering ? "Already have an account?" : "New to Drishti?"}
                  <span
                    className="text-[#c2185b] font-bold cursor-pointer ml-1 hover:underline"
                    onClick={() => setIsRegistering(!isRegistering)}
                  >
                    {isRegistering ? "Login" : "Register here"}
                  </span>
                </p>
              </form>
            </div>

            {/* --- SCHOOL SIDE --- */}
            <div className="form-container teacher-login-container">
              <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-3xl font-bold mb-6 text-slate-800">
                    {isRegistering ? "Institution Register" : "Institution Login"}
                </h1>

                {/* Registration Only Fields */}
                {isRegistering && (
                  <>
                    <input type="text" placeholder="Institution Name" className="auth-input" />
                    <input type="email" placeholder="Official Email" className="auth-input" />
                  </>
                )}

                <input type="text" placeholder="Username (Unique)" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />

                <button className="auth-button">
                    {isRegistering ? "REGISTER INSTITUTION" : "LOG IN"}
                </button>

                <p className="mt-6 text-sm text-gray-600">
                  {isRegistering ? "Back to Login?" : "Register your institution?"}
                  <span
                    className="text-[#c2185b] font-bold cursor-pointer ml-1 hover:underline"
                    onClick={() => setIsRegistering(!isRegistering)}
                  >
                    {isRegistering ? "Login" : "Register"}
                  </span>
                </p>
              </form>
            </div>

            {/* --- SLIDING OVERLAY --- */}
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="text-3xl font-bold">Welcome Back!</h1>
                  <p className="my-6 font-medium">Student Portal</p>
                  <button className="ghost-button" onClick={() => {setIsSchoolMode(false); setIsRegistering(false);}}>
                    SWITCH TO STUDENT
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="text-3xl font-bold">Hello, Welcome!</h1>
                  <button className="ghost-button" onClick={() => {setIsSchoolMode(true); setIsRegistering(false);}}>
                    SWITCH TO INSTITUTION
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