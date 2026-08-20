import React from "react";
import AdvertiseTop from './pages/Advertise-With-Us/components/AdvertiseTop';
import AdvertiseForm from './pages/Advertise-With-Us/components/AdvertiseForm';
import HowWorks from './pages/Advertise-With-Us/components/HowWorks';
import WhyAdvertise from './pages/Advertise-With-Us/components/WhyAdvertise';
import FaqAdvertise from './pages/Advertise-With-Us/components/FaqAdvertise';
import ChatFloatingButton from './pages/ChatFloatingButton/components/ChatFloatingButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function AdvertisePage() {
    return(
        <div> 
            <Navbar />
            <AdvertiseTop />
            <AdvertiseForm />
            <HowWorks />
            <WhyAdvertise />
            <FaqAdvertise />
            <ChatFloatingButton />
            <Footer />
        </div>
    )
};