import React, { useState, useEffect } from "react";
import { roomData } from "../data/roomData";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Droplets, 
  UtensilsCrossed, 
  Flame, 
  Dumbbell, 
  Baby, 
  Brush,
  Hotel,
  Shield
} from "lucide-react";

const getAmenityIcon = (amenity: string) => {
  const lowerCaseAmenity = amenity.toLowerCase();
  
  if (lowerCaseAmenity.includes("veranda")) return <Home className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("pool")) return <Droplets className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("dining")) return <UtensilsCrossed className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("bbq")) return <Flame className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("gym")) return <Dumbbell className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("kids")) return <Baby className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("maid") || lowerCaseAmenity.includes("service")) return <Brush className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("premium")) return <Shield className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("exclusive")) return <Hotel className="w-4 h-4 text-[#59452E]" />;
  
  // Default icon for unmatched amenities
  return <ChevronRight className="w-4 h-4 text-[#59452E]" />;
};

const Rooms: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const initialIndexes = roomData.reduce((acc, room) => {
      acc[room.id] = 0;
      return acc;
    }, {} as { [key: string]: number });
    
    setCurrentImageIndexes(initialIndexes);
  }, []);

  const handlePrevImage = (roomId: string) => {
    setCurrentImageIndexes((prev) => {
      const currentIndex = prev[roomId] ?? 0;
      const room = roomData.find(r => r.id === roomId);
      if (!room) return prev;
      
      const imagesLength = room.images.length;
      const newIndex = (currentIndex - 1 + imagesLength) % imagesLength;
      
      return {
        ...prev,
        [roomId]: newIndex
      };
    });
  };

  const handleNextImage = (roomId: string) => {
    setCurrentImageIndexes((prev) => {
      const currentIndex = prev[roomId] ?? 0;
      const room = roomData.find(r => r.id === roomId);
      if (!room) return prev;
      
      const imagesLength = room.images.length;
      const newIndex = (currentIndex + 1) % imagesLength;
      
      return {
        ...prev,
        [roomId]: newIndex
      };
    });
  };

  return (
    <section className="bg-[#F4F3EB] w-full pt-28 md:pt-40">
      {/* Header Section - Increased vertical spacing and improved centering */}
      <div className="max-w-6xl mx-auto px-4 pb-16 text-center flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="text-5xl md:text-6xl font-['American_Typewriter'] text-[#3A3532] uppercase tracking-wide leading-tight mb-12">
          STAY IN STYLE
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-[#3A3532] font-['American_Typewriter'] leading-relaxed text-base md:text-lg mb-8">
            Inspired by the nomadic way of life, the cozy character comes from natural surfaces and earthy tones.
            Comfy pillows and hand-picked accessories add to the warm, bohemian atmosphere. A personal space in which
            to kick back and slow down.
          </p>
          <p className="text-[#3A3532] font-['American_Typewriter'] leading-relaxed text-base md:text-lg">
            The true highlights are the private verandas which border a pool. With sunbeds or hammocks for deep
            relaxation, whole days can drift by in your private paradise.
          </p>
        </div>
      </div>

      {/* Rooms Section - More spacing between items */}
      <div className="max-w-6xl mx-auto px-4 py-12 pb-32">
        {roomData.map((room) => (
          <div key={room.id} className="mb-32 bg-white shadow-sm rounded-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <img
                  src={room.images[currentImageIndexes[room.id] ?? 0]}
                  alt={room.name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <button
                  onClick={() => handlePrevImage(room.id)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors shadow"
                  aria-label="Previous image"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handlePrevImage(room.id)}
                >
                  <ChevronLeft className="w-5 h-5 text-[#3A3532]" />
                </button>
                <button
                  onClick={() => handleNextImage(room.id)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors shadow"
                  aria-label="Next image"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleNextImage(room.id)}
                >
                  <ChevronRight className="w-5 h-5 text-[#3A3532]" />
                </button>
                <div className="absolute bottom-6 left-6 bg-white/80 px-4 py-1 uppercase text-sm font-medium">
                  Gallery
                </div>
              </div>

              {/* Content Section - Improved spacing and layout */}
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                <h3 className="text-2xl md:text-3xl font-['American_Typewriter'] text-black uppercase font-bold tracking-wide mb-8">
                  {room.name}
                </h3>

                <div className="mb-8 space-y-2">
                  <p className="text-[#59452E] font-['American_Typewriter'] text-sm font-medium">{room.specs.size}</p>
                  <p className="text-[#59452E] font-['American_Typewriter'] text-sm font-medium uppercase">{room.specs.capacity}</p>
                  <p className="text-[#59452E] font-['American_Typewriter'] text-sm font-medium uppercase">{room.specs.features}</p>
                </div>

                <p className="text-black font-['American_Typewriter'] leading-relaxed text-base md:text-lg mb-8">
                  {room.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 mt-0.5">{getAmenityIcon(amenity)}</span>
                      <span className="text-sm text-[#59452E] font-['American_Typewriter']">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;