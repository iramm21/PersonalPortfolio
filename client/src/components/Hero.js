import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

function Hero() {
  return (
    <section className="bg-gradient-to-b from-background to-surface h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Subtle animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-neonGreen to-accent opacity-10 animate-pulse" />

      <h1 className="text-5xl md:text-6xl text-textPrimary font-code mb-4 z-10">
        Hi, I'm <span className="text-accent animate-fadeInSlow">Isaac</span>
      </h1>

      {/* Dynamic Tagline */}
      <p className="text-lg md:text-xl text-textSecondary font-body mb-8 max-w-lg z-10">
        A <span className="text-accent">Full-Stack Developer</span> who loves{" "}
        <span className="text-highlight">
          creating sleek and scalable web apps
        </span>
        .
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 animate-fadeInSlow z-10">
        <Link
          to="/projects"
          className="bg-accent text-background px-6 py-3 rounded-lg font-code shadow-neon hover:bg-neonGreen transition transform hover:-translate-y-1"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-code hover:bg-accent hover:text-background transition transform hover:-translate-y-1"
        >
          Get in Touch
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8 z-10">
        <a
          href="https://github.com/iramm21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-neonGreen transition transform hover:scale-110"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://linkedin.com/in/isaacrammz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-neonGreen transition transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://twitter.com/isaacrammz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-neonGreen transition transform hover:scale-110"
        >
          <FaTwitter className="text-3xl" />
        </a>
      </div>

      {/* Optional Short Bio */}
      <p className="text-textSecondary font-body mt-8 max-w-xl mx-auto z-10">
        I specialize in building fast and scalable web applications with modern
        technologies like React, Node.js, and Tailwind CSS. I thrive on
        transforming ideas into elegant solutions!
      </p>
    </section>
  );
}

export default Hero;
