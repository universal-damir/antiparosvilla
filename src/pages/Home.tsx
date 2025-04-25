import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Wellness from '../components/Wellness';
import EatDrink from '../components/EatDrink';
import Destination from '../components/Destination';
import GalleryPreview from '../components/GalleryPreview';
import Amenities from '../components/Amenities';

const RoomsPreview: React.FC = () => {
  return (
    <div>
      <div className="overflow-hidden mb-8" style={{ height: "400px" }}>
        <img
          src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury villa room"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
      </div>
      
      <div className="pt-4">
        <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
          ROOMS
        </p>
        <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
          Your poolside paradise awaits
        </h2>
        <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
          Dip into the pool from your private veranda or swing in your hammock. Check
          out our bohemian-style rooms. A personal space in which to sink back and
          slow down.
        </p>
        <Link
          to="/rooms"
          className="inline-block px-5 py-2 border border-[#3A3532] text-[#3A3532] hover:bg-[#3A3532] hover:text-white transition-colors font-['Roboto'] uppercase"
        >
          Explore Rooms
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Indigo Chic Villas | Luxury in Antiparos";
  }, []);

  return (
    <div>
      <Hero />
      <About />
      
      {/* Magazine-style Layout with Offset Sections */}
      <div className="bg-[#F4F3EB] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          {/* First Row - Rooms and Wellness */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-12 mb-24">
            <div className="md:col-span-7 md:translate-y-24">
              <RoomsPreview />
            </div>
            <div className="md:col-span-5">
              <Wellness />
            </div>
          </div>
          
          {/* Second Row - Eat & Drink and Destination */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-12">
            <div className="md:col-span-5 md:col-start-2">
              <EatDrink />
            </div>
            <div className="md:col-span-6 md:translate-y-32">
              <Destination />
            </div>
          </div>
        </div>
      </div>
      
      <GalleryPreview />
      <Amenities />
      
    </div>
  );
};

export default Home; 