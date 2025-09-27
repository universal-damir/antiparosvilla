import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/navItems";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();
  
  // Check if current page should use black navbar text (Rooms, Gallery, Privacy, Cookies pages)
  const isRoomsPage = location.pathname === "/rooms" || location.pathname.startsWith("/rooms/") || location.pathname === "/gallery";
  const isPolicyPage = location.pathname === "/privacy-policy" || location.pathname === "/cookies-policy";
  const shouldUseBlackText = isRoomsPage || isPolicyPage;
  
  // Use black text on specified pages when at top, white text on all other pages
  const shouldUseWhiteText = (isInitialLoad || !isScrolled) && !shouldUseBlackText;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isInitialLoad && window.scrollY > 0) {
        setIsInitialLoad(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Set initial load to false after a short delay
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isInitialLoad]);

  // Reset isInitialLoad when route changes
  useEffect(() => {
    setIsInitialLoad(true);
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F4F3EB]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centered at the top - only visible when not scrolled */}
        {!isScrolled && (
          <div className="flex justify-center py-2">
            <Link to="/" className="block">
              <img
                src="/indigo-antiparos-logo.png"
                alt="Indigo Chic Villas"
                className={`h-24 md:h-32 w-auto ${
                  shouldUseWhiteText ? "brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>
        )}
        
        {/* Navigation section always visible */}
        <div className={`${isScrolled ? "py-0" : ""}`}>
          {/* Top horizontal line */}
          <div className={`w-full ${
            isScrolled 
              ? "h-px bg-[#3A3532]/20" 
              : shouldUseBlackText 
                ? "h-[2px] bg-[#3A3532]/30" 
                : "h-[2px] bg-white/30"
          }`}></div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex justify-center items-center py-3">
              <ul className="flex space-x-10">
                {navItems.filter(item => item.href !== "/").map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`font-['Roboto'] transition-colors uppercase relative ${
                        shouldUseWhiteText
                          ? "text-white hover:text-white/80"
                          : "text-[#3A3532] hover:text-[#8E7D67]"
                      } ${location.pathname === item.href ? "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-current" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Bottom horizontal line */}
          <div className={`hidden md:block w-full ${
            isScrolled 
              ? "h-px bg-[#3A3532]/20" 
              : shouldUseBlackText 
                ? "h-[2px] bg-[#3A3532]/30" 
                : "h-[2px] bg-white/30"
          }`}></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end py-2">
            <button
              className={shouldUseWhiteText
                ? "text-white"
                : (isScrolled ? "text-[#3A3532]" : "text-[#3A3532]")
              }
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${
          isScrolled ? "bg-[#F4F3EB]" : "bg-white/10 backdrop-blur-sm"
        }`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.filter(item => item.href !== "/").map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-['Roboto'] py-2 border-b last:border-0 uppercase relative ${
                    shouldUseWhiteText
                      ? "text-white border-white/20"
                      : "text-[#3A3532] border-[#3A3532]/20"
                  } ${location.pathname === item.href ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;