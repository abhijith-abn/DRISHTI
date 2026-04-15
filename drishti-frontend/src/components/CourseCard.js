import React from 'react';

const CourseCard = ({ course, userRole, onBookClick, onEnrollClick }) => {
  return (
    /* We removed bg-white and border-gray-100 to let the wrapper's glass effect show through */
    <div className="bg-transparent overflow-hidden max-w-sm transition-all duration-300">

      {/* Top Image Section - Increased rounded corners for a premium feel */}
      <div className="relative h-44 bg-slate-900/50 flex items-center justify-center m-2 rounded-[1.5rem] overflow-hidden border border-white/5">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
        <button className="relative z-10 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#f4b41a] hover:text-[#032b7a] transition-all duration-300">
          ▶ View Sample Video
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-black text-white leading-tight tracking-tight uppercase group-hover:text-[#f4b41a] transition-colors">
            {course.title}
          </h3>
          <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
            course.type === 'Specialised'
              ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
              : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          }`}>
            {course.type}
          </span>
        </div>

        {/* Professor Info - Updated with softer colors */}
        <div className="flex items-center gap-3 my-5">
          <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg">🎓</div>
          <div>
            <p className="text-sm font-bold text-white/90">{course.professor}</p>
            <p className="text-[9px] text-blue-200/50 uppercase font-black tracking-[0.2em]">Lead Instructor</p>
          </div>
        </div>

        {/* Topics Section - Glassy tags */}
        <div className="mb-6">
          <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-3">Syllabus Highlights</p>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, i) => (
              <span key={i} className="text-[10px] bg-white/5 text-blue-100/80 px-3 py-1.5 rounded-lg border border-white/5 font-medium">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Online Session Alert - Using the theme Navy and Gold */}
        <div className="bg-[#032b7a]/50 border border-white/5 p-4 rounded-[1.5rem] mb-6 backdrop-blur-sm">
          <p className="text-[9px] font-black text-[#f4b41a] uppercase tracking-widest">Next Live Intake</p>
          <p className="text-sm font-black text-white">{course.nextDate}</p>
        </div>

        {/* ACTION BUTTONS - Standardized to Drishti Gold/Navy */}
        {userRole === "STUDENT" ? (
          <button
            onClick={() => onEnrollClick(course.title)}
            className="w-full bg-[#f4b41a] text-[#032b7a] py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-900/20 active:scale-95 text-xs"
          >
            Book Online Seat
          </button>
        ) : (
          <button
            onClick={onBookClick}
            className="w-full bg-white text-[#032b7a] py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#f4b41a] transition-all shadow-xl active:scale-95 text-xs"
          >
            Request Institutional Visit
          </button>
        )}
      </div>
    </div>
  )};

export default CourseCard;