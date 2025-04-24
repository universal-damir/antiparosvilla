import React, { useState, useEffect, useCallback } from "react";
import { galleryImages } from "../data/galleryData";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Required swipe distance in pixels to register as a swipe
  const minSwipeDistance = 50;

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1;
    });
  }, [selectedImageIndex]);

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1;
    });
  }, [selectedImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      switch (e.key) {
        case "ArrowLeft":
          handlePrevImage();
          break;
        case "ArrowRight":
          handleNextImage();
          break;
        case "Escape":
          handleCloseModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrevImage, handleNextImage]);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left → next image
        handleNextImage();
      } else {
        // Swipe right → previous image
        handlePrevImage();
      }
    }
    
    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="bg-[#F4F3EB] pt-36">
      {/* Gallery Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['American_Typewriter']">
            GALLERY
          </p>
          <h1 className="text-4xl font-['American_Typewriter'] text-[#3A3532] mb-8 uppercase">
            FEAST YOUR EYES
          </h1>
          <p className="text-[#3A3532] max-w-4xl mx-auto font-['American_Typewriter'] leading-relaxed">
            Explore our visual journey through Antiparos paradise. From our elegant villa interiors 
            to stunning Aegean Sea views, lush gardens to serene poolside retreats. Discover the 
            perfect blend of traditional Cycladic architecture and contemporary luxury design, 
            all set against the backdrop of Antiparos' natural beauty.
          </p>
        </div>
      </div>

      {/* Pinterest-style Gallery */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="break-inside-avoid overflow-hidden group relative cursor-pointer mb-4"
              onClick={() => handleImageClick(index)}
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-['American_Typewriter'] text-lg">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            className="absolute top-4 right-4 text-white z-10 p-2 rounded-full hover:bg-white/10"
            onClick={handleCloseModal}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt={galleryImages[selectedImageIndex].alt}
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white font-['American_Typewriter']">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;