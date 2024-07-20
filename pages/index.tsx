import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import "../app/globals.css";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
