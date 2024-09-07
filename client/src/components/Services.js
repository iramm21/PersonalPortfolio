import React, { useEffect, useState } from "react";
import { getServices } from "../api";
import * as Icons from "react-icons/fa"; // Import all FontAwesome icons

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-surface py-16 text-center">
      <h2 className="text-4xl font-code text-accent mb-8">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {services.length > 0 ? (
          services.map((service) => {
            const IconComponent = Icons[service.icon]; // Dynamically get the icon component

            return (
              <div
                key={service.id}
                className="relative bg-background p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-neon group"
              >
                {/* Icon with Background Circle */}
                {IconComponent && (
                  <div className="flex justify-center items-center mb-4">
                    <div className="bg-accent rounded-full p-4 transition transform group-hover:scale-110">
                      <IconComponent className="text-background text-4xl" />
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-code text-textPrimary mb-2">
                  {service.name}
                </h3>
                <p className="text-textSecondary mb-4">{service.description}</p>

                {/* Service Categories */}
                <p className="text-sm text-accent mb-4">
                  <strong>Categories: </strong>
                  {service.Categories.map((cat) => cat.name).join(", ")}
                </p>

                {/* Read More or Price (Expand Feature) */}
                <div className="mt-4">
                  <button className="bg-accent text-background px-4 py-2 rounded-md shadow-neon hover:bg-neonGreen transition">
                    Learn More
                  </button>
                </div>

                {/* Hover Animation for More Information */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <p className="text-textPrimary text-lg">
                    More details coming soon...
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-textSecondary">No services available.</p>
        )}
      </div>
    </section>
  );
};

export default Services;
