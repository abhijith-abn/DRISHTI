import React from 'react';

const BookingModal = ({ isOpen, onClose, courseTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-[#032b7a]/40">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <div className="bg-[#032b7a] p-8 text-white relative">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Institutional Request</h2>
          <p className="text-[#f4b41a] text-sm font-bold uppercase tracking-widest mt-1">Course: {courseTitle}</p>
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/60 hover:text-[#f4b41a] text-2xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="p-10 space-y-8">

          {/* Venue Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-500 ml-2 tracking-widest">Venue Type</label>
              {/* Added text-slate-900 here */}
              <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 ring-[#032b7a]/10 focus:border-[#032b7a] transition-all text-slate-900 font-medium cursor-pointer">
                <option className="text-slate-900">Their Premises (Visit School)</option>
                <option className="text-slate-900">Our Premises (Visit College)</option>
                <option className="text-slate-900">Exclusive Online Session</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-500 ml-2 tracking-widest">Approx Student Count</label>
              {/* Added text-slate-900 here */}
              <input
                type="number"
                placeholder="e.g. 50"
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 ring-[#032b7a]/10 focus:border-[#032b7a] transition-all text-slate-900"
              />
            </div>
          </div>

          {/* Date Options */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase text-slate-500 ml-2 tracking-widest">Provide 3 Preferred Dates</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Added text-slate-900 here */}
              <input type="date" className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none text-sm focus:border-[#032b7a] transition-all text-slate-900" />
              <input type="date" className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none text-sm focus:border-[#032b7a] transition-all text-slate-900" />
              <input type="date" className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none text-sm focus:border-[#032b7a] transition-all text-slate-900" />
            </div>
          </div>

          <button
            onClick={() => { alert("Request Sent to Portal Admin!"); onClose(); }}
            className="w-full bg-[#032b7a] py-5 rounded-2xl text-white font-black uppercase tracking-widest hover:bg-[#f4b41a] hover:text-[#032b7a] hover:shadow-xl hover:shadow-yellow-500/20 transition-all active:scale-95"
          >
            Submit Booking Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;