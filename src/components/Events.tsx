import React from "react";
import { Link, useLocation } from "react-router-dom";
import { galleryImages } from "../data/galleryData";

const Events: React.FC = () => {
  const location = useLocation();
  const isEventsPage = location.pathname === "/events";

  // Use specific image for events section
  const outdoorImage = "/villa kyma outdoor 2.jpg";

  // This is the section displayed on the homepage
  if (!isEventsPage) {
    return (
      <section id="events" className="bg-[#F4F3EB]">
        <div>
          <div className="overflow-hidden" style={{ height: "580px" }}>
            <img
              src={outdoorImage}
              alt="Event space at villa"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>

          <div className="pt-8 pb-6">
            <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
              EVENTS
            </p>

            <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
              Unforgettable Celebrations
            </h2>

            <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
              Transform your special moments into unforgettable memories. Our villas provide
              the perfect backdrop for intimate weddings, milestone celebrations, and exclusive
              gatherings with breathtaking Aegean views.
            </p>

            <div className="mt-8">
              <Link
                to="/events"
                className="inline-block px-5 py-2 border border-[#3A3532] text-[#3A3532] hover:bg-[#3A3532] hover:text-white transition-colors font-['Roboto'] uppercase"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Get relevant images for events page
  const diningImages = galleryImages.filter(img => img.src.includes('dining'));
  const outdoorImages = galleryImages.filter(img => img.src.includes('outdoor'));
  const poolImages = galleryImages.filter(img => img.src.includes('pool'));
  const kitchenImages = galleryImages.filter(img => img.src.includes('kitchen'));

  // This is the dedicated events page content
  return (
    <div className="bg-[#F4F3EB]">
      {/* Hero Banner */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={outdoorImages[0]?.src || galleryImages[0].src}
            alt="Stunning event venue with ocean views"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Roboto'] text-white mb-4 leading-tight uppercase">
              YOUR EXCLUSIVE VENUE IN THE CYCLADES
            </h1>
          </div>
        </div>
      </section>

      {/* Events content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-12">
          <p className="text-[#3A3532] text-lg md:text-xl font-['Roboto'] leading-relaxed max-w-4xl mx-auto text-justify">
            Host your dream event at our exclusive Antiparos villas. With capacity for up to 19 guests across
            8 luxurious bedrooms, our properties offer the perfect blend of privacy, elegance, and breathtaking
            natural beauty. From intimate wedding ceremonies to milestone birthdays, corporate retreats to family
            reunions, we provide an unforgettable backdrop for life's most precious celebrations. Our dedicated
            event team ensures every detail is perfectly orchestrated in this Mediterranean paradise.
          </p>
        </div>

        {/* Magazine-style layout */}
        <div className="mt-16">
          {/* First Row - Gym and Pool */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-32">
            {/* Wedding & Celebrations Section */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "500px" }}>
                <img
                  src={diningImages[0]?.src || outdoorImages[1]?.src || galleryImages[10].src}
                  alt="Elegant wedding setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  UNFORGETTABLE MOMENTS
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  WEDDINGS & CELEBRATIONS
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Exchange vows with the Aegean Sea as your witness. Our villas accommodate intimate
                  ceremonies and receptions for up to 40 guests, featuring stunning outdoor terraces,
                  infinity pools, and panoramic sunset views. From welcome cocktails to farewell brunches,
                  every moment is crafted to perfection with local cuisine, fine wines, and impeccable service.
                </p>
              </div>
            </div>

            {/* Corporate Retreats Section */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-28">
              <div className="overflow-hidden mb-4" style={{ height: "620px" }}>
                <img
                  src={poolImages[0]?.src || outdoorImages[2]?.src || galleryImages[20].src}
                  alt="Professional meeting space with sea views"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  INSPIRE & INNOVATE
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  CORPORATE RETREATS
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Elevate your next corporate gathering in an inspiring setting. Our villas provide versatile spaces for team building, poolside networking and sunset strategy discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Yoga and Outdoor */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Private Dining Section */}
            <div className="md:col-span-5 md:col-start-2 md:row-start-1">
              <div className="overflow-hidden mb-4" style={{ height: "580px" }}>
                <img
                  src={kitchenImages[0]?.src || diningImages[1]?.src || galleryImages[30].src}
                  alt="Private chef preparing gourmet meal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  CULINARY EXCELLENCE
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  PRIVATE CHEF & CATERING
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Elevate your event with exceptional cuisine crafted by our on demand chef. From traditional Greek feasts to international gourmet menus, every dish showcases the finest local ingredients. Whether it's a romantic dinner for two, a poolside BBQ, or an elegant reception, our promise is a memorable dining experiences tailored to your preferences.
                </p>
              </div>
            </div>

            {/* Venue Features Section */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:translate-y-32">
              <div className="overflow-hidden mb-4" style={{ height: "450px" }}>
                <img
                  src={outdoorImages[3]?.src || galleryImages[40].src}
                  alt="Stunning outdoor event spaces"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8E7D67] mb-2 font-['Roboto']">
                  EXCEPTIONAL SPACES
                </p>
                <h2 className="text-2xl md:text-3xl font-['Roboto'] text-[#3A3532] mb-4 uppercase">
                  VENUE FEATURES
                </h2>
                <p className="text-[#3A3532] mb-6 font-['Roboto'] leading-relaxed">
                  Our villas offer extraordinary features perfect for memorable events. Enjoy multiple
                  outdoor terraces with sunset views, infinity pools with lounging areas, spacious
                  indoor living areas for gatherings, fully equipped kitchens for catering prep,
                  and sound systems throughout the property. The natural beauty of Antiparos provides
                  a stunning backdrop that needs no additional decoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;