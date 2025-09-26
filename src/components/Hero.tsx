import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/00 MAIN BACKGROUND.jpg"
          alt="Indigo Chic Villas Antiparos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Roboto'] text-white mb-4 leading-tight">
            WELCOME TO ANTIPAROS
          </h1>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;