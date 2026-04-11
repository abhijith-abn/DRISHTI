import React from 'react';

const BookingModal = ({ isOpen, onClose, courseTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-slate-900/40">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <div className="bg-[#c2185b] p-8 text-white relative">
          <h2 className="text-2xl font-black uppercase tracking-tight">Institutional Request</h2>
          <p className="opacity-80 text-sm font-medium">Course: {courseTitle}</p>
          <button onClick={onClose} className="absolute top-8 right-8 text-2xl hover:scale-110 transition">✕</button>
        </div>

        {/* Form */}
        <div className="p-10 space-y-8">

          {/* Venue Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Venue Type</label>
              <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:ring-2 ring-[#c2185b]/20">
                <option>Their Premises (Visit School)</option>
                <option>Our Premises (Visit College)</option>
                <option>Exclusive Online Session</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Approx Student Count</label>
              <input type="number" placeholder="e.g. 50" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none" />
            </div>
          </div>

          {/* Date Options (The "3 Date" Rule) */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Provide 3 Preferred Dates</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="date" className="bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none text-sm" />
              <input type="date" className="bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none text-sm" />
              <input type="date" className="bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none text-sm" />
            </div>
          </div>

          <button
            onClick={() => { alert("Request Sent to Portal Admin!"); onClose(); }}
            className="w-full bg-[#c2185b] py-5 rounded-2xl text-white font-black uppercase tracking-widest hover:shadow-xl hover:shadow-pink-100 transition-all active:scale-95"
          >
            Submit Booking Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;