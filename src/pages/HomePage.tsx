import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      hi 123
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
