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
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
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
          <p className="text-[#3A3532] text-lg md:text-xl font-['Roboto'] leading-relaxed max-w-4xl mx-auto">
            At Villa Antiparos, we celebrate Greece's rich culinary heritage. From our in-villa dining 
            experiences to the island's finest tavernas, every meal becomes a memorable part of your journey. 
            Discover traditional recipes made with locally-sourced ingredients, paired with exceptional Greek wines 
            and spirits. Whether dining in or exploring the island's gastronomic delights, we invite you to savor 
            authentic flavors that tell the story of Greece's diverse regions and culinary traditions.
          </p>
        </div>

        {/* Magazine-style layout */}
        <div className="mt-16">
          {/* First Row - Villa Dining & Local Restaurants */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-32">
            {/* Villa Dining Section */}
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
                  Experience exceptional dining without leaving the comfort of your villa. Our chef 
                  creates personalized menus featuring the finest local ingredients - from fresh seafood caught 
                  that morning to vegetables from nearby organic farms. Enjoy intimate breakfasts on your terrace, 
                  casual poolside lunches, or elegant dinners under the stars. Our team can arrange everything 
                  from special celebration meals to cooking classes where you'll learn to prepare traditional 
                  Greek specialties.
                </p>
              </div>
            </div>

            {/* Local Restaurants Section */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-28">
              <div className="overflow-hidden mb-4" style={{ height: "620px" }}>
                <img
                  src="https://images.pexels.com/photos/1010641/pexels-photo-1010641.jpeg"
                  alt="Greek island landscape with water and buildings"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  ISLAND FLAVORS
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  LOCAL RECOMMENDATIONS
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Explore Antiparos' vibrant culinary scene with our carefully curated recommendations:
                </p>
                <ul className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed space-y-3">
                  <li><span className="font-semibold">Captain Pipinos</span> - Waterfront taverna famous for fresh-caught fish and octopus dried in the Aegean sun.</li>
                  <li><span className="font-semibold">Kalokeri</span> - Farm-to-table dining featuring produce from their organic garden.</li>
                  <li><span className="font-semibold">Ageri</span> - Traditional meze with a modern twist in Antiparos Town's charming center.</li>
                  <li><span className="font-semibold">The Beach House</span> - Relaxed beachside dining with spectacular sunset views.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row - Recipes & Local Products */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Traditional Recipes Section */}
            <div className="md:col-span-5 md:col-start-2 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "580px" }}>
                <img
                  src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg"
                  alt="Greek salad with tomatoes and greens in white bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  TASTE OF GREECE
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  TRADITIONAL RECIPES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Take a piece of Greece home with you by mastering these simple yet authentic recipes:
                </p>
                <div className="space-y-6">
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

            {/* Local Products Section */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:translate-y-32">
              <div className="overflow-hidden mb-4" style={{ height: "450px" }}>
                <img
                  src="https://images.unsplash.com/photo-1609950547346-a4f431435b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
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
    </div>
  );
};

export default EatDrink;