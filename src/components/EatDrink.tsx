import React from "react";
import { Link, useLocation } from "react-router-dom";

const EatDrink: React.FC = () => {
  const location = useLocation();
  const isEatDrinkPage = location.pathname === "/eat-drink";

  // This is the section displayed on the homepage
  if (!isEatDrinkPage) {
    return (
      <section id="eat-drink" className="bg-[#F4F3EB]">
        <div>
          <div className="overflow-hidden" style={{ height: "680px" }}>
            <img
              src="/villa ammos outdoor 5.jpg"
              alt="Mediterranean restaurant setting"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 65%" }}
            />
          </div>
          
          <div className="pt-8 pb-8">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
              EAT & DRINK
            </p>
            
            <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
              Sun-kissed food for the soul
            </h2>
            
            <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
              Our food philosophy centres on community and inclusivity, inviting guests 
              to savor a diverse array of Mediterranean-inspired small plates and 
              wholesome dishes, all made with top-quality, locally sourced ingredients.
              Eat food that inspires long lasting memories and encourages culinary
              exploration.
            </p>
            
            <div className="mt-8">
              <Link
                to="/eat-drink"
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

  // This is the dedicated eat & drink page content
  return (
    <div className="bg-[#F4F3EB]">
      {/* Hero Banner */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/eat-drink/eat-and-drink-header.jpeg"
            alt="Mediterranean feast table with fresh food"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Roboto'] text-white mb-4 leading-tight uppercase">
              A CULINARY JOURNEY THROUGH GREECE
            </h1>
          </div>
        </div>
      </section>

      {/* Eat & Drink content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#3A3532] text-lg md:text-xl font-['Roboto'] leading-relaxed max-w-4xl mx-auto text-justify">
            At Indigo Chic Villas, every meal is a journey. Enjoy traditional recipes crafted from locally sourced ingredients, paired with exceptional Greek wines, whether in the intimacy of your villa or at the island's finest tavernas. Taste the authentic flavours of Greece and let every bite tell a story.
          </p>
        </div>

        {/* Magazine-style layout - Zigzag pattern */}
        <div className="mt-16">
          {/* Zigzag Editorial Grid */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-0">
            {/* 1. Top Left - Villa Dining */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "500px" }}>
                <img
                  src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                  alt="Private dining setup with Mediterranean view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  PRIVATE DINING
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  VILLA GASTRONOMY
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Experience exceptional dining without leaving the comfort of your villa with our Chef on Demand service. Enjoy personalized menus crafted with the finest local ingredients — from freshly caught seafood to organic produce from nearby farms. Whether it's breakfast on your terrace, a relaxed poolside lunch, or a private dinner under the stars, our chef brings a restaurant-quality experience to your villa. We can also arrange special celebration meals or private cooking classes featuring traditional Greek cuisine.
                </p>
              </div>
            </div>

            {/* 2. Middle Right - Traditional Recipes (offset down) */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-28">
              <div className="overflow-hidden mb-4" style={{ height: "580px" }}>
                <img
                  src="/eat-drink/traditional-recipies.jpeg"
                  alt="Greek salad with tomatoes and greens in white bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  TASTE OF ANTIPAROS
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  TRADITIONAL RECIPES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Take a piece of Greece home with you by mastering these simple yet authentic recipes:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3A3532] font-['Roboto']">Cheese saganaki</h3>
                    <p className="text-[#3A3532] font-['Roboto'] leading-relaxed">
                      is the perfect Greek meze! This recipe is so simple and quick. Made with either kefalotyri or kefalograviera coated in flour and a touch of breadcrumbs, the result is a crispy on the outside, oozy on the inside appetizer. The best way to serve cheese saganaki is with a fresh squeeze of lemon.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3A3532] font-['Roboto']">Authentic Greek Salad (Horiatiki)</h3>
                    <p className="text-[#3A3532] font-['Roboto'] leading-relaxed">
                      Combine ripe tomatoes, cucumber, green bell pepper, red onion, Kalamata olives, and a thick slice of feta.
                      Dress with extra virgin olive oil, a splash of red wine vinegar, dried oregano, and sea salt.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3A3532] font-['Roboto']">Tzatziki</h3>
                    <p className="text-[#3A3532] font-['Roboto'] leading-relaxed">
                      Strain Greek yogurt, then mix with grated cucumber (water squeezed out), minced garlic,
                      olive oil, fresh dill, and a splash of lemon juice. Perfect with grilled meats or as a dip.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Bottom Left - Local Delicacies (offset down more) */}
            <div className="md:col-span-5 md:col-start-2 md:row-start-2 md:-translate-y-80">
              <div className="overflow-hidden mb-4" style={{ height: "450px" }}>
                <img
                  src="/eat-drink/local-delicacies.jpeg"
                  alt="Greek olive oil, herbs and local products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  ISLAND BOUNTY
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  LOCAL DELICACIES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  The Cycladic islands are known for their exceptional local products. During your stay,
                  be sure to sample these specialties:
                </p>
                <ul className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed space-y-3">
                  <li><span className="font-semibold">Cycladic Cheeses</span> - From mild anthotyro to tangy kopanisti, the islands produce distinct varieties worth discovering.</li>
                  <li><span className="font-semibold">Caper Leaves</span> - Wild-harvested from rocky outcroppings and preserved, these add bright flavor to salads and fish dishes.</li>
                  <li><span className="font-semibold">Thyme Honey</span> - Produced from the abundant wild thyme growing across the islands, with a distinctive aroma and flavor.</li>
                  <li><span className="font-semibold">Local Wines</span> - The volcanic soils and unique climate create exceptional wines, particularly the crisp assyrtiko and fruity aidani varieties.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Recommendations - Full Width Section */}
      <section className="bg-[#F4F3EB] pt-0 pb-16 -mt-72">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Image */}
          <div className="overflow-hidden mb-8 rounded-lg" style={{ height: "400px" }}>
            <img
              src="/eat-drink/local-recommendations.jpeg"
              alt="Local dining recommendations in Antiparos"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
              ISLAND FLAVORS
            </p>
            <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
              LOCAL RECOMMENDATIONS
            </h2>
            <p className="text-[#3A3532] mb-8 font-['Roboto'] leading-relaxed max-w-3xl mx-auto">
              Explore Antiparos' vibrant culinary scene with our curated recommendations:
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Tavernas & Fine Dining */}
            <div>
              <h3 className="text-xl font-semibold text-[#3A3532] font-['Roboto'] mb-4 uppercase">Tavernas & Fine Dining</h3>
              <ul className="space-y-3 text-[#3A3532] font-['Roboto'] leading-relaxed">
                <li>
                  <span className="font-semibold">Mpakas taverna & Captain Pipinos</span> — Waterfront dining in Agios Georgios. Fresh fish and octopus dried in the Aegean sun.
                </li>
                <li>
                  <span className="font-semibold">Rooster</span> — Fine dining with breathtaking views and organic farm-to-table produce.
                </li>
                <li>
                  <span className="font-semibold">Cookoovaya</span> — Waterfront fine dining from chef Koskinas.
                </li>
                <li>
                  <span className="font-semibold">Vasilainas Blue</span> — Award-winning comfort cuisine with serene views.
                </li>
                <li>
                  <span className="font-semibold">Epestefe</span> — Traditional Greek dishes in a relaxed town atmosphere.
                </li>
              </ul>
            </div>

            {/* Bars & Nightlife */}
            <div>
              <h3 className="text-xl font-semibold text-[#3A3532] font-['Roboto'] mb-4 uppercase">Bars & Nightlife</h3>
              <ul className="space-y-3 text-[#3A3532] font-['Roboto'] leading-relaxed">
                <li><span className="font-semibold">Citron Antiparos</span> — Chic vibes, cocktails, and dance beats.</li>
                <li><span className="font-semibold">Boogaloo Cocktail Bar</span> — Great DJs and energetic atmosphere.</li>
                <li><span className="font-semibold">Bardot</span> — Stylish bar with music.</li>
                <li><span className="font-semibold">10AM Apotheke</span> — Botanical bar with unique ambiance.</li>
                <li><span className="font-semibold">Dancing Club Mill</span> — Island clubbing experience.</li>
                <li><span className="font-semibold">La Luna</span> — Late night 80s cult atmosphere.</li>
              </ul>
            </div>

            {/* Beach Clubs */}
            <div>
              <h3 className="text-xl font-semibold text-[#3A3532] font-['Roboto'] mb-4 uppercase">Beach Clubs</h3>
              <ul className="space-y-3 text-[#3A3532] font-['Roboto'] leading-relaxed">
                <li><span className="font-semibold">Soros Beach</span> — Boho vibes, music, and seaside cocktails.</li>
                <li><span className="font-semibold">Beach House</span> — Chic beachside dining, home of Cookoovaya.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EatDrink;