import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';


const navigationLinks = [
  { name: 'Home', to: '/' },
  { name: 'Features', to: '/features' },
  { name: 'Reminders', to: '/reminders' },
  { name: 'About', to: '/about' },
];



function Navbar(props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Job Tracker Logo" className="h-10" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-10 text-md font-medium text-gray-700">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `${isActive ? 'text-indigo-600 font-semibold' : ''} hover:text-indigo-500 transition`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Login/Logout Button */}
          <div className="hidden lg:block">
            <Link
              to="/login"
              className="block px-3 py-2 text-base font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Log In &rarr;
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="lg:hidden bg-white shadow">
          <div className="space-y-1 px-4 pt-4 pb-3">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100`
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="mt-2 border-t border-gray-200 pt-2">
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-semibold text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Log In &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;