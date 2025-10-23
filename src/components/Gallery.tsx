import React, { useState, useEffect, useCallback } from "react";
import { galleryImages as defaultGalleryImages } from "../data/galleryData";
import { ChevronLeft, ChevronRight, X, Edit3, Save, XCircle } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GalleryImage } from "../types";

interface SortableImageProps {
  image: GalleryImage;
  index: number;
  onImageClick: (index: number) => void;
  isEditMode: boolean;
}

const SortableImage: React.FC<SortableImageProps> = ({ image, index, onImageClick, isEditMode }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`break-inside-avoid overflow-hidden group relative mb-4 ${
        isEditMode ? 'cursor-move' : 'cursor-pointer'
      } ${isDragging ? 'z-50' : ''}`}
      {...(isEditMode ? { ...attributes, ...listeners } : {})}
      onClick={() => !isEditMode && onImageClick(index)}
      tabIndex={0}
      aria-label={`View ${image.alt}`}
      onKeyDown={(e) => !isEditMode && e.key === 'Enter' && onImageClick(index)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full object-cover transition-transform duration-700 ${
          !isEditMode ? 'group-hover:scale-110' : ''
        }`}
      />
      {isEditMode && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <span className="text-white font-['Roboto'] text-sm bg-black/50 px-3 py-1 rounded">
            Drag to reorder
          </span>
        </div>
      )}
      {!isEditMode && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white font-['Roboto'] text-lg">View</span>
        </div>
      )}
    </div>
  );
};

const Gallery: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(defaultGalleryImages);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Required swipe distance in pixels to register as a swipe
  const minSwipeDistance = 50;

  // Load saved gallery order on mount
  useEffect(() => {
    const loadGalleryOrder = async () => {
      try {
        const response = await fetch('/api/get-gallery-order');
        const data = await response.json();

        if (data.order && Array.isArray(data.order)) {
          // Reorder images based on saved order
          const orderedImages = data.order
            .map((id: string) => defaultGalleryImages.find((img: GalleryImage) => img.id === id))
            .filter((img: GalleryImage | undefined): img is GalleryImage => img !== undefined);

          // Add any new images that weren't in the saved order
          const newImages = defaultGalleryImages.filter(
            (img: GalleryImage) => !data.order.includes(img.id)
          );

          setGalleryImages([...orderedImages, ...newImages]);
        }
      } catch (error) {
        console.error('Failed to load gallery order:', error);
        // Use default order if loading fails
      }
    };

    loadGalleryOrder();
  }, []);

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
  }, [selectedImageIndex, galleryImages.length]);

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1;
    });
  }, [selectedImageIndex, galleryImages.length]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setGalleryImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleSaveOrder = async () => {
    setIsSaving(true);
    try {
      // Save both IDs and filenames for easier retrieval
      const order = galleryImages.map(img => img.id);
      const filenames = galleryImages.map(img => img.src.replace('/', ''));

      const response = await fetch('/api/save-gallery-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order, filenames }),
      });

      if (response.ok) {
        setIsEditMode(false);
        alert('Gallery rearranged successfully!');
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      console.error('Failed to save gallery order:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    // Reload the page to reset to saved order
    window.location.reload();
  };

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
    <div className="bg-[#F4F3EB] pt-64">
      {/* Gallery Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
            GALLERY
          </p>
          <h1 className="text-4xl font-['Roboto'] text-[#3A3532] mb-8 uppercase">
            FEAST YOUR EYES
          </h1>
          <p className="text-[#3A3532] max-w-4xl mx-auto font-['Roboto'] leading-relaxed">
            Explore our visual journey through Antiparos paradise. From our elegant villa interiors
            to stunning Aegean Sea views, lush gardens to serene poolside retreats. Discover the
            perfect blend of traditional Cycladic architecture and contemporary luxury design,
            all set against the backdrop of Antiparos' natural beauty.
          </p>
        </div>

        {/* Edit Mode Controls */}
        <div className="flex justify-center mt-8 gap-4">
          {!isEditMode ? (
            <button
              onClick={() => setIsEditMode(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#8E7D67] text-white font-['Roboto'] uppercase tracking-wider hover:bg-[#7A6B57] transition-colors"
            >
              <Edit3 size={18} />
              Edit Gallery Order
            </button>
          ) : (
            <>
              <button
                onClick={handleSaveOrder}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-['Roboto'] uppercase tracking-wider hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Save size={18} />
                {isSaving ? 'Saving...' : 'Save Order'}
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-['Roboto'] uppercase tracking-wider hover:bg-red-700 transition-colors"
              >
                <XCircle size={18} />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Pinterest-style Gallery */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={galleryImages.map(img => img.id)}
            strategy={rectSortingStrategy}
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <SortableImage
                  key={image.id}
                  image={image}
                  index={index}
                  onImageClick={handleImageClick}
                  isEditMode={isEditMode}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-[#3A3532]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-6 right-6 text-[#F4F3EB]/50 z-10 hover:text-[#F4F3EB]/80 transition-colors"
            onClick={handleCloseModal}
            aria-label="Close image"
          >
            <X size={20} strokeWidth={1} />
          </button>

          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 text-[#F4F3EB]/50 hover:text-[#F4F3EB]/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} strokeWidth={1} />
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
            className="absolute right-8 top-1/2 -translate-y-1/2 text-[#F4F3EB]/50 hover:text-[#F4F3EB]/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-[#F4F3EB]/40 font-['Roboto'] text-xs tracking-wider">
            {selectedImageIndex + 1} — {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
