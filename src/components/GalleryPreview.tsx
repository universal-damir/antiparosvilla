import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const GalleryPreview: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Lazy loading observer for videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && video.dataset.src) {
            video.src = video.dataset.src;
            video.load();
            video.dataset.src = ""; // Clear after loading
          }
        });
      },
      { rootMargin: "100px" } // Start loading 100px before entering viewport
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const videos = [
    { id: 1, src: "/videos/video1.mp4", alt: "Villa experience 1" },
    { id: 2, src: "/videos/video2.mp4", alt: "Villa experience 2" },
    { id: 3, src: "/videos/video3.mp4", alt: "Villa experience 3" },
    { id: 4, src: "/videos/video4.mp4", alt: "Villa experience 4" },
  ];

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

        {/* 2x2 Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="overflow-hidden group relative rounded-sm"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                data-src={video.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label={video.alt}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview; 