import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WellnessPage from './components/Wellness';
import EatDrinkPage from './components/EatDrink';
import DestinationPage from './components/Destination';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';

function App() {
  useEffect(() => {
    document.title = "Indigo Chic Villas | Luxury in Antiparos";
    
    // Add typewriter font
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap';
    document.head.appendChild(link);
    
    // Add custom styles for typewriter font
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'American Typewriter';
        src: local('Special Elite'), url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        font-display: swap;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        background-color: #F4F3EB;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F4F3EB]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/eat-drink" element={<EatDrinkPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;