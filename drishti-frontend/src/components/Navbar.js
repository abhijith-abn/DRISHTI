import React from 'react';
import { Link } from 'react-router-dom';
import drishtiLogo from './drishtilogo.png';



const Navbar = () => {
  return (
    
    <nav className="flex justify-between items-center px-8 py-3 max-w-7xl mx-auto bg-white sticky top-0 z-50">

      {/* Combined Logo & Text Section */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="relative">
          <img
            src={drishtiLogo}
            alt="DRISHTI Logo"
            className="h-14 w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Brand Text - Matching the style of your logo */}
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
            DRISHTI<span className="text-blue-600"></span>
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 font-semibold text-gray-600 items-center">
        <Link to="/courses" className="hover:text-blue-600 transition-colors">Course</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
       
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-[#c2185b] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200/50 active:scale-95 text-sm"
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;