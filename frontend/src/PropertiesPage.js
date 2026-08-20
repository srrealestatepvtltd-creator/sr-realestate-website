import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatFloatingButton from './pages/ChatFloatingButton/components/ChatFloatingButton';
import PropertiesList from './pages/Properties-Section/components/PropertiesList';

export default function PropertiesPage() {
    return (
        <div>
            <Navbar />
           
            <PropertiesList />
        
            <ChatFloatingButton />
            <Footer />
        </div>
    )
}
