import React from "react";
import Navbar from "./components/Navbar";
import CommercialHero from "./pages/Commercial/components/CommercialHero";
import CommercialLocation from "./pages/Commercial/components/CommercialLocation";
import CommercialPropertyTypes from "./pages/Commercial/components/CommercialPropertyTypes";
import CommercialSEOContent from "./pages/Commercial/components/CommercialSEOContent";
import Footer from "./components/Footer";
export default function CommercialPage() {
    return (
        <div>
            <Navbar />  
            <CommercialHero />
            <CommercialLocation />
            <CommercialPropertyTypes />
            <CommercialSEOContent />
            <Footer />
        </div>
    )
}