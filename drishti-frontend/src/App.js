import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import it here
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import CourseSelection from './pages/CourseSelection';
import QuizPage from './pages/QuizPage';
import JoinBatch from './pages/JoinBatch';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/contact';

// We create a wrapper to handle the conditional Navbar and Padding
const AppContent = () => {
  const location = useLocation();

  // Logic: Don't show the standard Navbar on the Admin Dashboard
  const isAdminPath = location.pathname === '/admin';

  return (
    <>
      {!isAdminPath && <Navbar />}

      {/* This div is the "Master Fix".
          If it's not the admin page, add top padding (pt-20)
          to account for the fixed navbar height.
      */}
      <div className={!isAdminPath ? "pt-20" : ""}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/courses" element={<CourseSelection />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/join" element={<JoinBatch />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;