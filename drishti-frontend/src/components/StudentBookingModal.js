import React from 'react';

const StudentBookingModal = ({ isOpen, onClose, courseTitle }) => {
  if (!isOpen) return null;

  // Dummy Saturday Dates for the Demo
  const upcomingSaturdays = [
    { date: "April 11, 2026", status: "12 Seats Left", available: true },
    { date: "April 25, 2026", status: "25 Seats Left", available: true },
    { date: "May 9, 2026", status: "Full", available: false }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-slate-900/40">
      <div className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        <div className="bg-blue-700 p-8 text-white text-center">
          <h2 className="text-xl font-black uppercase tracking-tight">Reserve Your Online Seat</h2>
          <p className="text-sm opacity-80 mt-1">{courseTitle}</p>
        </div>

        <div className="p-8 space-y-4">
          <p className="text-[10px] font-black uppercase text-slate-400 text-center mb-6 tracking-[0.2em]">
            Sessions are held every 2nd & 4th Saturday
          </p>

          {upcomingSaturdays.map((batch, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${
                batch.available
                ? "border-slate-100 hover:border-blue-600 cursor-pointer"
                : "bg-gray-50 border-transparent opacity-50 cursor-not-allowed"
              }`}
            >
              <div>
                <p className="font-bold text-slate-900">{batch.date}</p>
                <p className={`text-[10px] font-bold uppercase ${batch.available ? "text-blue-600" : "text-red-500"}`}>
                  {batch.status}
                </p>
              </div>
              {batch.available && (
                <button
                  onClick={() => { alert("Seat Reserved!"); onClose(); }}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-xs hover:bg-blue-700 hover:text-white transition"
                >
                  Select
                </button>
              )}
            </div>
          ))}

          <button onClick={onClose} className="w-full text-slate-400 text-xs font-bold uppercase mt-4 hover:text-slate-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentBookingModal;