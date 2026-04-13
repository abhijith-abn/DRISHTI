import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import BookingModal from '../components/InstitutionBookingModal';
import StudentBookingModal from '../components/StudentBookingModal';

const CourseSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [demoRole, setDemoRole] = useState("SCHOOL");

  const handleOpenModal = (title) => {
    setSelectedCourse(title);
    setIsModalOpen(true);
  };

  const handleOpenStudentModal = (title) => {
    setSelectedCourse(title);
    setIsStudentModalOpen(true);
  };

  const generalCourses = [
    { title: "Introduction to Commerce", professor: "Dr. Rajesh Kumar", topics: ["Trade & Aids", "Business Org", "E-Commerce"], nextDate: "Sat, April 18th", type: "General" },
    { title: "Business Studies", professor: "Prof. Anil P.", topics: ["Management", "Planning", "Marketing"], nextDate: "Sat, May 2nd", type: "General" }
  ];

  const specialisedCourses = [
    { title: "Advanced Accounting & Tally", professor: "Prof. Sarah Thomas", topics: ["GST Filing", "Voucher Entry", "Audit Prep"], nextDate: "Sat, April 25th", type: "Specialised" },
    { title: "Stock Market Essentials", professor: "Dr. Lakshmi S.", topics: ["Trading", "IPO", "Risk Management"], nextDate: "Sat, May 9th", type: "Specialised" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">

        {/* --- DEMO SWITCHER --- */}
        <div className="mb-10 p-6 bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-800 tracking-tight">Presentation Mode</h3>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Currently viewing as: {demoRole}</p>
          </div>
          <button
            onClick={() => setDemoRole(demoRole === "SCHOOL" ? "STUDENT" : "SCHOOL")}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
          >
            Switch to {demoRole === "SCHOOL" ? "Student View" : "School Admin View"}
          </button>
        </div>

        {/* --- GENERAL COURSES --- */}
        <div className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-8 border-blue-600 pl-4 uppercase tracking-tighter">
            General Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {generalCourses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                userRole={demoRole}
                onBookClick={() => handleOpenModal(course.title)}
                onEnrollClick={() => handleOpenStudentModal(course.title)} // Added this
              />
            ))}
          </div>
        </div>

        {/* --- SPECIALISED COURSES --- */}
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-8 border-[#c2185b] pl-4 uppercase tracking-tighter">
            Specialised Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {specialisedCourses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                userRole={demoRole}
                onBookClick={() => handleOpenModal(course.title)}
                onEnrollClick={() => handleOpenStudentModal(course.title)} // Added this
              />
            ))}
          </div>
        </div>
      </div>

      {/* Institutional Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={selectedCourse}
      />

      {/* Student Booking Modal */}
      <StudentBookingModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        courseTitle={selectedCourse}
      />
    </div>
  );
};

export default CourseSelection;