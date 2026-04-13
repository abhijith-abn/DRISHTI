import React from 'react';

const CourseCard = ({ course, userRole, onBookClick }) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 max-w-sm hover:scale-[1.02] transition-transform duration-300">
      {/* Top Image Section with Sample Video Button */}
      <div className="relative h-44 bg-slate-800 flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500')] bg-cover bg-center"></div>
        <button className="relative z-10 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/30 transition">
          ▶ View Sample Video
        </button>
      </div>

      {/* Course Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{course.title}</h3>
          {/* Inside CourseCard.js, replace the span with this: */}
          <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
            course.type === 'Specialised'
              ? 'bg-pink-100 text-[#c2185b]'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {course.type}
          </span>
        </div>

        {/* Professor Info */}
        <div className="flex items-center gap-3 my-4">
          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-lg">🎓</div>
          <div>
            <p className="text-sm font-bold text-slate-900">{course.professor}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Lead Instructor</p>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Topics Included</p>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, i) => (
              <span key={i} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Online Session Alert */}
        <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl mb-5">
          <p className="text-[10px] font-bold text-blue-600 uppercase">Next Online Session</p>
          <p className="text-sm font-black text-slate-800">{course.nextDate}</p>
        </div>

        {userRole === 'SCHOOL' &&
                      <button
                        onClick={onBookClick} // 5. Trigger the function here
                        className="w-full bg-[#c2185b] text-white py-4 rounded-2xl font-bold ..."
                      >
                        Book Offline Session
                      </button>
                    }

      </div>
    </div>
  )};


export default CourseCard;