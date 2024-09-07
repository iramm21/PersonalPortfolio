import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-textSecondary text-xl">Loading project details...</p>
      </div>
    );
  }

  return (
    <section className="bg-surface min-h-screen py-16 flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero Image */}
        {project.images && project.images.length > 0 && (
          <div className="relative mb-12">
            <img
              src={project.images[0]} // Use the first image as the hero image
              alt="Hero"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
          </div>
        )}

        {/* Project Title */}
        <h1 className="text-5xl md:text-6xl font-code text-accent mb-8 text-center">
          {project.title}
        </h1>

        {/* Main Description */}
        <p className="text-textSecondary text-lg mb-6 max-w-4xl mx-auto text-center">
          {project.description}
        </p>

        {/* Long Description */}
        {project.long_description && (
          <p className="text-textSecondary text-lg mb-12 max-w-4xl mx-auto text-center">
            {project.long_description}
          </p>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {project.images.slice(1).map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Project image ${idx + 2}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            ))}
          </div>
        )}

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h3 className="text-xl text-accent font-code mb-4">Categories</h3>
            <p className="text-textSecondary text-lg">
              {project.categories && project.categories.length > 0
                ? project.categories.map((cat) => (
                    <span
                      key={cat.id}
                      className="inline-block bg-accent text-background px-3 py-1 rounded-md mr-2 mb-2"
                    >
                      {cat.name}
                    </span>
                  ))
                : "None"}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl text-accent font-code mb-4">Technologies</h3>
            <p className="text-textSecondary text-lg">
              {project.technologies && project.technologies.join(", ")}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-accent text-background px-6 py-3 rounded-lg shadow-neon hover:bg-neonGreen transition-transform transform hover:-translate-y-1"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          )}
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-accent text-background px-6 py-3 rounded-lg shadow-neon hover:bg-neonGreen transition-transform transform hover:-translate-y-1"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
