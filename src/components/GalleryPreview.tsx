import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/galleryData";

const GalleryPreview: React.FC = () => {
  // Select 6 random images for the preview
  const [previewImages, setPreviewImages] = useState(galleryImages.slice(0, 6));

  useEffect(() => {
    // Shuffle and select 6 random images
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setPreviewImages(shuffled.slice(0, 6));
  }, []);
  
  return (
    <section id="gallery-preview" className="bg-[#F4F3EB] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
            GALLERY
          </p>
          <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
            A GLIMPSE OF PARADISE
          </h2>
          <Link
            to="/gallery"
            className="inline-block px-5 py-2 border border-[#3A3532] text-[#3A3532] hover:bg-[#3A3532] hover:text-white transition-colors font-['Roboto'] uppercase mt-2"
          >
            View Full Gallery
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden group relative h-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview; 