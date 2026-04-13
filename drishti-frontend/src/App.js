import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import CourseSelection from './pages/CourseSelection';
import QuizPage from './pages/QuizPage';
import JoinBatch from './pages/JoinBatch';
import AdminDashboard from './pages/AdminDashboard';
// Note: Ensure the filename on disk is exactly 'about.js' or rename to 'About.js'
import About from './components/about'; 

import Contact from './pages/contact'; // check file case sensitivity
// ... inside routes block ...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/courses" element={<CourseSelection />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/join" element={<JoinBatch />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* MOVED THIS INSIDE ROUTES */}
        <Route path="/about" element={<About />} />
      
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;