import React, { useState, useEffect, useCallback } from "react";
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
  Shield,
  X
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

type GalleryModalProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance (px)
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      onPrev();
    } else if (e.key === 'ArrowRight') {
      onNext();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [onPrev, onNext, onClose]);
  
  useEffect(() => {
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyDown);
    
    // Add body class to prevent scrolling
    document.body.classList.add('overflow-hidden');
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleKeyDown]);
  
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div 
        className="w-full h-full relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/20 rounded-full z-10 hover:bg-white/40 transition-colors"
          aria-label="Close gallery"
          tabIndex={0}
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Previous image"
          tabIndex={0}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Next image"
          tabIndex={0}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        <div className="absolute bottom-6 left-0 right-0 text-center text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

const Rooms: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

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
  
  const openGallery = (roomId: string) => {
    setActiveRoom(roomId);
    setGalleryOpen(true);
  };
  
  const closeGallery = () => {
    setGalleryOpen(false);
    setActiveRoom(null);
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
                <button 
                  onClick={() => openGallery(room.id)}
                  className="absolute bottom-6 left-6 bg-white/80 px-4 py-1 uppercase text-sm font-medium hover:bg-white transition-colors"
                  aria-label="Open gallery"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openGallery(room.id)}
                >
                  Gallery
                </button>
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
      
      {/* Fullscreen Gallery Modal */}
      {galleryOpen && activeRoom && (
        <GalleryModal
          images={roomData.find(r => r.id === activeRoom)?.images || []}
          currentIndex={currentImageIndexes[activeRoom] || 0}
          onClose={closeGallery}
          onPrev={() => handlePrevImage(activeRoom)}
          onNext={() => handleNextImage(activeRoom)}
        />
      )}
    </section>
  );
};

export default Rooms;