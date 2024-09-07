import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Use react-router's useLocation to get the current path

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-surface text-textPrimary shadow-md fixed w-full z-20 top-0 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-accent font-code text-3xl lg:text-4xl font-bold hover:text-neonGreen transition duration-300"
            >
              Isaac Ramm
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-accent" : "text-textPrimary"
              } hover:text-accent transition`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive("/projects") ? "text-accent" : "text-textPrimary"
              } hover:text-accent transition`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-accent" : "text-textPrimary"
              } hover:text-accent transition`}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              className="bg-accent text-background px-5 py-2 rounded-md font-code shadow-neon hover:bg-neonGreen hover:text-background transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-textPrimary hover:text-accent focus:outline-none transition"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-surface transition-all duration-500 ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md transition ${
              isActive("/") ? "bg-accent text-background" : "text-textPrimary"
            } hover:bg-accent hover:text-background`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md transition ${
              isActive("/projects")
                ? "bg-accent text-background"
                : "text-textPrimary"
            } hover:bg-accent hover:text-background`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md transition ${
              isActive("/contact")
                ? "bg-accent text-background"
                : "text-textPrimary"
            } hover:bg-accent hover:text-background`}
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-accent text-background hover:bg-neonGreen px-3 py-2 rounded-md transition"
            onClick={() => setIsOpen(false)}
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
