import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatFloatingButton from './pages/ChatFloatingButton/components/ChatFloatingButton';
import ContactHero from './pages/ContactUs-Section/components/ContactHero';
import ContactForm from './pages/ContactUs-Section/components/ContactForm';
import ContactLayout from './components/ContactLayout';
import ContactInfo from './pages/ContactUs-Section/components/ContactInfo';
import ServiceArea from './pages/ContactUs-Section/components/ServiceArea';
import WhyContactUs from './pages/ContactUs-Section/components/WhyContactUs';
import ContactMap from './pages/ContactUs-Section/components/ContactMap';
import ContactFAQ from './pages/ContactUs-Section/components/ContactFAQ';
export default function ContactUsPage() {

    return (
        <div>
            <Navbar />
            <ContactHero />
            <ContactLayout />
      
            <ServiceArea />
            <WhyContactUs />
            <ContactMap />
            <ContactFAQ />
                <ChatFloatingButton /> 
                    <Footer />
                        </div>
    )
};