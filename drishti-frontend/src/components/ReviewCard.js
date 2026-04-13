import React from 'react';

// Notice we destructure the individual props here, NOT ({ review })
const ReviewCard = ({ name, role, rating, comment }) => {
  // We add a safety check: if rating is missing, default to 0
  const stars = Array(5).fill(0);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {stars.map((_, i) => (
          <span key={i} className={`text-lg ${i < (rating || 0) ? "text-yellow-400" : "text-gray-200"}`}>
            ★
          </span>
        ))}
      </div>

      <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow">
        "{comment}"
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
          {name ? name.charAt(0) : "?"}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{name}</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;