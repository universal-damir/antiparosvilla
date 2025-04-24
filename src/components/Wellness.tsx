import React from "react";
import { Link, useLocation } from "react-router-dom";

const Wellness: React.FC = () => {
  const location = useLocation();
  const isWellnessPage = location.pathname === "/wellness";

  // This is the section displayed on the homepage
  if (!isWellnessPage) {
    return (
      <section id="wellness" className="bg-[#F4F3EB]">
        <div>
          <div className="overflow-hidden" style={{ height: "580px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Wellness spa treatment"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          
          <div className="pt-8 pb-6">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['American_Typewriter']">
              WELLNESS
            </p>
            
            <h2 className="text-2xl md:text-3xl font-['American_Typewriter'] text-[#3A3532] mb-4 uppercase">
              Stretch, breath, balance.
            </h2>
            
            <p className="text-[#3A3532] mb-6 font-['American_Typewriter'] leading-relaxed">
              Finding your balance can be a physical pursuit, an inner journey, or a
              perfect symbiosis of the two. Let our team of experts, including yoga
              teachers and personal trainers, guide you along the way.
            </p>
            
            <div className="mt-8">
              <Link
                to="/wellness"
                className="inline-block px-5 py-2 border border-[#3A3532] text-[#3A3532] hover:bg-[#3A3532] hover:text-white transition-colors font-['American_Typewriter'] uppercase"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // This is the dedicated wellness page content
  return (
    <div className="bg-[#F4F3EB]">
      {/* Hero Banner */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Person practicing yoga in serene environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['American_Typewriter'] text-white mb-4 leading-tight uppercase">
              GOOD FOR THE MIND, GOOD FOR THE BODY
            </h1>
          </div>
        </div>
      </section>

      {/* Wellness content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#3A3532] text-lg md:text-xl font-['American_Typewriter'] leading-relaxed max-w-4xl mx-auto">
            Continue your routine, or take the time to recharge physically and mentally during your stay at Villa 
            Antiparos using our wellness facilities. We offer indoor and outdoor gym facilities and equipment, yoga
            classes, and hikes in the neighboring natural areas of Antiparos. Immerse yourself in the serene 
            environment, reconnect with nature, and discover the perfect balance between activity and relaxation
            in our Mediterranean paradise.
          </p>
        </div>

        {/* Magazine-style layout */}
        <div className="mt-16">
          {/* First Row - Gym and Pool */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-32">
            {/* Gym Facilities Section */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "500px" }}>
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Modern gym facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['American_Typewriter']">
                  ATHLETIC PURSUITS
                </p>
                <h2 className="text-2xl md:text-3xl font-['American_Typewriter'] text-[#3A3532] mb-4 uppercase">
                  GYM FACILITIES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['American_Typewriter'] leading-relaxed">
                  For cardio and weights, our well-equipped gym will ensure every muscle gets 
                  its full attention. For added motivation or help getting started, let 
                  our personal trainer give you a boost with customized routines tailored to your goals.
                </p>
              </div>
            </div>

            {/* Pool Relaxation Section (replacing Spa) */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-28">
              <div className="overflow-hidden mb-4" style={{ height: "620px" }}>
                <img
                  src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Infinity pool with ocean view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['American_Typewriter']">
                  WATER THERAPY
                </p>
                <h2 className="text-2xl md:text-3xl font-['American_Typewriter'] text-[#3A3532] mb-4 uppercase">
                  POOLSIDE SERENITY
                </h2>
                <p className="text-[#3A3532] mb-6 font-['American_Typewriter'] leading-relaxed">
                  Our infinity pool offers more than just refreshment—it's a sanctuary for the senses.
                  Unwind on comfortable loungers with panoramic views of the Aegean Sea, or enjoy a 
                  gentle swim at sunset. The tranquil waters and Mediterranean breeze create the 
                  perfect environment for natural relaxation and rejuvenation.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Yoga and Outdoor */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Yoga Section */}
            <div className="md:col-span-5 md:col-start-2 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "580px" }}>
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Yoga practice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['American_Typewriter']">
                  INHALES AND EXHALES
                </p>
                <h2 className="text-2xl md:text-3xl font-['American_Typewriter'] text-[#3A3532] mb-4 uppercase">
                  YOGA
                </h2>
                <p className="text-[#3A3532] mb-6 font-['American_Typewriter'] leading-relaxed">
                  Breathe into the day or evening with an invigorating class on our 
                  seaside yoga deck. Salute the sun with the actual Aegean sunrise or sunset as your backdrop.
                  Classes take place on our open-air terrace with uninterrupted sea views. For those wanting to 
                  perfect their practice, our experienced instructor is also available for private sessions.
                </p>
              </div>
            </div>

            {/* Outdoor Activities Section */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:translate-y-32">
              <div className="overflow-hidden mb-4" style={{ height: "450px" }}>
                <img
                  src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Hiking in nature"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['American_Typewriter']">
                  EXERCISE IN NATURE
                </p>
                <h2 className="text-2xl md:text-3xl font-['American_Typewriter'] text-[#3A3532] mb-4 uppercase">
                  ISLAND ADVENTURES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['American_Typewriter'] leading-relaxed">
                  If you prefer to mix nature and culture with your wellness activities, join 
                  our guided hikes across Antiparos' stunning landscapes. From coastal paths to hidden 
                  caves, the island offers diverse terrain for all experience levels. Discover ancient ruins, 
                  breathtaking viewpoints, and secluded beaches on foot for a truly authentic Greek island experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;