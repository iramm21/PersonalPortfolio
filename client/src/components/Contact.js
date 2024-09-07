import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Validation schema for form fields
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  // State to manage success message visibility
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/contact",
        values
      );

      if (response.data.success) {
        // Show success message and hide it after 5 seconds
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage("");
        resetForm(); // Reset form
        setTimeout(() => setSuccessMessage(""), 5000); // Clear after 5 seconds
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Error sending email. Please try again later.");
    }

    setSubmitting(false); // Stop the loading state
  };

  return (
    <section className="bg-surface py-16 text-center">
      <h2 className="text-4xl font-code text-accent mb-8">Get In Touch</h2>

      <div className="max-w-2xl mx-auto">
        {/* Display success or error message */}
        {successMessage && (
          <div className="bg-green-500 text-background p-4 rounded-lg mb-6">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-500 text-background p-4 rounded-lg mb-6">
            {errorMessage}
          </div>
        )}

        {/* Contact Form */}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-background p-6 rounded-lg shadow-lg">
              {/* Name Field */}
              <div className="mb-4">
                <label
                  className="block text-textPrimary font-body mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-surface text-textPrimary rounded-lg outline-none border-none focus:ring-2 focus:ring-accent"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  className="block text-textPrimary font-body mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-surface text-textPrimary rounded-lg outline-none border-none focus:ring-2 focus:ring-accent"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label
                  className="block text-textPrimary font-body mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="w-full p-3 bg-surface text-textPrimary rounded-lg outline-none border-none focus:ring-2 focus:ring-accent h-32"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-accent text-background px-6 py-3 rounded-lg font-code shadow-neon hover:bg-neonGreen transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
