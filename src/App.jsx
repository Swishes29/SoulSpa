import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/MapSection';
import BookingForm from './components/BookingForm';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <BookingForm />
    </div>
  );
}
