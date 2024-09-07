import React, { useEffect, useState } from "react";
import { getFeaturedProjects } from "../api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import GitHub and external link icons

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getFeaturedProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching featured projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-surface py-16 text-center">
      <h2 className="text-4xl font-code text-accent mb-8">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-background p-6 rounded-lg shadow-lg hover:shadow-neon transition duration-300 ease-in-out hover:translate-y-1"
            >
              <h3 className="text-2xl font-code text-textPrimary mb-2">
                {project.title}
              </h3>
              <p className="text-textSecondary mb-4">{project.description}</p>

              {/* Project Categories */}
              <p className="text-sm text-accent mb-2">
                <strong>Categories: </strong>
                {project.categories && project.categories.length > 0
                  ? project.categories.map((cat) => cat.name).join(", ")
                  : "None"}
              </p>

              {/* Technologies Section */}
              <p className="text-sm text-accent mb-4">
                <strong>Technologies: </strong>
                {project.technologies && project.technologies.join(", ")}
              </p>

              {/* Project Links */}
              <div className="flex justify-between mt-4">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-accent text-background px-4 py-2 rounded-md shadow-neon hover:bg-neonGreen transition"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-accent text-background px-4 py-2 rounded-md shadow-neon hover:bg-neonGreen transition"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              </div>

              {/* View Details Button */}
              <div className="mt-4">
                <a
                  href={`/projects/${project.id}`} // Assuming project detail page exists
                  className="block bg-transparent border-2 border-accent text-accent px-4 py-2 rounded-md shadow-neon hover:bg-accent hover:text-background transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-textSecondary">No featured projects available.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
