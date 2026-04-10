import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import BookingModal from '../components/BookingModal';

const CourseSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleOpenModal = (title) => {
    setSelectedCourse(title);
    setIsModalOpen(true);
  };

  // 1. DATA FOR GENERAL
  const generalCourse = {
    title: "Introduction to Commerce",
    professor: "Dr. Rajesh Kumar",
    topics: ["Trade & Aids", "Business Org", "E-Commerce"],
    nextDate: "Sat, April 18th",
    type: "General"
  };

  // 2. DATA FOR SPECIALISED
  const specialisedCourse = {
    title: "Advanced Accounting & Tally",
    professor: "Prof. Sarah Thomas",
    topics: ["GST Filing", "Voucher Entry", "Audit Prep"],
    nextDate: "Sat, April 25th",
    type: "Specialised"
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">

        {/* --- SECTION 1: GENERAL --- */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 mb-8 border-l-8 border-blue-600 pl-4 uppercase">
            General Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CourseCard
              course={generalCourse}
              userRole="SCHOOL"
              onBookClick={() => handleOpenModal(generalCourse.title)}
            />
          </div>
        </div>

        {/* --- SECTION 2: SPECIALISED --- */}
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-8 border-l-8 border-[#c2185b] pl-4 uppercase">
            Specialised Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CourseCard
              course={specialisedCourse}
              userRole="SCHOOL"
              onBookClick={() => handleOpenModal(specialisedCourse.title)}
            />
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={selectedCourse}
      />
    </div>
  );
};

export default CourseSelection;