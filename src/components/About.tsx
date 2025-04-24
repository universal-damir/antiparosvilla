import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4F3EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['American_Typewriter'] text-[#3A3532] mb-4">
            About Indigo Chic Villas
          </h2>
          <div className="w-24 h-px bg-[#8E7D67] mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none text-[#3A3532] font-['American_Typewriter']">
          <p className="mb-6 leading-relaxed">
            Welcome to Indigo Chic Villas, an oasis nestled within the charming island of Antiparos in Greece's stunning Cyclades. Just a short stroll from the crystal-clear waters of the Aegean Sea, our villa features low white buildings that create a striking visual contrast with the rugged hillside that rises 200 meters behind them.
          </p>
          <p className="mb-6 leading-relaxed">
            Experience airy, open spaces framed by lush vegetation, multiple pools, and expansive wooden decks and pergolas. Whether you're walking along the broad walkways or unwinding by the pool, Indigo Chic Villas offers an exquisite blend of contemporary design and natural beauty, creating the perfect retreat.
          </p>
          <p className="leading-relaxed">
            Our philosophy is simple: to provide an authentic Greek island experience with all the comforts and luxuries you deserve. From the moment you arrive, our attentive staff will ensure your stay exceeds all expectations, allowing you to create memories that will last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;