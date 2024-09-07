import React, { useState, useEffect } from "react";
import { getTestimonials } from "../api";
import { FaQuoteLeft } from "react-icons/fa"; // Import a quote icon

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials when component mounts
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-surface py-16 text-center">
      <h2 className="text-4xl font-code text-accent mb-12">What People Say</h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-background p-6 rounded-lg shadow-lg hover:shadow-neon transition duration-300 ease-in-out"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 left-4 text-accent text-2xl" />

              {/* Client Image (if available) */}
              {testimonial.client_image && (
                <img
                  src={testimonial.client_image}
                  alt={`${testimonial.client_name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              )}

              {/* Client Name */}
              <h3 className="text-2xl font-code text-textPrimary mb-2">
                {testimonial.client_name}
              </h3>

              {/* Client Position */}
              {testimonial.client_position && (
                <p className="text-textSecondary text-sm mb-4">
                  {testimonial.client_position}
                </p>
              )}

              {/* Feedback */}
              <p className="text-textSecondary text-base italic">
                "{testimonial.feedback}"
              </p>

              {/* Optional Star Rating */}
              {testimonial.rating && (
                <div className="mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-neonGreen">
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-textSecondary">No testimonials available.</p>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
