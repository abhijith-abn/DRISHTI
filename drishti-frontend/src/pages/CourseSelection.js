import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import BookingModal from '../components/InstitutionBookingModal';
import StudentBookingModal from '../components/StudentBookingModal';

const CourseSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [demoRole, setDemoRole] = useState("SCHOOL");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen bg-[#032b7a] pb-24 text-white font-sans relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="bg-shape shape1 opacity-20"></div>
        <div className="bg-shape shape2 opacity-10"></div>
        <div className="bg-shape shape3 opacity-20"></div>
        <div className="gold-line gold-line1 opacity-30"></div>
        <div className="gold-line gold-line2 opacity-30"></div>
        {/* Extra Radial Glows for smoothness */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 px-6 relative z-10">

        {/* --- PRESENTATION SWITCHER --- */}
        <div className="mb-14 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-xl flex items-center justify-between animate-on-scroll shadow-2xl">
          <div>
            <h3 className="font-black text-[#f4b41a] tracking-tight uppercase text-sm">Presentation Mode</h3>
            <p className="text-[10px] text-blue-200/60 uppercase font-black tracking-[0.2em] mt-1">Role: {demoRole}</p>
          </div>
          <button
            onClick={() => setDemoRole(demoRole === "SCHOOL" ? "STUDENT" : "SCHOOL")}
            className="bg-[#f4b41a] text-[#032b7a] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95"
          >
            Switch to {demoRole === "SCHOOL" ? "Student" : "School Admin"}
          </button>
        </div>

        {/* --- GENERAL COURSES --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 animate-on-scroll">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              General <span className="text-[#f4b41a]">Modules</span>
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#f4b41a] to-transparent rounded-full opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {generalCourses.map((course, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* DARK GLASS CARD WRAPPER */}
                <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-2 transition-all duration-700 hover:bg-white/[0.08] hover:border-[#f4b41a]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {/* Inner Glow Hover Effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#f4b41a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <CourseCard
                    course={course}
                    userRole={demoRole}
                    onBookClick={() => handleOpenModal(course.title)}
                    onEnrollClick={() => handleOpenStudentModal(course.title)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SPECIALISED COURSES --- */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-10 animate-on-scroll">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Specialised <span className="text-pink-400">Tracks</span>
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {specialisedCourses.map((course, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* DARK GLASS CARD WRAPPER (Pink variant) */}
                <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-2 transition-all duration-700 hover:bg-white/[0.08] hover:border-pink-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {/* Inner Glow Hover Effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <CourseCard
                    course={course}
                    userRole={demoRole}
                    onBookClick={() => handleOpenModal(course.title)}
                    onEnrollClick={() => handleOpenStudentModal(course.title)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseTitle={selectedCourse} />
      <StudentBookingModal isOpen={isStudentModalOpen} onClose={() => setIsStudentModalOpen(false)} courseTitle={selectedCourse} />
    </div>
  );
};

export default CourseSelection;