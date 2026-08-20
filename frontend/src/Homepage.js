import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counter from './components/Counter';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Properties from './components/Properties';
import ChatFloatingButton from './pages/ChatFloatingButton/components/ChatFloatingButton';
export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />  
        <About />
         <Properties />
        <Counter />
       
        <FAQ /> 
        <Footer />
      <ChatFloatingButton />
    </div>
  );
}