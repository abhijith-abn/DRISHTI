import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import drishtiLogo from './drishtilogo.png';

const Navbar = () => {
  return (
    // Background set to #0f172a (slate-900)
    // Border set to #facc15 (yellow-400) with low opacity for a clean look
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-between items-center px-12 bg-[#0f172a] border-b border-[#facc15]/30 z-[1000] shadow-xl">

      {/* Brand Section */}
      <Link to="/" className="flex items-center gap-3 group">
        <img
          src={drishtiLogo}
          alt="DRISHTI Logo"
          className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="text-2xl font-black tracking-tighter text-[#facc15] uppercase">
          DRISHTI
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 font-bold items-center uppercase text-[11px] tracking-widest">
        {[
          { name: 'Home', path: '/' },
          { name: 'Course', path: '/courses' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' }
        ].map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `transition-all duration-300 py-1 ${
                isActive
                ? "text-[#facc15] border-b-2 border-[#facc15]"
                : "text-slate-400 hover:text-[#facc15]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Action Button - Yellow Background with Slate Text */}
      <div className="flex items-center">
        <Link
          to="/login"
          className="bg-[#facc15] text-[#0f172a] px-8 py-2.5 rounded-full font-black hover:bg-white transition-all shadow-lg active:scale-95 text-[11px] uppercase tracking-widest"
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;