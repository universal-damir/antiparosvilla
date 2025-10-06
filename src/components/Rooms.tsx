import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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
  Car,
  MapPin
} from "lucide-react";

// Property hotspots for interactive map
// Upper level = Villa Kyma, Lower level = Villa Ammos
const propertyHotspots = [
  // Villa Kyma (Upper Level) - Rooms from left to right
  { id: 1, label: "Kyma Room 5", x: 28, y: 58, villa: "kyma" },
  { id: 2, label: "Kyma Room 6", x: 57.5, y: 58, villa: "kyma" },
  { id: 3, label: "Kyma Room 7", x: 66, y: 58, villa: "kyma" },
  { id: 4, label: "Kyma Room 8", x: 75.5, y: 58, villa: "kyma" },
  { id: 5, label: "Kyma Kitchen", x: 51, y: 58, villa: "kyma" },
  { id: 6, label: "Kyma Outdoor Dining", x: 41, y: 58, villa: "kyma" },
  { id: 7, label: "Kyma Pool Area", x: 54, y: 60, villa: "kyma" },

  // Villa Ammos (Lower Level) - Rooms from left to right
  { id: 8, label: "Ammos Room 1", x: 24, y: 70, villa: "ammos" },
  { id: 9, label: "Ammos Room 2", x: 59.5, y: 71, villa: "ammos" },
  { id: 10, label: "Ammos Room 3", x: 70.5, y: 73, villa: "ammos" },
  { id: 11, label: "Ammos Room 4", x: 80, y: 73, villa: "ammos" },
  { id: 12, label: "Ammos Kitchen", x: 50, y: 70, villa: "ammos" },
  { id: 13, label: "Ammos Outdoor Sitting", x: 33, y: 84, villa: "ammos" },
  { id: 14, label: "Ammos Pool Area", x: 48, y: 79, villa: "ammos" },
];

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

// Interactive Property Map Component
const InteractivePropertyMap: React.FC = () => {
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [imagePosition, setImagePosition] = useState({ width: 0, height: 0, left: 0, top: 0 });

  React.useEffect(() => {
    const updateImagePosition = () => {
      if (imageRef.current) {
        const img = imageRef.current;
        const naturalAspectRatio = img.naturalWidth / img.naturalHeight;
        const containerWidth = img.parentElement?.clientWidth || 0;
        const containerHeight = img.parentElement?.clientHeight || 0;
        const containerAspectRatio = containerWidth / containerHeight;

        let renderedWidth, renderedHeight, left, top;

        if (containerAspectRatio > naturalAspectRatio) {
          // Container is wider - image height fills, width is centered
          renderedHeight = containerHeight;
          renderedWidth = containerHeight * naturalAspectRatio;
          left = (containerWidth - renderedWidth) / 2;
          top = 0;
        } else {
          // Container is taller - image width fills, height is centered
          renderedWidth = containerWidth;
          renderedHeight = containerWidth / naturalAspectRatio;
          left = 0;
          top = (containerHeight - renderedHeight) / 2;
        }

        setImagePosition({
          width: renderedWidth,
          height: renderedHeight,
          left,
          top
        });
      }
    };

    const img = imageRef.current;
    if (img) {
      if (img.complete) {
        updateImagePosition();
      }
      img.addEventListener('load', updateImagePosition);
    }

    window.addEventListener('resize', updateImagePosition);

    return () => {
      window.removeEventListener('resize', updateImagePosition);
      if (img) {
        img.removeEventListener('load', updateImagePosition);
      }
    };
  }, []);

  const handleHotspotClick = (e: React.MouseEvent | React.TouchEvent, id: number) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    // Toggle tooltip on click/tap
    if (activeHotspot === id) {
      setActiveHotspot(null);
    } else {
      setActiveHotspot(id);
    }
  };

  const handleContainerClick = () => {
    setActiveHotspot(null);
  };

  const handleMouseEnter = (id: number) => {
    // Only set hover state if no active hotspot (not in tap mode)
    if (activeHotspot === null) {
      setHoveredHotspot(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredHotspot(null);
  };

  return (
    <div className="relative w-full h-full" onClick={handleContainerClick}>
      <img
        ref={imageRef}
        src="/DJI_20250725182120_0532_D.jpg"
        alt="Property Overview"
        className="w-full h-full object-contain"
      />
      {/* Hotspot markers - positioned on the actual rendered image */}
      {imagePosition.width > 0 && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: `${imagePosition.width}px`,
            height: `${imagePosition.height}px`,
            left: `${imagePosition.left}px`,
            top: `${imagePosition.top}px`
          }}
        >
          {propertyHotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onMouseEnter={() => handleMouseEnter(hotspot.id)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleHotspotClick(e, hotspot.id)}
            >
              {/* Map pin icon */}
              <div className="relative">
                <MapPin className="w-4 h-4 md:w-6 md:h-6 text-[#3A3532] drop-shadow-lg filter" style={{ filter: 'drop-shadow(0 0 2px white) drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
              </div>

              {/* Tooltip */}
              {(hoveredHotspot === hotspot.id || activeHotspot === hotspot.id) && (
                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-['Roboto'] whitespace-nowrap rounded shadow-lg z-10 ${
                  hotspot.villa === 'ammos'
                    ? 'bg-[#8E7D67] text-white'
                    : 'bg-[#3A3532] text-white'
                }`}>
                  {hotspot.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className={`border-[3px] border-transparent ${
                      hotspot.villa === 'ammos'
                        ? 'border-t-[#8E7D67]'
                        : 'border-t-[#3A3532]'
                    }`}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
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

      <button
        onClick={onGalleryOpen}
        className="absolute bottom-6 left-6 text-white/60 uppercase text-[10px] font-['Roboto'] tracking-[0.2em] hover:text-white/80 transition-all duration-200"
        aria-label="Open gallery"
      >
        View Gallery
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

const Rooms: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<{ id: string; images: string[] } | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'villas'>('overview');
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const initialIndexes: { [key: string]: number } = {};

    initialIndexes['property'] = 0;
    villaData.forEach(villa => {
      initialIndexes[villa.id] = 0;
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
      <div className="max-w-6xl mx-auto px-4 pb-8 text-center">
        <h2 className="text-5xl md:text-6xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide leading-tight mb-12">
          STAY IN STYLE
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-16">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-8 py-3 font-['Roboto'] uppercase text-xs tracking-[0.2em] transition-all duration-300 ${
              activeTab === 'overview'
                ? 'bg-[#3A3532] text-white'
                : 'bg-transparent text-[#3A3532] border border-[#3A3532]/30 hover:border-[#3A3532]/60'
            }`}
          >
            Property Overview
          </button>
          <button
            onClick={() => setActiveTab('villas')}
            className={`px-8 py-3 font-['Roboto'] uppercase text-xs tracking-[0.2em] transition-all duration-300 ${
              activeTab === 'villas'
                ? 'bg-[#3A3532] text-white'
                : 'bg-transparent text-[#3A3532] border border-[#3A3532]/30 hover:border-[#3A3532]/60'
            }`}
          >
            Villas
          </button>
        </div>
      </div>

      {/* Property Overview Section */}
      {activeTab === 'overview' && (
        <div className="max-w-6xl mx-auto px-4 pb-32 -mt-8">
          <div
            id="property-overview"
            data-animate="true"
            className={`bg-white shadow-sm rounded-sm overflow-hidden transition-all duration-700 transform ${
              visibleCards.has('property-overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {/* Interactive Property Map with Hover Tooltips */}
            <div className="h-[350px] sm:h-[500px] md:h-[700px] lg:h-[800px] relative bg-[#F4F3EB]">
              <InteractivePropertyMap />
            </div>

            {/* Map instruction text */}
            <div className="pt-2 pb-4 px-4 hidden md:block bg-[#F4F3EB]">
              <p className="text-[#3A3532]/50 text-xs font-['Roboto'] text-center italic">
                Hover over the photo pins to explore room locations and layout
              </p>
            </div>

            <div className="p-8 md:p-12 lg:p-16 mt-8">
              <h3 className="text-3xl md:text-4xl font-['Roboto'] text-black uppercase font-bold tracking-wide mb-8">
                {propertyOverview.title}
              </h3>
              <div className="space-y-6">
                {(Array.isArray(propertyOverview.description) ? propertyOverview.description : [propertyOverview.description]).map((paragraph, index) => (
                  <p key={index} className="text-[#3A3532] font-['Roboto'] leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                onClick={() => setActiveTab('villas')}
                className="mt-8 bg-[#3A3532] text-white px-6 py-3 font-['Roboto'] uppercase text-sm tracking-wide hover:bg-[#2A2522] transition-colors"
              >
                See Both Villas
              </button>
            </div>

            {/* Gallery Section Header */}
            <div className="px-8 md:px-12 lg:px-16 py-4 md:py-6 bg-white border-t border-[#3A3532]/10">
              <h4 className="text-lg md:text-xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide">
                Outdoor Gallery - See More
              </h4>
            </div>

            {/* Carousel moved to bottom */}
            <div className="h-[400px] md:h-[500px]">
              <ImageCarousel
                images={propertyOverview.images}
                currentIndex={currentImageIndexes['property'] ?? 0}
                onPrev={() => handlePrevImage('property')}
                onNext={() => handleNextImage('property')}
                onGalleryOpen={() => openGallery('property', propertyOverview.images)}
                alt="Property Gallery"
              />
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
                  <Link
                    to={`/rooms/${villa.id === 'villa-ammos' ? 'ammos' : 'kyma'}`}
                    className="text-left hover:opacity-70 transition-opacity"
                  >
                    <h3 className="text-2xl md:text-3xl font-['Roboto'] text-black uppercase font-bold tracking-wide mb-4 underline underline-offset-4 decoration-1">
                      {villa.name}
                    </h3>
                  </Link>
                  <p className="text-black font-['Roboto'] leading-relaxed text-base md:text-lg mb-6">
                    {villa.description}
                  </p>
                  <div className="text-[#59452E] font-['Roboto'] leading-relaxed text-sm space-y-2">
                    <p>Each villa features four luxurious bedrooms with direct sea views, a fully equipped common kitchen, comfortable sitting areas, and outdoor dining space overlooking the Aegean.</p>
                    {villa.id === 'villa-ammos' && (
                      <p>Villa Ammos includes a private pool, indoor gym facility, and connecting options between Rooms 3 & 4 for families.</p>
                    )}
                    {villa.id === 'villa-kyma' && (
                      <p>Villa Kyma features a stunning infinity pool, Room 5 with private balcony, and connecting options between Rooms 6 & 7 for families.</p>
                    )}
                    <p className="pt-2">Daily maid service, private parking, and concierge assistance included.</p>
                  </div>
                  <Link
                    to={`/rooms/${villa.id === 'villa-ammos' ? 'ammos' : 'kyma'}`}
                    className="mt-8 inline-block bg-[#3A3532] text-white px-6 py-3 font-['Roboto'] uppercase text-sm tracking-wide hover:bg-[#2A2522] transition-colors"
                  >
                    View {villa.name} Rooms
                  </Link>
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