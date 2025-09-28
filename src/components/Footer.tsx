import React from "react";
import { navItems } from "../data/navItems";
import { Instagram, MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F3EB] text-[#3A3532] pt-16 pb-8 border-t border-[#3A3532]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact - First on mobile, First on desktop with logo */}
          <div className="flex flex-col items-center md:items-start order-1">
            <div className="w-full max-w-xs md:max-w-none">
              <h3 className="text-xl font-['Roboto'] mb-6 text-left">
                CONTACT
              </h3>
              <div className="space-y-4 text-left">
                <a
                  href="https://www.google.com/maps/place/Indigo+Chic,+Antiparos+Luxury+Villas/@36.9757729,25.0385461,716m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x149867a7d8c11e91:0xe59ef47a3ea11022!2sIndigo+Chic,+Antiparos+Luxury+Villas!8m2!3d36.9757686!4d25.0411264!16s%2Fg%2F11xzlg0fyg!3m5!1s0x149867a7d8c11e91:0xe59ef47a3ea11022!8m2!3d36.9757686!4d25.0411264!16s%2Fg%2F11xzlg0fyg?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8E7D67] transition-colors flex items-start"
                >
                  <MapPin className="w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                  <span className="font-['Roboto']">
                    St.George, Antiparos, Greece 84007
                  </span>
                </a>
                <a
                  href="https://wa.me/971566988937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8E7D67] transition-colors flex items-center"
                >
                  <FaWhatsapp className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="font-['Roboto']">+971 56 698 8937</span>
                </a>
                <a
                  href="mailto:contact@indigochic-antiparos.com"
                  className="hover:text-[#8E7D67] transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="font-['Roboto']">contact@indigochic-antiparos.com</span>
                </a>
              </div>
            </div>
            <img
              src="/indigo-antiparos-logo.png"
              alt="Indigo Chic Villas"
              className="h-28 w-auto mt-8 hidden md:block"
            />
          </div>

          {/* Connect With Us - Second on mobile, Second on desktop */}
          <div className="flex flex-col items-center md:items-start order-2">
            <div className="w-full max-w-xs md:max-w-none">
              <h3 className="text-xl font-['Roboto'] mb-6 text-left uppercase">
                Connect With Us
              </h3>
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://www.instagram.com/indigochic.antiparos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3A3532] hover:text-[#8E7D67] transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation - Third on mobile, Third on desktop */}
          <div className="flex flex-col items-center md:items-start order-3">
            <div className="w-full max-w-xs md:max-w-none">
              <h3 className="text-xl font-['Roboto'] mb-6 text-left uppercase">
                Navigation
              </h3>
              <ul className="space-y-3 text-left">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-['Roboto'] hover:text-[#8E7D67] transition-colors block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo for mobile - Fourth/Last on mobile */}
          <div className="flex justify-center order-4 md:hidden col-span-1">
            <img
              src="/indigo-antiparos-logo.png"
              alt="Indigo Chic Villas"
              className="h-28 w-auto"
            />
          </div>
        </div>

        <div className="border-t border-[#3A3532]/20 pt-8 text-center">
          <p className="font-['Roboto'] text-sm">
            &copy; {new Date().getFullYear()} Indigo Chic Villas. All rights reserved.
            <span className="italic ml-4 hidden md:inline">
              <a href="/privacy-policy" className="hover:text-[#8E7D67] transition-colors">
                Privacy Policy
              </a>
              <span className="mx-2">·</span>
              <a href="/cookies-policy" className="hover:text-[#8E7D67] transition-colors">
                Cookies Policy
              </a>
            </span>
          </p>
          <div className="italic text-sm mt-2 md:hidden">
            <a href="/privacy-policy" className="hover:text-[#8E7D67] transition-colors block">
              Privacy Policy
            </a>
            <a href="/cookies-policy" className="hover:text-[#8E7D67] transition-colors block mt-1">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;