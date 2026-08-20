import React from "react";
import HeroSection from "./pages/House/components/HeroSection";
import Description from "./pages/House/components/Description";
import WhyToChoose from "./pages/House/components/WhyToChoose";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function HousePage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Description />
            <WhyToChoose />
            <Footer />
        </div>
    )
}
