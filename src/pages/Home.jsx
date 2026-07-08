import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Development from "../components/Development";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Development />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
