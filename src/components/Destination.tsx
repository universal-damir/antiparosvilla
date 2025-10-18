import React from "react";
import { Link, useLocation } from "react-router-dom";

const Destination: React.FC = () => {
  const location = useLocation();
  const isDestinationPage = location.pathname === "/destination";

  const galleryImages = [
    { src: "/destination-web/alkistis-calich-0YXWmi0U7KE-unsplash.jpg", alt: "Antiparos view" },
    { src: "/destination-web/alkistis-calich-8ICgc_RJ5ow-unsplash.jpg", alt: "Antiparos coastline" },
    { src: "/destination-web/ashley-ebersberger--g1F-azXGLE-unsplash.jpg", alt: "Antiparos landscape" },
    { src: "/destination-web/dimitris-kiriakakis-NPau7aw4IB4-unsplash.jpg", alt: "Antiparos scenery" },
    { src: "/destination-web/dimitris-kiriakakis-u2MshMVTvqY-unsplash.jpg", alt: "Antiparos beach" },
    { src: "/destination-web/petros-kaltsis-DrA41__VKoE-unsplash.jpg", alt: "Antiparos waters" },
    { src: "/destination-web/destintation-antiparos.jpeg", alt: "Destination Antiparos" },
    { src: "/destination-web/destintation-antiparos-1.jpeg", alt: "Destination Antiparos 1" },
  ];

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
            src="/destination-web/town-antiparos.jpg"
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
          <p className="text-[#3A3532] text-lg md:text-xl font-['Roboto'] leading-relaxed max-w-4xl mx-auto text-justify">
            Discover the charm of Antiparos, a serene island where golden beaches, hidden coves, and crystal-clear waters meet authentic Cycladic culture. This tranquil paradise invites you to slow down and promises you unforgettable moments—whether strolling at sunset, dining under the stars, exploring ancient archaeological sites or exploring by boat. Let Indigo Chic Villas be your gateway to experiencing the island's natural beauty, rich heritage, and timeless Cycladic allure.
          </p>
        </div>

        {/* Magazine-style layout */}
        <div className="mt-16">
          {/* First Row - Island History & Cave */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-32">
            {/* Island History Section */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "500px" }}>
                <img
                  src="/story-of-antiparos.jpg"
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

            {/* Cave Section */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-28">
              <div className="overflow-hidden mb-4" style={{ height: "620px" }}>
                <img
                  src="/destination-web/iStock-880534880.jpg"
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
          </div>

          {/* Second Row - Beaches & Local Experiences */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-28">
            {/* Island Activities Section - Now on Left */}
            <div className="md:col-span-6 md:col-start-2 md:row-start-1 md:-translate-y-[14rem]">
              <div className="overflow-hidden mb-4" style={{ height: "450px" }}>
                <img
                  src="/island-activities.jpg"
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
                  <li><span className="font-semibold">Take a Boat Trip to Despotiko</span> — Sail across the deep-blue Aegean to the nearby uninhabited island of Despotiko. Drop anchor on its rocky shores and explore the remarkable archaeological site, including the Sanctuary of Apollo.</li>
                  <li><span className="font-semibold">Step Back in Time at the Cave of Antiparos</span> — This extraordinary vertical cave, plunging 85 metres underground, is one of Europe's most unique natural wonders. Its centuries-old stalagmites and stalactites create a breathtaking scene, while carvings and inscriptions — including one by Lord Byron — tell stories of its long history as a place of worship and refuge.</li>
                  <li><span className="font-semibold">Enjoy a Day at the Beach</span> — Antiparos boasts soft white sands and crystal-clear waters perfect for a day of relaxation. Bask in the sun, swim in the calm Aegean, or build sandcastles with your children. The island's beaches offer something for everyone — from peaceful coves to family-friendly shores.</li>
                  <li><span className="font-semibold">Watch the Sunset from a Beach Bar</span> — End your day with a cocktail in hand as the sun sets over the Aegean. Whether from a seaside taverna or a relaxed beach bar, watch Antiparos glow in shades of gold, pink, and purple — the perfect close to a day on the island.</li>
                  <li><span className="font-semibold">Evening Stroll, Shopping & Dining in the Village</span> — Wander through charming, cobbled streets lined with whitewashed houses, and blooming bougainvillea. Discover the 15th century Kastro, local boutiques for handmade jewellery, leather goods, and traditional crafts, then dine in a taverna and enjoy freshly caught seafood in true island-style.</li>
                  <li><span className="font-semibold">Cooking lessons</span> — Learn authentic Greek recipes from locals.</li>
                  <li><span className="font-semibold">Yoga sessions</span> — Reconnect with yourself in a serene island setting.</li>
                  <li><span className="font-semibold">Pottery classes</span> — Create your own handmade Greek-style souvenirs.</li>
                  <li><span className="font-semibold">Island hopping</span> — From Parikia, you can reach: Naxos (30 min), <br />Mykonos (1 hr), Tinos (1 hr 25 min).</li>
                </ul>
              </div>
            </div>

            {/* Beaches Section - Now on Right */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-32">
              <div className="overflow-hidden mb-4" style={{ height: "580px" }}>
                <img
                  src="/destination-web/faneromeni.jpg"
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
                  <li><span className="font-semibold">Soros</span> – Must-see / Lively crystal-clear waters. Vibrant seaside tavern line the shore, serving freshly prepared local dishes and chilled drinks in a lively atmosphere.</li>
                  <li><span className="font-semibold">Sifneiko (Sunset)</span> – Sunset / Water Activities. Renowned for its spectacular sunsets and golden sands. Perfect for snorkelling with excellent taverns and restaurants just steps away.</li>
                  <li><span className="font-semibold">Glyfa</span> – Unspoilt Nature / Confidential. A tranquil blend of sand and pebbles in an untouched natural setting. Ideal for families seeking peace, authenticity, and a relaxed day by the sea, with a few charming tavernas nearby.</li>
                  <li><span className="font-semibold">Agios Georgios</span> – Confidential / Calm. A serene and secluded bay with crystal-clear waters. The perfect spot for those looking to escape the crowds and embrace nature's calm. Minimal tourist development — bring your own supplies for a peaceful day by the sea.</li>
                  <li><span className="font-semibold">Psaralyki I & II</span> – Water Sports / Family Friendly. Lively, well-organized beaches close to the main town. Perfect for swimming, sunbathing, and water sports such as kayaking and wakeboarding, with beach bars and restaurants conveniently nearby.</li>
                  <li><span className="font-semibold">Apantima Beach</span> – Relaxation / Gastronomy. A picturesque pebble beach ideal for unwinding and dining. Home to several seaside taverns and bars, and just a short distance from the famous Cave of Antiparos.</li>
                  <li><span className="font-semibold">Faneromeni</span> – Relaxation / Hidden Gem / Calm. A secluded, unspoilt beach with crystal-clear waters, offering privacy, serenity, and natural beauty — the perfect hideaway for those seeking total tranquillity.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="-mt-30 mb-20">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-4 text-center font-['Roboto']">
              DISCOVER ANTIPAROS
            </p>
            <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-8 uppercase text-center">
              GALLERY
            </h2>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;