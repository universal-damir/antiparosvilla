import React, { useState, useEffect, useCallback } from "react";
import { roomData, villaData, propertyOverview } from "../data/roomData";
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
  X,
  Users,
  Bed,
  Wifi,
  Wind,
  Coffee,
  Car
} from "lucide-react";

const getAmenityIcon = (amenity: string) => {
  const lowerCaseAmenity = amenity.toLowerCase();

  if (lowerCaseAmenity.includes("king") || lowerCaseAmenity.includes("queen") || lowerCaseAmenity.includes("bed")) return <Bed className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("balcony") || lowerCaseAmenity.includes("veranda")) return <Home className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("pool") || lowerCaseAmenity.includes("infinity")) return <Droplets className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("dining") || lowerCaseAmenity.includes("kitchen")) return <UtensilsCrossed className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("bbq")) return <Flame className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("gym")) return <Dumbbell className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("connect") || lowerCaseAmenity.includes("family")) return <Users className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("maid") || lowerCaseAmenity.includes("service")) return <Brush className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("wifi")) return <Wifi className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("air") || lowerCaseAmenity.includes("conditioning")) return <Wind className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("mini") || lowerCaseAmenity.includes("fridge")) return <Coffee className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("parking")) return <Car className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("premium") || lowerCaseAmenity.includes("safe")) return <Shield className="w-4 h-4 text-[#59452E]" />;
  if (lowerCaseAmenity.includes("view")) return <Hotel className="w-4 h-4 text-[#59452E]" />;

  return <ChevronRight className="w-4 h-4 text-[#59452E]" />;
};

// Image Carousel Component
const ImageCarousel: React.FC<{
  images: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onGalleryOpen: () => void;
  alt: string;
}> = ({ images, currentIndex, onPrev, onNext, onGalleryOpen, alt }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#f8f7f5]">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative bg-[#f8f7f5]">
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-[#3A3532]" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-[#3A3532]" />
      </button>

      <button
        onClick={onGalleryOpen}
        className="absolute bottom-6 left-6 bg-white/90 px-4 py-1.5 uppercase text-sm font-medium hover:bg-white hover:scale-105 transition-all duration-200 shadow-md backdrop-blur-sm"
        aria-label="Open gallery"
      >
        Gallery
      </button>

      <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
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
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('overflow-hidden');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
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
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Next image"
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
  const [activeGallery, setActiveGallery] = useState<{ id: string; images: string[] } | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'villas' | 'rooms'>('overview');
  const [selectedVilla, setSelectedVilla] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const initialIndexes: { [key: string]: number } = {};

    initialIndexes['property'] = 0;
    villaData.forEach(villa => {
      initialIndexes[villa.id] = 0;
    });
    roomData.forEach(room => {
      initialIndexes[room.id] = 0;
    });

    setCurrentImageIndexes(initialIndexes);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set(prev).add(entry.target.id));
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const cards = document.querySelectorAll('[data-animate]');
      cards.forEach(card => observer.observe(card));
    }, 100);

    return () => observer.disconnect();
  }, [activeTab]);

  const handlePrevImage = (id: string) => {
    setCurrentImageIndexes((prev) => {
      const currentIndex = prev[id] ?? 0;
      let images: string[] = [];

      if (id === 'property') {
        images = propertyOverview.images;
      } else if (id.startsWith('villa-')) {
        const villa = villaData.find(v => v.id === id);
        images = villa?.images || [];
      } else {
        const room = roomData.find(r => r.id === id);
        images = room?.images || [];
      }

      const imagesLength = images.length;
      const newIndex = (currentIndex - 1 + imagesLength) % imagesLength;

      return {
        ...prev,
        [id]: newIndex
      };
    });
  };

  const handleNextImage = (id: string) => {
    setCurrentImageIndexes((prev) => {
      const currentIndex = prev[id] ?? 0;
      let images: string[] = [];

      if (id === 'property') {
        images = propertyOverview.images;
      } else if (id.startsWith('villa-')) {
        const villa = villaData.find(v => v.id === id);
        images = villa?.images || [];
      } else {
        const room = roomData.find(r => r.id === id);
        images = room?.images || [];
      }

      const imagesLength = images.length;
      const newIndex = (currentIndex + 1) % imagesLength;

      return {
        ...prev,
        [id]: newIndex
      };
    });
  };

  const openGallery = (id: string, images: string[]) => {
    setActiveGallery({ id, images });
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setActiveGallery(null);
  };

  const filteredRooms = selectedVilla
    ? roomData.filter(room => room.villaId === selectedVilla)
    : roomData;

  return (
    <section className="bg-[#F4F3EB] w-full pt-28 md:pt-40">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 pb-8 text-center">
        <h2 className="text-5xl md:text-6xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide leading-tight mb-12">
          STAY IN STYLE
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white shadow-sm rounded-sm overflow-hidden">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-['Roboto'] uppercase text-sm tracking-wide transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[#3A3532] text-white'
                  : 'text-[#3A3532] hover:bg-gray-100'
              }`}
            >
              Property Overview
            </button>
            <button
              onClick={() => setActiveTab('villas')}
              className={`px-6 py-3 font-['Roboto'] uppercase text-sm tracking-wide transition-colors border-l border-gray-200 ${
                activeTab === 'villas'
                  ? 'bg-[#3A3532] text-white'
                  : 'text-[#3A3532] hover:bg-gray-100'
              }`}
            >
              Villas
            </button>
            <button
              onClick={() => setActiveTab('rooms')}
              className={`px-6 py-3 font-['Roboto'] uppercase text-sm tracking-wide transition-colors border-l border-gray-200 ${
                activeTab === 'rooms'
                  ? 'bg-[#3A3532] text-white'
                  : 'text-[#3A3532] hover:bg-gray-100'
              }`}
            >
              Individual Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Property Overview Section */}
      {activeTab === 'overview' && (
        <div className="max-w-6xl mx-auto px-4 py-12 pb-32">
          <div
            id="property-overview"
            data-animate="true"
            className={`bg-white shadow-sm rounded-sm overflow-hidden transition-all duration-700 transform ${
              visibleCards.has('property-overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="h-[500px]">
              <ImageCarousel
                images={propertyOverview.images}
                currentIndex={currentImageIndexes['property'] ?? 0}
                onPrev={() => handlePrevImage('property')}
                onNext={() => handleNextImage('property')}
                onGalleryOpen={() => openGallery('property', propertyOverview.images)}
                alt="Property Overview"
              />
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl md:text-4xl font-['Roboto'] text-black uppercase font-bold tracking-wide mb-8">
                {propertyOverview.title}
              </h3>
              <p className="text-[#3A3532] font-['Roboto'] leading-relaxed text-base md:text-lg mb-8">
                {propertyOverview.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-xl font-['Roboto'] text-black uppercase font-bold mb-4">Villa Ammos</h4>
                  <ul className="space-y-2 text-[#59452E] font-['Roboto']">
                    <li>• 4 Bedrooms (98m² total)</li>
                    <li>• Private pool & outdoor areas</li>
                    <li>• Indoor gym facility</li>
                    <li>• Rooms 3 & 4 can connect</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-['Roboto'] text-black uppercase font-bold mb-4">Villa Kyma</h4>
                  <ul className="space-y-2 text-[#59452E] font-['Roboto']">
                    <li>• 4 Bedrooms (105m² total)</li>
                    <li>• Infinity pool with sea views</li>
                    <li>• Room 5 with private balcony</li>
                    <li>• Rooms 6 & 7 can connect</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Villas Section */}
      {activeTab === 'villas' && (
        <div className="max-w-6xl mx-auto px-4 py-12 pb-32">
          {villaData.map((villa, index) => (
            <div
              key={villa.id}
              id={villa.id}
              data-animate="true"
              className={`mb-24 bg-white shadow-sm rounded-sm overflow-hidden transition-all duration-700 transform ${
                visibleCards.has(villa.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-[400px] lg:h-[550px]">
                  <ImageCarousel
                    images={villa.images}
                    currentIndex={currentImageIndexes[villa.id] ?? 0}
                    onPrev={() => handlePrevImage(villa.id)}
                    onNext={() => handleNextImage(villa.id)}
                    onGalleryOpen={() => openGallery(villa.id, villa.images)}
                    alt={villa.name}
                  />
                </div>

                <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
                  <h3 className="text-2xl md:text-3xl font-['Roboto'] text-black uppercase font-bold tracking-wide mb-4">
                    {villa.name}
                  </h3>
                  <p className="text-[#59452E] font-['Roboto'] text-sm font-medium mb-6 uppercase">
                    {villa.totalSize}
                  </p>
                  <p className="text-black font-['Roboto'] leading-relaxed text-base md:text-lg mb-8">
                    {villa.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {villa.facilities.map((facility, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 mt-0.5">{getAmenityIcon(facility)}</span>
                        <span className="text-sm text-[#59452E] font-['Roboto']">{facility}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedVilla(villa.id);
                      setActiveTab('rooms');
                    }}
                    className="mt-8 bg-[#3A3532] text-white px-6 py-3 font-['Roboto'] uppercase text-sm tracking-wide hover:bg-[#2A2522] transition-colors"
                  >
                    View {villa.name} Rooms
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Individual Rooms Section */}
      {activeTab === 'rooms' && (
        <div className="max-w-7xl mx-auto px-4 py-12 pb-32">
          {/* Villa Filter */}
          {selectedVilla && (
            <div className="mb-8 flex items-center justify-between bg-white p-4 shadow-sm rounded-sm animate-fadeIn">
              <p className="text-[#3A3532] font-['Roboto']">
                Showing rooms from: <strong className="uppercase">{villaData.find(v => v.id === selectedVilla)?.name}</strong>
              </p>
              <button
                onClick={() => setSelectedVilla(null)}
                className="text-[#59452E] hover:text-[#3A3532] font-['Roboto'] text-sm uppercase transition-colors"
              >
                Show All Rooms
              </button>
            </div>
          )}

          {filteredRooms.map((room, index) => (
            <div
              key={room.id}
              id={room.id}
              data-animate="true"
              className={`mb-16 bg-white shadow-md rounded-sm overflow-hidden transition-all duration-700 transform ${
                visibleCards.has(room.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 xl:w-[45%] h-[400px] lg:h-[500px]">
                  <ImageCarousel
                    images={room.images}
                    currentIndex={currentImageIndexes[room.id] ?? 0}
                    onPrev={() => handlePrevImage(room.id)}
                    onNext={() => handleNextImage(room.id)}
                    onGalleryOpen={() => openGallery(room.id, room.images)}
                    alt={room.name}
                  />
                </div>

                <div className="lg:w-1/2 xl:w-[55%] p-8 md:p-12 lg:px-16 lg:py-12">
                  <h3 className="text-2xl md:text-3xl font-['Roboto'] text-black uppercase font-bold tracking-wide mb-2">
                    {room.name}
                  </h3>
                  {room.villaId && (
                    <p className="text-[#59452E] font-['Roboto'] text-sm mb-6 uppercase">
                      {villaData.find(v => v.id === room.villaId)?.name}
                    </p>
                  )}
                  <div className="mb-8 space-y-2">
                    <p className="text-[#59452E] font-['Roboto'] text-sm font-medium">{room.specs.size}</p>
                    <p className="text-[#59452E] font-['Roboto'] text-sm font-medium uppercase">{room.specs.capacity}</p>
                    <p className="text-[#59452E] font-['Roboto'] text-sm font-medium uppercase">{room.specs.features}</p>
                  </div>
                  <p className="text-black font-['Roboto'] leading-relaxed text-base md:text-lg mb-8">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 mt-0.5">{getAmenityIcon(amenity)}</span>
                        <span className="text-sm text-[#59452E] font-['Roboto']">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Gallery Modal */}
      {galleryOpen && activeGallery && (
        <GalleryModal
          images={activeGallery.images}
          currentIndex={currentImageIndexes[activeGallery.id] || 0}
          onClose={closeGallery}
          onPrev={() => handlePrevImage(activeGallery.id)}
          onNext={() => handleNextImage(activeGallery.id)}
        />
      )}
    </section>
  );
};

export default Rooms;