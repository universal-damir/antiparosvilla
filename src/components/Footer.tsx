import React from "react";
import { navItems } from "../data/navItems";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F3EB] text-[#3A3532] pt-16 pb-8 border-t border-[#3A3532]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-['Roboto'] mb-6">
              Indigo Chic Villas
            </h3>
            <p className="mb-4 font-['Roboto']">
              Agios Georgios, Antiparos 84007
              <br />
              Cyclades, Greece
            </p>
            <p className="font-['Roboto']">
              Tel: +30 22840 61000
              <br />
              Email: contact@icantiparos.com
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
                href="#"
                className="text-[#3A3532] hover:text-[#8E7D67] transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-[#3A3532] hover:text-[#8E7D67] transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-[#3A3532] hover:text-[#8E7D67] transition-colors"
              >
                <Twitter />
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