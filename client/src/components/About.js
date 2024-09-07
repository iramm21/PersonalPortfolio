import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"; // Add more icons as needed
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

function About() {
  return (
    <section className="bg-surface py-16 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-code text-accent mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-textSecondary font-body mb-6">
            I’m a passionate Full-Stack Developer experienced in building
            dynamic web applications. My focus is on modern JavaScript
            frameworks and full-stack technologies.
          </p>
          <p className="text-lg md:text-xl text-textSecondary font-body mb-6">
            I specialize in crafting responsive, scalable, and maintainable
            solutions with a strong balance of both frontend and backend skills.
            My goal is to bring ideas to life with high-performance code.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-background px-6 py-3 rounded-lg font-code shadow-neon hover:bg-neonGreen transition transform hover:-translate-y-1 inline-block"
          >
            Download My Resume
          </a>
        </div>

        {/* Skills Section with Icons */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-code text-textPrimary mb-6">Skills</h3>
          <ul className="grid grid-cols-2 gap-4 text-textSecondary">
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <SiJavascript className="text-2xl text-accent mr-2" />
              JavaScript
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <FaReact className="text-2xl text-accent mr-2" />
              React
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <FaNodeJs className="text-2xl text-accent mr-2" />
              Node.js
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <SiExpress className="text-2xl text-accent mr-2" />
              Express
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <SiMongodb className="text-2xl text-accent mr-2" />
              MongoDB
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <SiTailwindcss className="text-2xl text-accent mr-2" />
              Tailwind CSS
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <FaGitAlt className="text-2xl text-accent mr-2" />
              Git & GitHub
            </li>
            <li className="flex items-center text-lg font-body hover:text-accent transition">
              <span className="text-2xl text-accent mr-2">🔌</span>
              REST APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
