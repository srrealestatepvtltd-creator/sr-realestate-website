import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counter from './components/Counter';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatFloatingButton from './pages/ChatFloatingButton/components/ChatFloatingButton';
import PropertyGrid from './pages/Properties-Section/components/PropertyGrid';
export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />  
        <About />
         <PropertyGrid />
        <Counter />
       
        <FAQ /> 
        <Footer />
      <ChatFloatingButton />
    </div>
  );
}