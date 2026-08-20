import React from "react";
import Description from "./pages/Apartment/components/Description";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApartmentCTA from "./pages/Apartment/components/ApartmentCTA";
import ApartmentWhyChoose from "./pages/Apartment/components/ApartmentWhyChoose";
export default function ApartmentPage() {
    return (
        <div>
            <Navbar />
             <ApartmentCTA />
            <Description />
            <ApartmentWhyChoose />
            <Footer />
        </div>
    )
};