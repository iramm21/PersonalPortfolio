import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
