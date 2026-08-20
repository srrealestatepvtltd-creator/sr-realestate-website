import React from 'react';
import HomeAbout from './pages/About-Section/components/HomeAbout';
import CompanyStory from './pages/About-Section/components/CompanyStory';
import WhyChooseUs from './pages/About-Section/components/WhyChooseUs';
import MissionVision from './pages/About-Section/components/MissionVision';
import HowItWorks from './pages/About-Section/components/HowItWorks';
import Faq from "./pages/About-Section/components/Faq";
import ChatFloatingButton from './pages/ChatFloatingButton/components/ChatFloatingButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <HomeAbout />
        <CompanyStory />
        <MissionVision />
        <WhyChooseUs />
        <HowItWorks />
        <Faq />

      <Footer />
            <ChatFloatingButton />
    </div>
  );
}