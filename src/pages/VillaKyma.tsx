import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { roomData, villaData } from "../data/roomData";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  Bed,
  Waves,
  Wind,
  Lock,
  Flame,
  Dumbbell,
  Car,
  Sparkles,
  Wifi,
  UserCheck,
  Droplets,
  Wine,
  Snowflake,
  Users,
  Sofa
} from "lucide-react";

const getAmenityIcon = (amenity: string) => {
  const lowerCaseAmenity = amenity.toLowerCase();

  if (lowerCaseAmenity.includes('sea view')) return <Eye className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('king') || lowerCaseAmenity.includes('queen') || (lowerCaseAmenity.includes('bed') && !lowerCaseAmenity.includes('couch'))) return <Bed className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('couch') || lowerCaseAmenity.includes('single bed')) return <Sofa className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('pool')) return <Waves className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('air conditioning')) return <Snowflake className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('fan')) return <Wind className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('safe')) return <Lock className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('bbq')) return <Flame className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('gym')) return <Dumbbell className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('parking')) return <Car className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('maid')) return <Sparkles className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('wifi')) return <Wifi className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('concierge')) return <UserCheck className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('shower')) return <Droplets className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('bar')) return <Wine className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('family') || lowerCaseAmenity.includes('connect')) return <Users className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
  if (lowerCaseAmenity.includes('linen') || lowerCaseAmenity.includes('premium')) return <Sparkles className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;

  return <Bed className="w-4 h-4 text-[#8E7D67]" strokeWidth={1.5} />;
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
    <div className="relative w-full h-full overflow-hidden bg-white">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative bg-white">
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="absolute inset-0 w-full h-full cursor-pointer"
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              onClick={onGalleryOpen}
            />
          </div>
        ))}
      </div>

      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-[#3A3532]/40 hover:bg-[#3A3532]/60 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={2} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-[#3A3532]/40 hover:bg-[#3A3532]/60 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2} />
      </button>

      <div className="absolute bottom-6 right-6 text-white/50 text-[10px] font-['Roboto'] tracking-wider">
        {currentIndex + 1} — {images.length}
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
    <div className="fixed inset-0 bg-[#3A3532]/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div
        className="w-full h-full relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#F4F3EB]/50 z-10 hover:text-[#F4F3EB]/80 transition-colors"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" strokeWidth={1} />
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
          className="absolute left-8 top-1/2 -translate-y-1/2 text-[#F4F3EB]/50 hover:text-[#F4F3EB]/80 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-10 h-10" strokeWidth={1} />
        </button>

        <button
          onClick={onNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-[#F4F3EB]/50 hover:text-[#F4F3EB]/80 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-10 h-10" strokeWidth={1} />
        </button>

        <div className="absolute bottom-6 left-0 right-0 text-center text-[#F4F3EB]/40 text-xs font-['Roboto'] tracking-wider">
          {currentIndex + 1} — {images.length}
        </div>
      </div>
    </div>
  );
};

const VillaKyma: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<{ id: string; images: string[] } | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  const villa = villaData.find(v => v.id === 'villa-kyma')!;
  const rooms = roomData.filter(room => room.villaId === 'villa-kyma');

  useEffect(() => {
    const initialIndexes: { [key: string]: number } = {};
    initialIndexes[villa.id] = 0;
    rooms.forEach(room => {
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
  }, []);

  const handlePrevImage = (id: string) => {
    setCurrentImageIndexes((prev) => {
      const currentIndex = prev[id] ?? 0;
      let images: string[] = [];

      if (id === villa.id) {
        images = villa.images;
      } else {
        const room = rooms.find(r => r.id === id);
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

      if (id === villa.id) {
        images = villa.images;
      } else {
        const room = rooms.find(r => r.id === id);
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

  return (
    <section className="bg-[#F4F3EB] w-full pt-48 md:pt-64">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <Link to="/rooms#villas" className="inline-flex items-center text-[#8E7D67] hover:text-[#3A3532] mb-8 font-['Roboto'] uppercase text-sm tracking-wider">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Villas
        </Link>
        <h2 className="text-5xl md:text-6xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide leading-tight mb-8">
          {villa.name}
        </h2>
      </div>

      {/* Rooms Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 pb-32">
        <h3 className="text-3xl md:text-4xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide mb-12 text-center">
          Rooms
        </h3>
        {rooms.map((room, index) => (
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
                <div className="mb-8 space-y-2">
                  <p className="text-[#8E7D67] font-['Roboto'] text-sm font-medium">{room.specs.size}</p>
                  <p className="text-[#8E7D67] font-['Roboto'] text-sm font-medium uppercase">{room.specs.capacity}</p>
                  <p className="text-[#8E7D67] font-['Roboto'] text-sm font-medium uppercase">{room.specs.features}</p>
                </div>
                <p className="text-[#3A3532] font-['Roboto'] leading-relaxed text-[15px] md:text-base mb-8">
                  {room.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 mt-0.5">{getAmenityIcon(amenity)}</span>
                      <span className="text-[13px] md:text-sm text-[#3A3532] font-['Roboto']">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default VillaKyma;
