import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Models from './components/Models';
import Shows from './components/Shows';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Shows />
      <Testimonials />
      <Gallery />
      <Partners />
      <Models />
      <Contact />
      <Footer />
    </div>
  );
}