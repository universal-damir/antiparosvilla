import React, { useRef, useEffect } from "react";

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
            const thumbnailTime = parseFloat(video.dataset.thumbnail || "1");
            video.dataset.src = ""; // Clear after loading

            // Set thumbnail to specific time once metadata loads
            video.addEventListener('loadedmetadata', () => {
              video.currentTime = thumbnailTime;
            }, { once: true });
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

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0; // Start from beginning
      video.muted = false;
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      const thumbnailTime = parseFloat(video.dataset.thumbnail || "1");
      video.currentTime = thumbnailTime; // Return to specific thumbnail time
      video.muted = true;
    }
  };

  const videos = [
    { id: 1, src: "/videos/video1.mp4", alt: "Villa experience 1", thumbnailTime: 1 },
    { id: 2, src: "/videos/video2.mp4", alt: "Villa experience 2", thumbnailTime: 1 },
    { id: 3, src: "/videos/video3.mp4", alt: "Villa experience 3", thumbnailTime: 1 },
    { id: 4, src: "/videos/video4.mp4", alt: "Villa experience 4", thumbnailTime: 4 },
  ];

  return (
    <section id="gallery-preview" className="bg-[#F4F3EB] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2x2 Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="overflow-hidden group relative rounded-sm cursor-pointer"
              style={{ aspectRatio: "9/16" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                data-src={video.src}
                data-thumbnail={video.thumbnailTime.toString()}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
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