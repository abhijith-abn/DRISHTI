import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const LandingPage = () => {
  // Dummy data for owners approval
  const dummyReviews = [
    {
      id: 1,
      name: "Abhijith S. Nair",
      role: "Principal, St. Mary's School",
      rating: 5,
      comment: "The offline session conducted at our premises was excellent. Our students gained real insights into the management world."
    },
    {
      id: 2,
      name: "Meera Krishnan",
      role: "12th Commerce Student",
      rating: 4,
      comment: "I joined the Saturday online batch. The certificate I received helped me during my college interview!"
    },
    {
      id: 3,
      name: "George Kutty",
      role: "School Administrator",
      rating: 5,
      comment: "Seamless booking process. We selected our preferred dates and the college coordinated perfectly for the campus visit."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 pb-20">
        {/* Left Side: Text & Search */}
        <div className="space-y-10 animate-fade-in">
          <h1 className="text-7xl font-extrabold text-gray-900 leading-[1.1]">
            You learn <br /> today & <span className="text-blue-700">earn</span> <br /> tomorrow.
          </h1>

          <div className="relative max-w-md group">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search your course"
              className="w-full py-5 pl-14 pr-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all shadow-sm"
            />
          </div>

          <p className="text-gray-500 text-lg">
            Are you already member of colas? <Link to="/login" className="underline font-bold text-black hover:text-blue-700 transition">Log in</Link>
          </p>
        </div>

        {/* Right Side: Visual Collage */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[550px]">
          <div className="bg-yellow-400 rounded-full scale-90"></div>
          <div className="bg-pink-100 rounded-2xl"></div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400" className="object-cover h-full w-full" alt="Commerce"/></div>
          <div className="col-span-2 bg-blue-50 rounded-2xl overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600" className="object-cover h-full w-full group-hover:scale-105 transition duration-500" alt="Management"/>
            <div className="absolute top-4 left-4 bg-yellow-300 px-4 py-1 font-bold -rotate-2">COMMERCE</div>
          </div>
          <div className="bg-red-500 rounded-full scale-75"></div>
          <div className="bg-cyan-400 rounded-full scale-95"></div>
          <div className="bg-orange-50 rounded-br-[80px] rounded-tl-2xl"></div>
          <div className="bg-gray-800 rounded-2xl overflow-hidden relative shadow-2xl">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400" className="object-cover h-full w-full opacity-70" alt="Accounting"/>
            <div className="absolute bottom-4 left-4 text-white text-xs font-black uppercase tracking-[0.2em]">Finance</div>
          </div>
        </div>
      </main>

      {/* Review Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
              What Our Community Says
            </h2>
            <div className="w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dummyReviews.map((rev) => (
              <ReviewCard
                key={rev.id}
                name={rev.name}
                role={rev.role}
                rating={rev.rating}
                comment={rev.comment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <footer className="max-w-6xl mx-auto px-12 py-12 flex flex-wrap justify-between items-center border-t border-gray-100 gap-8">
        <StatItem icon="👥" title="150+ from the world's" sub="best areas" />
        <StatItem icon="📺" title="20+ master lessons" sub="avg per class" />
        <StatItem icon="🕒" title="10 Minutes average" sub="per lesson" />
      </footer>
    </div>
  );
};

const StatItem = ({ icon, title, sub }) => (
  <div className="flex items-center space-x-4">
    <div className="text-3xl grayscale">{icon}</div>
    <div>
      <p className="font-bold text-gray-900">{title}</p>
      <p className="text-sm text-gray-400">{sub}</p>
    </div>
  </div>
);

export default LandingPage;