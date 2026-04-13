import React, { useState } from 'react';

const AdminDashboard = () => {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState("REQUESTS");
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [chosenDate, setChosenDate] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const [newCourse, setNewCourse] = useState({
    title: '',
    professor: '',
    type: 'General',
    description: '',
    videoUrl: '',
    topics: []
  });

  // --- DUMMY DATA ---
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, school: "St. Thomas HSS", course: "Advanced Accounting", dates: ["April 20", "April 22", "April 25"], venue: "School Premises" },
    { id: 2, school: "Model Boys School", course: "Digital Banking", dates: ["May 02", "May 05", "May 08"], venue: "College Campus" }
  ]);

  const [existingCourses, setExistingCourses] = useState([
    {
      id: 1,
      title: "Advanced Accounting & Tally",
      professor: "Prof. Sarah Thomas",
      type: "Specialised",
      description: "Master GST and corporate accounting.",
      topics: ["GST", "Tally Prime", "Vouchers"]
    }
  ]);

  // --- HANDLERS ---
  const addTopic = () => {
    if (currentTopic.trim()) {
      setNewCourse({ ...newCourse, topics: [...newCourse.topics, currentTopic] });
      setCurrentTopic("");
    }
  };

  const handleApprove = (schoolName) => {
    if (!chosenDate) return alert("Please select a date first!");
    alert(`APPROVED: Session for ${schoolName} confirmed for ${chosenDate}.`);
    setPendingRequests(pendingRequests.filter(r => r.id !== selectedRequestId));
    setSelectedRequestId(null);
    setChosenDate("");
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    setExistingCourses([...existingCourses, { ...newCourse, id: Date.now() }]);
    alert(`Course "${newCourse.title}" Published Successfully!`);
    setShowAddModal(false);
    setNewCourse({ title: '', professor: '', type: 'General', description: '', videoUrl: '', topics: [] });
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">

      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-slate-900 flex flex-col p-8 shadow-2xl z-50">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">D</div>
          <div>
            <span className="text-xl font-black text-white uppercase tracking-tighter block leading-none">Drishti</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Management</span>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          <button
            onClick={() => setActiveTab("REQUESTS")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === "REQUESTS" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "text-slate-400 hover:bg-slate-800"}`}
          >
            <span>📅</span> School Requests
          </button>
          <button
            onClick={() => setActiveTab("COURSES")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === "COURSES" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "text-slate-400 hover:bg-slate-800"}`}
          >
            <span>🎓</span> Manage Courses
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-800">
          <button className="w-full text-left px-5 text-slate-500 font-bold text-sm hover:text-red-400 transition-colors">🚪 Logout</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto p-12">

        {activeTab === "REQUESTS" ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-4xl font-black text-slate-900 uppercase mb-10 tracking-tight">Institutional Stream</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Total Certificates</p>
                  <h3 className="text-4xl font-black text-blue-700">1,284</h3>
                </div>

                {selectedRequestId && (
                  <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white animate-in zoom-in">
                    <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest mb-2">Reviewing Request</p>
                    <h4 className="font-bold text-lg mb-6 leading-tight">{pendingRequests.find(r => r.id === selectedRequestId)?.school}</h4>
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-500 block mb-1">Selected Date</label>
                        <p className="text-xl font-black text-blue-400">{chosenDate || "Pick below..."}</p>
                      </div>
                      <button onClick={() => handleApprove(pendingRequests.find(r => r.id === selectedRequestId).school)} className="w-full bg-blue-600 py-4 rounded-2xl font-black uppercase text-xs">Confirm & Approve</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 font-black text-[10px] uppercase text-slate-400">
                      <tr><th className="p-6">Institution</th><th className="p-6">Date Options</th><th className="p-6">Instructions</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {pendingRequests.map(req => (
                        <tr key={req.id} className={`transition-all ${selectedRequestId === req.id ? "bg-blue-50/40" : "hover:bg-slate-50/30"}`}>
                          <td className="p-6 w-1/3">
                            <p className="font-bold text-slate-900">{req.school}</p>
                            <p className="text-[10px] text-blue-600 font-black uppercase mt-1">{req.course}</p>
                          </td>
                          <td className="p-6">
                            <div className="flex flex-wrap gap-2">
                              {req.dates.map(d => (
                                <button key={d} onClick={() => {setSelectedRequestId(req.id); setChosenDate(d);}} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${chosenDate === d && selectedRequestId === req.id ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white border-slate-100 text-slate-400"}`}>{d}</button>
                              ))}
                            </div>
                          </td>
                          <td className="p-6">
                            <textarea placeholder="Message..." className="w-full bg-slate-50 border border-slate-100 p-3 rounded-xl outline-none text-sm resize-none" rows="1" value={selectedRequestId === req.id ? adminMessage : ""} onChange={(e) => setAdminMessage(e.target.value)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in slide-in-from-right-8 duration-500">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-black text-slate-900 uppercase">Course Catalog</h1>
              <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs shadow-xl shadow-blue-100 hover:bg-blue-700">+ Create New Course</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {existingCourses.map(course => (
                 <div key={course.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex justify-between items-center">
                    <div>
                      <p className="font-black text-slate-900 text-lg">{course.title}</p>
                      <p className="text-xs text-slate-400 font-bold uppercase mt-1">Lead: {course.professor}</p>
                    </div>
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase ${course.type === "Specialised" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}`}>{course.type}</span>
                 </div>
               ))}
            </div>
          </div>
        )}
      </main>

      {/* --- ADD COURSE MODAL --- */}
      {showAddModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-md bg-slate-900/60 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl my-auto animate-in zoom-in duration-300 overflow-hidden">
            <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
              <h2 className="text-xl font-black uppercase">Create New Course</h2>
              <button onClick={() => setShowAddModal(false)} className="text-2xl hover:rotate-90 transition-transform">✕</button>
            </div>

            <form onSubmit={handleAddCourse} className="p-10 grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest ml-2">Course Title</label>
                <input required className="w-full bg-slate-50 p-4 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 font-bold" onChange={e => setNewCourse({...newCourse, title: e.target.value})} />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest ml-2">Lead Instructor</label>
                <input required className="w-full bg-slate-50 p-4 rounded-2xl outline-none font-bold" onChange={e => setNewCourse({...newCourse, professor: e.target.value})} />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest ml-2">Video URL</label>
                <input className="w-full bg-slate-50 p-4 rounded-2xl outline-none font-bold" placeholder="Sample Lesson Link" onChange={e => setNewCourse({...newCourse, videoUrl: e.target.value})} />
              </div>

              <div className="col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest ml-2">Description</label>
                <textarea rows="2" className="w-full bg-slate-50 p-4 rounded-2xl outline-none resize-none font-medium" placeholder="Course Marketing Text" onChange={e => setNewCourse({...newCourse, description: e.target.value})} />
              </div>

              <div className="col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest ml-2">Topics (Press Add Button)</label>
                <div className="flex gap-2 mb-3">
                  <input value={currentTopic} className="flex-1 bg-slate-50 p-4 rounded-2xl outline-none font-bold" placeholder="e.g. GST Filing" onChange={e => setCurrentTopic(e.target.value)} />
                  <button type="button" onClick={addTopic} className="bg-slate-200 px-6 rounded-2xl font-black text-slate-600 hover:bg-blue-600 hover:text-white transition">+</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {newCourse.topics.map((t, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase border border-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              <button type="submit" className="col-span-2 bg-blue-600 text-white py-5 rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Publish Course to Portal</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;