import React from "react";
import { Link, useLocation } from "react-router-dom";
import { galleryImages } from "../data/galleryData";

const Destination: React.FC = () => {
  const location = useLocation();
  const isDestinationPage = location.pathname === "/destination";

  // This is the section displayed on the homepage
  if (!isDestinationPage) {
    return (
      <section id="destination" className="bg-[#F4F3EB]">
        <div>
          <div className="overflow-hidden" style={{ height: "460px" }}>
            <img
              src="/villa ammos r1 7.jpg"
              alt="Traditional white houses in Santorini with blue sea view"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 60%" }}
            />
          </div>
          
          <div className="pt-8 pb-4">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
              DESTINATION ANTIPAROS
            </p>
            
            <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
              Indulge your wanderlust
            </h2>
            
            <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
              Explore the island like a local with the best off-beat activities and hidden 
              island nooks. Sail the Aegean, visit natural springs, explore the old town 
              - all from right at your doorstep.
            </p>
            
            <div className="mt-8">
              <Link
                to="/destination"
                className="inline-block px-5 py-2 border border-[#3A3532] text-[#3A3532] hover:bg-[#3A3532] hover:text-white transition-colors font-['Roboto'] uppercase"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // This is the dedicated destination page content
  return (
    <div className="bg-[#F4F3EB]">
      {/* Hero Banner */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1711326/pexels-photo-1711326.jpeg"
            alt="Beautiful aerial view of Greek island with blue sea"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Roboto'] text-white mb-4 leading-tight uppercase">
              DISCOVER THE HIDDEN GEM OF THE CYCLADES
            </h1>
          </div>
        </div>
      </section>

      {/* Destination content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#3A3532] text-lg md:text-xl font-['Roboto'] leading-relaxed max-w-4xl mx-auto">
            Antiparos is a small island in the heart of the Cyclades, offering authentic Greek charm without the crowds. 
            Just a short ferry ride from its larger neighbor Paros, this tranquil paradise combines pristine beaches, crystal-clear waters, 
            and traditional villages with a relaxed, unpretentious atmosphere. From the magnificent Cave of Antiparos to secluded coves 
            and vibrant local tavernas, let Villa Antiparos be your gateway to experiencing this enchanting island's natural beauty and rich cultural heritage.
          </p>
        </div>

        {/* Magazine-style layout */}
        <div className="mt-16">
          {/* First Row - Island History & Beaches */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-32">
            {/* Island History Section */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "500px" }}>
                <img
                  src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg"
                  alt="Traditional Greek village with white houses and blue domes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  ISLAND HERITAGE
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  THE STORY OF ANTIPAROS
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Antiparos has been inhabited since antiquity, with archaeological finds dating back to the Early Cycladic period. 
                  In medieval times, the island was fortified against pirate raids, with the Castle of Antiparos (Kastro) at its heart. 
                  This Venetian castle, built in the 15th century, forms the historic center of Antiparos Town, with its concentric arrangement 
                  of houses creating a defensive perimeter. Throughout its history, Antiparos has maintained its authentic character while 
                  welcoming travelers seeking the unspoiled beauty of the Cyclades. Today, it perfectly balances tradition with modern comforts, 
                  offering a genuine Greek island experience away from mass tourism.
                </p>
              </div>
            </div>

            {/* Beaches Section */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-28">
              <div className="overflow-hidden mb-4" style={{ height: "620px" }}>
                <img
                  src="https://images.pexels.com/photos/1711326/pexels-photo-1711326.jpeg"
                  alt="Beautiful turquoise waters at a Greek beach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  COASTAL PARADISE
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  PRISTINE BEACHES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Antiparos is ringed by spectacular beaches, each with its own distinct character. Our favorites include:
                </p>
                <ul className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed space-y-3">
                  <li><span className="font-semibold">Soros Beach</span> - Fine golden sand and shallow turquoise waters, ideal for families.</li>
                  <li><span className="font-semibold">Livadia</span> - The main beach near Antiparos Town, with beach bars and water sports.</li>
                  <li><span className="font-semibold">Agios Georgios</span> - A tranquil bay with crystal-clear waters, perfect for snorkeling.</li>
                  <li><span className="font-semibold">Faneromeni</span> - A secluded beach accessible by boat, offering privacy and natural beauty.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row - Cave & Local Experiences */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-28">
            {/* Cave Section */}
            <div className="md:col-span-5 md:col-start-2 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "580px" }}>
                <img
                  src="https://images.pexels.com/photos/18380194/pexels-photo-18380194.jpeg"
                  alt="Beautiful cave with rock formations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  NATURAL WONDER
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  THE CAVE OF ANTIPAROS
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  One of the island's most impressive attractions is the Cave of Antiparos, a spectacular natural formation 
                  located about 8 km from Antiparos Town. Descending 100 meters below ground through a natural entrance, visitors discover 
                  a magical world of stalactites and stalagmites formed over millions of years. The cave has been known since ancient times, 
                  with inscriptions dating back to 1673. Notable visitors through history include King Otto of Greece and Lord Byron, who carved their 
                  names into the formations. The carefully illuminated chambers reveal extraordinary shapes and colors, making this geological 
                  treasure a must-visit during your stay.
                </p>
              </div>
            </div>

            {/* Local Experiences Section */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:translate-y-32">
              <div className="overflow-hidden mb-4" style={{ height: "450px" }}>
                <img
                  src="https://images.pexels.com/photos/31697588/pexels-photo-31697588.jpeg"
                  alt="Traditional Greek fishing boats in harbor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  AUTHENTIC EXPERIENCES
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  ISLAND ACTIVITIES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Beyond beaches and landmarks, Antiparos offers numerous ways to experience its authentic charm:
                </p>
                <ul className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed space-y-3">
                  <li><span className="font-semibold">Island Hopping</span> - Take a day trip to nearby uninhabited Despotiko with its archaeological site, or visit larger Paros.</li>
                  <li><span className="font-semibold">Boat Tours</span> - Circle the island by traditional boat, discovering hidden coves and beaches inaccessible by land.</li>
                  <li><span className="font-semibold">Sunset at Sifneikos Beach</span> - Watch the sun sink into the Aegean from this perfectly positioned western beach.</li>
                  <li><span className="font-semibold">Stroll Antiparos Town</span> - Wander the bougainvillea-draped streets, discovering boutiques, cafés and the 15th-century Kastro.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-8 mb-16">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-4 text-center font-['Roboto']">
              DISCOVER ANTIPAROS
            </p>
            <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-8 uppercase text-center">
              GALLERY
            </h2>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {galleryImages.slice(0, 12).map((image) => (
                <div key={image.id} className="break-inside-avoid overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/gallery"
                className="inline-block px-5 py-2 border border-[#3A3532] text-[#3A3532] hover:bg-[#3A3532] hover:text-white transition-colors font-['Roboto'] uppercase"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;