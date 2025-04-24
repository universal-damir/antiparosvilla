import React from "react";
import { seasons, bookingPolicies } from "../data/bookingData";

const Booking: React.FC = () => {
  return (
    <section id="book" className="py-20 bg-[#3A3532] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#F4F3EB] mb-2 font-['American_Typewriter']">
            RESERVATIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-['American_Typewriter'] text-[#F4F3EB] mb-4">
            BOOK YOUR ESCAPE
          </h2>
          <div className="w-24 h-px bg-[#F4F3EB] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-['American_Typewriter'] text-[#F4F3EB] mb-6">
              Seasonal Rates
            </h3>
            <div className="space-y-6">
              {seasons.map((season, index) => (
                <div key={index} className="border-b border-[#F4F3EB]/20 pb-4 last:border-0">
                  <h4 className="text-xl font-['American_Typewriter'] text-[#F4F3EB] mb-2">
                    {season.name}
                  </h4>
                  <p className="text-[#F4F3EB] mb-2 font-['American_Typewriter']">
                    {season.period}
                  </p>
                  <p className="text-[#F4F3EB] font-['American_Typewriter'] text-xl">
                    {season.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-['American_Typewriter'] text-[#F4F3EB] mb-6">
              Booking Policies
            </h3>
            <div className="space-y-6">
              {bookingPolicies.map((policy, index) => (
                <div key={index} className="border-b border-[#F4F3EB]/20 pb-4 last:border-0">
                  <h4 className="text-xl font-['American_Typewriter'] text-[#F4F3EB] mb-2">
                    {policy.title}
                  </h4>
                  <p className="text-[#F4F3EB] font-['American_Typewriter']">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:bookings@indigochicvillas.com"
            className="inline-block px-8 py-3 bg-[#F4F3EB] text-[#3A3532] hover:bg-[#E5E4DC] transition-colors font-['American_Typewriter']"
          >
            CONTACT FOR BOOKING
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;