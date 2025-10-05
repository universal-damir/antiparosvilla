import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4F3EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Roboto'] text-[#3A3532] mb-4">
            About Indigo Chic Villas
          </h2>
          <div className="w-24 h-px bg-[#8E7D67] mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none text-[#3A3532] font-['Roboto']">
          <p className="mb-6 leading-relaxed">
            Welcome to Indigo Chic Antiparos Luxury Villas, a serene oasis nestled on the enchanting island of Antiparos in Greece's breathtaking Cyclades. Just a leisurely walk from the crystal-clear waters of the Aegean Sea, our villas showcase the iconic 'sugar-cube' Cycladic architecture, offering a stunning contrast against the rugged Agios Georgios hillside and the expansive blue of the Greek sky and sea.
          </p>
          <p className="mb-6 leading-relaxed">
            Enjoy spacious, airy interiors surrounded by lush greenery, multiple inviting pools, and expansive wooden pergolas. Whether sharing unforgettable moments with loved ones or relaxing poolside in peaceful solitude, Indigo Chic Villas unite contemporary chic design with natural beauty, crafting the perfect sanctuary.
          </p>
          <p className="leading-relaxed">
            Our philosophy is simple: to deliver an authentic Greek island experience enriched with every comfort and luxury you deserve. From the moment you arrive, we are dedicated to surpassing your expectations, creating lasting memories that will stay with you forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;