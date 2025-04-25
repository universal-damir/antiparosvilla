import React from "react";
import { 
  Home, 
  Palmtree, 
  Flame, 
  Waves, 
  Dumbbell, 
  Brush,
  Baby
} from "lucide-react";

const Amenities: React.FC = () => {
  const amenitiesList = [
    { 
      icon: <Home className="w-6 h-6 text-[#8B7D68]" />, 
      title: "2 Villas (4 Rooms)", 
      description: "Luxurious private villas with four beautifully appointed rooms." 
    },
    { 
      icon: <Palmtree className="w-6 h-6 text-[#8B7D68]" />, 
      title: "Outdoor Area", 
      description: "Expansive outdoor spaces for relaxation and entertainment." 
    },
    { 
      icon: <Flame className="w-6 h-6 text-[#8B7D68]" />, 
      title: "Barbecue", 
      description: "Outdoor barbecue facilities for al fresco dining experiences." 
    },
    { 
      icon: <Waves className="w-6 h-6 text-[#8B7D68]" />, 
      title: "Private Pools", 
      description: "One private pool for each villa, perfect for cooling off." 
    },
    { 
      icon: <Dumbbell className="w-6 h-6 text-[#8B7D68]" />, 
      title: "Gym", 
      description: "Fully equipped fitness area to maintain your workout routine." 
    },
    { 
      icon: <Brush className="w-6 h-6 text-[#8B7D68]" />, 
      title: "Maid's Room", 
      description: "Dedicated staff quarters for your convenience." 
    },
    { 
      icon: <Baby className="w-6 h-6 text-[#8B7D68]" />, 
      title: "Kid Friendly", 
      description: "Family-oriented amenities and spaces for children of all ages." 
    }
  ];

  return (
    <section id="amenities" className="bg-[#F4F3EB] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
            Villa Amenities
          </h2>
          <p className="text-[#3A3532] max-w-2xl mx-auto font-['Roboto'] leading-relaxed">
            Everything you need for a perfect stay in our Antiparos villas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto">
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