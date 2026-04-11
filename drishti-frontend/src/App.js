import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import CourseSelection from './pages/CourseSelection';
import QuizPage from './pages/QuizPage';
import JoinBatch from './pages/JoinBatch';
import AdminDashboard from './pages/AdminDashboard';

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
      </Routes>
    </Router>
  );
}

export default App;