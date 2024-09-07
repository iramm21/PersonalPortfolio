import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing social icons
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Branding and Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <Link
            to="/"
            className="text-accent font-code text-2xl hover:text-neonGreen transition duration-300"
          >
            Isaac Ramm
          </Link>
          <p className="text-textSecondary mt-2">
            © {new Date().getFullYear()} Isaac Ramm. All rights reserved.
          </p>
        </div>

        {/* Right Section: Social Media, Tagline, and Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Tagline */}
          <p className="text-textSecondary text-center md:text-left">
            Let's connect and build something great!
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/iramm21"
              className="text-accent hover:text-neonGreen transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/isaacrammz"
              className="text-accent hover:text-neonGreen transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/isaacrammz"
              className="text-accent hover:text-neonGreen transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-textSecondary hover:text-accent transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-textSecondary hover:text-accent transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-textSecondary hover:text-accent transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-textSecondary hover:text-accent transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
