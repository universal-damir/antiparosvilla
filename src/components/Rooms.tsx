import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { villaData, propertyOverview } from "../data/roomData";
import {
  ChevronLeft,
  ChevronRight,
  X,
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
  Home,
  ChefHat
} from "lucide-react";

// Property hotspots for interactive map
// Upper level = Villa Kyma, Lower level = Villa Ammos
// x, y = center position, width/height = size of interactive area (in percentage)
const propertyHotspots = [
  // Villa Kyma (Upper Level) - Rooms from left to right
  { id: 1, label: "Kyma Room 5", x: 27, y: 55.5, width: 12, height: 5, villa: "kyma" },
  { id: 2, label: "Kyma Room 6", x: 57.5, y: 56, width: 5, height: 6.5, villa: "kyma" },
  { id: 3, label: "Kyma Room 7", x: 66, y: 56, width: 5, height: 6.5, villa: "kyma" },
  { id: 4, label: "Kyma Room 8", x: 75.5, y: 56, width: 5, height: 6.5, villa: "kyma" },
  { id: 5, label: "Kyma Outdoor Dining Area", x: 50, y: 55.5, width: 7.5, height: 8, villa: "kyma" },
  { id: 6, label: "Kyma Kitchen & Living Area", x: 40, y: 58, width: 11, height: 7.5, villa: "kyma" },
  { id: 7, label: "Kyma Pool Area", x: 59, y: 61.5, width: 20, height: 3, villa: "kyma" },
  {id: 16, label: "Kyma Outdoor Sitting Area", x: 26, y: 61, width: 9, height: 5, villa: "kyma" },

  // Villa Ammos (Lower Level) - Rooms from left to right
  { id: 8, label: "Ammos Room 1", x: 24, y: 71, width: 5, height: 6.5, villa: "ammos" },
  { id: 9, label: "Ammos Room 2", x: 59.5, y: 71.5, width: 5, height: 6.5, villa: "ammos" },
  { id: 10, label: "Ammos Room 3", x: 70.5, y: 73, width: 5, height: 6.5, villa: "ammos" },
  { id: 11, label: "Ammos Room 4", x: 80.8, y: 73, width: 5, height: 6.5, villa: "ammos" },
  { id: 12, label: "Ammos Outdoor Dining Area", x: 51.2, y: 70, width: 5, height: 7.5, villa: "ammos" },
  { id: 17, label: "Gym", x: 46.5, y: 70, width: 2.2, height: 7.5, villa: "ammos" },
  { id: 13, label: "Ammos Outdoor Sitting Area", x: 33, y: 84, width: 16, height: 7, villa: "ammos" },
  { id: 14, label: "Ammos Pool Area", x: 55, y: 79, width: 19.5, height: 6, villa: "ammos" },
  { id: 15, label: "Ammos Kitchen & Living Area", x: 36, y: 71, width: 16.5, height: 11, villa: "ammos" },
];

// Interactive Property Map Component
const InteractivePropertyMap: React.FC = () => {
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [displayedHotspot, setDisplayedHotspot] = useState<number | null>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [imagePosition, setImagePosition] = useState({ width: 0, height: 0, left: 0, top: 0 });
  const zoomTimeoutRef = React.useRef<number | null>(null);

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
      setDisplayedHotspot(id);

      // Clear any existing timeout
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredHotspot(null);

    // Keep zoom for 3 seconds before zooming out
    zoomTimeoutRef.current = setTimeout(() => {
      setDisplayedHotspot(null);
    }, 3000);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
      }
    };
  }, []);

  const getTransformOrigin = () => {
    if (displayedHotspot !== null || activeHotspot !== null) {
      const hotspot = propertyHotspots.find(h => h.id === (displayedHotspot || activeHotspot));
      if (hotspot) {
        return `${hotspot.x}% ${hotspot.y}%`;
      }
    }
    return 'center center';
  };

  return (
    <div className="relative w-full h-full overflow-hidden" onClick={handleContainerClick}>
      <img
        ref={imageRef}
        src="/DJI_20250725182120_0532_D.jpg"
        alt="Property Overview"
        className="w-full h-full object-contain transition-all duration-500 ease-out"
        style={{
          transform: displayedHotspot !== null || activeHotspot !== null ? 'scale(1.15)' : 'scale(1)',
          transformOrigin: getTransformOrigin()
        }}
      />
      {/* Hotspot markers - positioned on the actual rendered image */}
      {imagePosition.width > 0 && (
        <div
          className="absolute pointer-events-none transition-all duration-500 ease-out"
          style={{
            width: `${imagePosition.width}px`,
            height: `${imagePosition.height}px`,
            left: `${imagePosition.left}px`,
            top: `${imagePosition.top}px`,
            transform: displayedHotspot !== null || activeHotspot !== null ? 'scale(1.15)' : 'scale(1)',
            transformOrigin: getTransformOrigin()
          }}
        >
          {propertyHotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute cursor-pointer pointer-events-auto group"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                width: `${hotspot.width}%`,
                height: `${hotspot.height}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => handleMouseEnter(hotspot.id)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleHotspotClick(e, hotspot.id)}
            >
              {/* Invisible rectangular hover area */}
              <div className="w-full h-full"></div>

              {/* Tooltip - shown inside the rectangle */}
              {(hoveredHotspot === hotspot.id || activeHotspot === hotspot.id) && (
                <div className={`absolute inset-0 flex items-center justify-center rounded-md ${
                  hotspot.villa === 'ammos'
                    ? 'bg-[#8E7D67]/80 text-white'
                    : 'bg-[#3A3532]/80 text-white'
                }`}>
                  <span className="text-[5px] md:text-[10px] font-['Roboto'] font-semibold text-center px-1">
                    {hotspot.label}
                  </span>
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
  onDotClick: (index: number) => void;
}> = ({ images, currentIndex, onGalleryOpen, alt, onDotClick }) => {
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

      {/* Dot Navigation - Show max 5 dots */}
      <div className="absolute bottom-16 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.length <= 5 ? (
          // Show all dots if 5 or fewer images
          images.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8 shadow-lg'
                  : 'bg-white/70 hover:bg-white shadow-md'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))
        ) : (
          // Show sliding window of 5 dots
          (() => {
            // Calculate which dots to show (sliding window around current index)
            const maxDots = 5;
            const halfWindow = Math.floor(maxDots / 2);
            let startIndex = Math.max(0, currentIndex - halfWindow);
            let endIndex = Math.min(images.length, startIndex + maxDots);

            // Adjust if we're near the end
            if (endIndex - startIndex < maxDots) {
              startIndex = Math.max(0, endIndex - maxDots);
            }

            const dotsToShow = [];
            for (let i = startIndex; i < endIndex; i++) {
              dotsToShow.push(i);
            }

            return dotsToShow.map((imageIndex) => (
              <button
                key={imageIndex}
                onClick={() => onDotClick(imageIndex)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  imageIndex === currentIndex
                    ? 'bg-white w-8 shadow-lg'
                    : 'bg-white/70 hover:bg-white shadow-md'
                }`}
                aria-label={`Go to image ${imageIndex + 1}`}
              />
            ));
          })()
        )}
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

  // Check URL hash to determine which tab to show
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#villas') {
      setActiveTab('villas');
    }
  }, []);

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

  // Keyboard navigation for all carousels
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (activeTab === 'overview') {
          if (e.key === 'ArrowLeft') {
            handlePrevImage('property');
          } else {
            handleNextImage('property');
          }
        } else if (activeTab === 'villas') {
          // Find which villa carousel is being hovered
          villaData.forEach(villa => {
            const carouselElement = document.querySelector(`[data-carousel="${villa.id}"]`);
            if (carouselElement && carouselElement.matches(':hover')) {
              if (e.key === 'ArrowLeft') {
                handlePrevImage(villa.id);
              } else {
                handleNextImage(villa.id);
              }
            }
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  const handleDotClick = (id: string, index: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [id]: index
    }));
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
            <div className="pt-2 pb-4 px-4 bg-[#F4F3EB]">
              <p className="text-[#3A3532]/50 text-xs font-['Roboto'] text-center italic">
                <span className="hidden md:inline">Hover over the photo to explore room locations and see the layout</span>
                <span className="md:hidden">Tap on the photo to explore room locations and see the layout</span>
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

            {/* Carousel moved to bottom */}
            <div className="h-[550px] md:h-[680px] lg:h-[800px] p-8 md:p-12">
              <ImageCarousel
                images={propertyOverview.images}
                currentIndex={currentImageIndexes['property'] ?? 0}
                onPrev={() => handlePrevImage('property')}
                onNext={() => handleNextImage('property')}
                onGalleryOpen={() => openGallery('property', propertyOverview.images)}
                onDotClick={(index) => handleDotClick('property', index)}
                alt="Property Gallery"
              />
            </div>

          </div>
        </div>
      )}

      {/* Villas Section */}
      {activeTab === 'villas' && (
        <div className="max-w-6xl mx-auto px-4 pt-6 md:pt-12 pb-32">
          {villaData.map((villa, index) => (
            <div
              key={villa.id}
              id={villa.id}
              data-animate="true"
              className={`mb-12 md:mb-24 bg-white shadow-sm rounded-sm overflow-hidden transition-all duration-700 transform ${
                visibleCards.has(villa.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Villa Name and Subtitle */}
              <div className="px-6 md:px-12 lg:px-16 pt-6 md:pt-12 lg:pt-16 pb-2 md:pb-6">
                <Link
                  to={`/rooms/${villa.id === 'villa-ammos' ? 'ammos' : 'kyma'}`}
                  className="text-left hover:opacity-70 transition-opacity block mb-2"
                >
                  <h3 className="text-3xl md:text-4xl font-['Roboto'] text-[#3A3532] uppercase font-bold tracking-wide">
                    {villa.name}
                  </h3>
                </Link>
                <p className="text-[#8E7D67] font-['Roboto'] text-sm md:text-base italic mb-0">
                  {villa.id === 'villa-ammos'
                    ? 'A boho chic villa ideal for your tranquil retreat'
                    : 'Harmony Above the Aegean: Where Cycladic Architecture Meets Endless Blue'}
                </p>
              </div>

              {/* Image Carousel - Full Width */}
              <div className="h-[400px] md:h-[550px]" data-carousel={villa.id}>
                <ImageCarousel
                  images={villa.images}
                  currentIndex={currentImageIndexes[villa.id] ?? 0}
                  onPrev={() => handlePrevImage(villa.id)}
                  onNext={() => handleNextImage(villa.id)}
                  onGalleryOpen={() => openGallery(villa.id, villa.images)}
                  onDotClick={(index) => handleDotClick(villa.id, index)}
                  alt={villa.name}
                />
              </div>

              {/* Description */}
              <div className="px-6 pt-0 pb-6 md:p-12 lg:p-16">
                <div className="space-y-4 text-[#3A3532] font-['Roboto'] leading-relaxed text-base max-w-5xl mx-auto">
                  {villa.id === 'villa-ammos' ? (
                    <>
                      <p>Villa Ammos, located on the lower level, offers stunning panoramic views of the Aegean Sea, Agios Georgios Bay, and Despotiko Island from every corner inside and outside the villa, allowing guests to enjoy breathtaking scenery throughout their stay.</p>
                      <p>The villa boasts four elegantly appointed ensuite bedrooms, a fully equipped kitchen with a stylish island and premium appliances, a cozy indoor lounge, a shaded outdoor dining area for up to ten guests, and a comfortable outdoor seating space perfect for taking in the serene views.</p>
                      <p>Experience ultimate comfort and privacy in this elegant villa, featuring its own private pool and a fully equipped indoor gym complete with a treadmill, punching bag, free weights, and a workout bench. The villa accommodates up to 10 guests, ensuring a luxurious stay for everyone. Perfect for families, Rooms 3 and 4 can be connected for added convenience.</p>
                      <p>The villa is embracing a bring-your-own-device concept. Guests can enjoy complimentary high-speed satellite internet access throughout their stay, allowing them to connect effortlessly on their personal devices. A projector is available upon request, perfect for movie nights or watching your favorite sports events in style.</p>
                    </>
                  ) : (
                    <>
                      <p>Villa Kyma, positioned on the upper level, offers breathtaking views. The harmonious geometrical proportions of the Cycladic architecture meet the endless blue of the Aegean Sea creating a striking visual experience in which architecture and nature blend seamlessly, inspiring a profound sense of harmony and serenity. The villa's design highlights open, airy spaces that invite the stunning seascape indoors, with expansive terraces and large windows framing panoramic views of the bay and surrounding islands, making it an ideal retreat for those seeking both luxury and tranquility.</p>
                      <p>Villa Kyma features four luxurious ensuite bedrooms, a spacious open-plan kitchen with a kitchen island and high-end appliances, and an elegant sitting area that seamlessly connects indoor and outdoor living spaces.</p>
                      <p>The villa offers a stunning temperature-controlled infinity pool perfect for relaxing swims with breathtaking sea views. It also features an outdoor shower, a shaded dining area that comfortably seats 12 guests, a outdoor sitting area, and a fully equipped outdoor gym complete with a training bike, free weights, and a workout bench. This combination of luxurious amenities provides a perfect balance of leisure, and fitness in a spectacular natural setting.</p>
                      <p>The outdoor bar and BBQ area elegantly blends stone-built architecture with the natural rocky terrain of the Agios Georgios hillside, creating a harmonious setting perfect for alfresco dining and entertaining against the stunning backdrop of the Aegean landscape.</p>
                      <p>The villa accommodates a maximum of 9 guests, ensuring both comfort and privacy for all. For families, there is an option to connect Rooms 6 and 7.</p>
                      <p>The villa is embracing a bring-your-own-device concept. Guests can enjoy complimentary high-speed satellite internet access throughout their stay, allowing them to connect effortlessly on their personal devices. A projector is available upon request, perfect for movie nights or watching your favorite sports events in style.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Amenities & CTA */}
              <div className="border-t border-[#3A3532]/10">
                <div className="p-10 md:p-12 lg:p-16">
                  <div className="max-w-5xl mx-auto">
                    {/* Amenities Section - Grouped */}
                    <div className="mb-10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Room Features */}
                        <div>
                          <h4 className="text-xs font-['Roboto'] uppercase tracking-[0.15em] text-[#3A3532] mb-6 font-semibold">Features</h4>
                          <div className="space-y-3 text-[#3A3532] text-sm font-['Roboto']">
                            {villa.id === 'villa-ammos' ? (
                              <>
                                <div className="flex items-start"><Bed className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>King size beds or Queen size beds</span></div>
                                <div className="flex items-start"><Snowflake className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Air conditioning</span></div>
                                <div className="flex items-start"><Wind className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Ceiling Fans in all rooms</span></div>
                                <div className="flex items-start"><Lock className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Safe deposit box</span></div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-start"><Bed className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>King size beds or Queen size beds</span></div>
                                <div className="flex items-start"><Snowflake className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Air conditioning</span></div>
                                <div className="flex items-start"><Wind className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Ceiling Fans in all rooms</span></div>
                                <div className="flex items-start"><Lock className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Safe deposit box</span></div>
                                
                              </>
                            )}
                          </div>
                        </div>

                        {/* Outdoor Amenities */}
                        <div>
                          <h4 className="text-xs font-['Roboto'] uppercase tracking-[0.15em] text-[#3A3532] mb-6 font-semibold">Amenities</h4>
                          <div className="space-y-3 text-[#3A3532] text-sm font-['Roboto']">
                            {villa.id === 'villa-ammos' ? (
                              <>
                                <div className="flex items-start"><Waves className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Pool with shallow end for kids</span></div>
                                <div className="flex items-start"><Droplets className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Outdoor shower</span></div>
                                <div className="flex items-start"><Flame className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>BBQ</span></div>
                                <div className="flex items-start"><Dumbbell className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Indoor gym</span></div>
                                <div className="flex items-start"><Home className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Maid's room (upon request & subject to availability)</span></div>
                                <div className="flex items-start"><Sparkles className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Projector (upon request & subject to availability)</span></div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-start"><Waves className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Temperature Controlled Swimming Pool</span></div>
                                <div className="flex items-start"><Droplets className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Outdoor shower</span></div>
                                <div className="flex items-start"><Wine className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Outdoor Bar/BBQ</span></div>
                                <div className="flex items-start"><Dumbbell className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Outdoor gym</span></div>
                                <div className="flex items-start"><Home className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Maid's room (upon request & subject to availability)</span></div>
                                <div className="flex items-start"><Sparkles className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Projector (upon request & subject to availability)</span></div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <h4 className="text-xs font-['Roboto'] uppercase tracking-[0.15em] text-[#3A3532] mb-6 font-semibold">Services</h4>
                          <div className="space-y-3 text-[#3A3532] text-sm font-['Roboto']">
                            {villa.id === 'villa-ammos' ? (
                              <>
                                <div className="flex items-start"><Sparkles className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Daily maid service</span></div>
                                <div className="flex items-start"><ChefHat className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Chef on demand</span></div>
                                <div className="flex items-start"><Wifi className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Complimentary WiFi</span></div>
                                <div className="flex items-start"><UserCheck className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Concierge Assistance</span></div>
                                <div className="flex items-start"><Car className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Private parking</span></div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-start"><Sparkles className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Daily maid service</span></div>
                                <div className="flex items-start"><ChefHat className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Chef on demand</span></div>
                                <div className="flex items-start"><Wifi className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Complimentary WiFi</span></div>
                                <div className="flex items-start"><UserCheck className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Concierge Assistance</span></div>
                                <div className="flex items-start"><Car className="w-4 h-4 text-[#8E7D67] mr-2 mt-0.5 flex-shrink-0" strokeWidth={1.5} /><span>Private parking</span></div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center lg:justify-start">
                      <Link
                        to={`/rooms/${villa.id === 'villa-ammos' ? 'ammos' : 'kyma'}`}
                        className="inline-block bg-[#3A3532] text-white px-8 py-4 font-['Roboto'] uppercase text-xs tracking-[0.15em] hover:bg-[#8E7D67] transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        See the Rooms
                      </Link>
                    </div>
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