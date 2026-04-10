import React from 'react';

const BookingModal = ({ isOpen, onClose, courseTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <div className="bg-[#c2185b] p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-2xl hover:scale-110 transition">✕</button>
          <h2 className="text-2xl font-black">Request a Batch</h2>
          <p className="text-pink-100 text-sm opacity-80 mt-1">{courseTitle}</p>
        </div>

        {/* Form Body */}
        <div className="p-8 space-y-5">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Estimated Student Count</label>
            <input type="number" placeholder="e.g. 45" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:border-[#c2185b]" />
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Preferred Dates (Provide 3 Options)</label>
            <div className="grid grid-cols-1 gap-3 mt-1">
              <input type="date" className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
              <input type="date" className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
              <input type="date" className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Class Mode</label>
            <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl text-sm outline-none">
              <option>Offline (At School Campus)</option>
              <option>Exclusive Online (For our School Only)</option>
            </select>
          </div>

          <button
            className="w-full bg-[#c2185b] text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-pink-200 transition-all active:scale-95"
            onClick={() => { alert("Request Sent! (Mockup)"); onClose(); }}
          >
            SUBMIT REQUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;