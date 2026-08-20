import React from "react";
import LandHero from "./pages/Land/components/LandHero";
import LandType from "./pages/Land/components/LandType";
import LandBuyingProcess from "./pages/Land/components/LandBuyingProcess";
import LandBenefits from "./pages/Land/components/LandBenefits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function LandPage() {
    return (
        <div>
            <Navbar />
            <LandHero />
            <LandType />
            <LandBuyingProcess />
            <LandBenefits />
            <Footer />
        </div>
    )
};  