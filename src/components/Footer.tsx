import React from "react";
import { navItems } from "../data/navItems";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F3EB] text-[#3A3532] pt-16 pb-8 border-t border-[#3A3532]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/indigo-antiparos-logo.png"
              alt="Indigo Chic Villas"
              className="h-28 w-auto mb-6"
            />
            <p className="mb-4 font-['Roboto']">
              <a
                href="https://www.google.com/maps/place/Indigo+Chic,+Antiparos+Luxury+Villas/@36.9757729,25.0385461,716m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x149867a7d8c11e91:0xe59ef47a3ea11022!2sIndigo+Chic,+Antiparos+Luxury+Villas!8m2!3d36.9757686!4d25.0411264!16s%2Fg%2F11xzlg0fyg!3m5!1s0x149867a7d8c11e91:0xe59ef47a3ea11022!8m2!3d36.9757686!4d25.0411264!16s%2Fg%2F11xzlg0fyg?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E7D67] transition-colors inline-flex items-start"
              >
                <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span>
                  St.George, Antiparos, Greece 84007
                </span>
              </a>
            </p>
            <p className="font-['Roboto'] space-y-2">
              <a
                href="tel:+302284061000"
                className="hover:text-[#8E7D67] transition-colors inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+30 22840 61000</span>
              </a>
              <br />
              <a
                href="mailto:contact@icantiparos.com"
                className="hover:text-[#8E7D67] transition-colors inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>contact@icantiparos.com</span>
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-['Roboto'] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-['Roboto'] hover:text-[#8E7D67] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-['Roboto'] mb-6">
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
            <div className="mt-4 space-y-3">
              <a 
                href="/privacy-policy" 
                className="block font-['Roboto'] hover:text-[#8E7D67] transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/cookies-policy" 
                className="block font-['Roboto'] hover:text-[#8E7D67] transition-colors"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A3532]/20 pt-8 text-center">
          <p className="font-['Roboto'] text-sm">
            &copy; {new Date().getFullYear()} Indigo Chic Villas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;