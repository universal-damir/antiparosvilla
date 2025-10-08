import React from "react";
import {
  Home,
  Palmtree,
  Flame,
  Waves,
  Dumbbell,
  Brush,
  Wifi,
  WashingMachine,
  Car,
  Headphones,
  Sparkles,
  ChefHat
} from "lucide-react";

const Amenities: React.FC = () => {
  const amenitiesList = [
    {
      icon: <Home className="w-6 h-6 text-[#8B7D68]" />,
      title: "Two (2) Villas",
      description: "Two luxurious private villas, each featuring four beautifully appointed rooms"
    },
    {
      icon: <Palmtree className="w-6 h-6 text-[#8B7D68]" />,
      title: "Outdoor Area",
      description: "Expansive outdoor spaces for relaxation and entertainment"
    },
    {
      icon: <Flame className="w-6 h-6 text-[#8B7D68]" />,
      title: "Barbecue",
      description: "Outdoor barbecue facilities for al fresco dining experiences"
    },
    {
      icon: <Waves className="w-6 h-6 text-[#8B7D68]" />,
      title: "Private Pools",
      description: "One private pool for each villa, perfect for cooling off"
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#8B7D68]" />,
      title: "Gym",
      description: "Fully equipped fitness area to maintain your workout routine"
    },
    {
      icon: <Brush className="w-6 h-6 text-[#8B7D68]" />,
      title: "Maid's Room",
      description: "Dedicated staff quarters for your convenience"
    },
    {
      icon: <Wifi className="w-6 h-6 text-[#8B7D68]" />,
      title: "High-Speed WiFi",
      description: "Reliable internet connectivity throughout both villas"
    },
    {
      icon: <WashingMachine className="w-6 h-6 text-[#8B7D68]" />,
      title: "Laundry Room",
      description: "The convenience of having free laundry facilities on-site for guests, especially for longer stays or families"
    },
    {
      icon: <Car className="w-6 h-6 text-[#8B7D68]" />,
      title: "Private Parking",
      description: "Enjoy the convenience and peace of mind with exclusive private parking available on-site"
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#8B7D68]" />,
      title: "Concierge Assistance",
      description: "For a personalized service designed to make your stay effortless and unforgettable"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#8B7D68]" />,
      title: "Daily Maid Service",
      description: "Enjoy impeccable cleanliness and comfort throughout your stay with our dedicated maid service"
    },
    {
      icon: <ChefHat className="w-6 h-6 text-[#8B7D68]" />,
      title: "Chef On Demand",
      description: "A private chef available on request to design and prepare bespoke meals in-villa for intimate dinners, family feasts, or special celebrations"
    }
  ];

  return (
    <section id="amenities" className="bg-[#F4F3EB] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
            Property Amenities
          </h2>
          <p className="text-[#3A3532] max-w-2xl mx-auto font-['Roboto'] leading-relaxed">
            Everything you need for a perfect stay in our Antiparos villas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="mb-3 flex justify-center">{amenity.icon}</div>
              <h3 className="text-xl font-['Roboto'] text-[#3A3532] mb-2">
                {amenity.title}
              </h3>
              <p className="text-[#3A3532] font-['Roboto'] text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities; 