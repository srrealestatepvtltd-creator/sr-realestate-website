import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import PropertiesPage from "./PropertiesPage";
import LandCalculator from "./LandCalculator";
import AdminDashboard from "./AdminDashboard"
import AdvertisePage from "./AdvertisePage";
import HousePage from "./HousePage";
import ApartmentPage from "./ApartmentPage";
import CommericalPage from "./CommericalPage";
import LandPage from "./LandPage";
import RequestQuote from "./RequestQuotePage";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Admin-Dashboard/pages/Register/components/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/best-properties-in-nepal" element={<PropertiesPage />} />
        <Route path="/best-landcalculator" element= {<LandCalculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/advertise-with-us" element={<AdvertisePage />} />
        <Route path="/house" element={<HousePage />} />
        <Route path="/apartment" element={<ApartmentPage />} />
        <Route path="/land" element={<LandPage />} />
        <Route path="/commercial" element={<CommericalPage />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/admin/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />

      </Routes> 
    </BrowserRouter>
  );
}

export default App;