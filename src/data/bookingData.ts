import { BookingPolicy, Season } from "../types";

export const seasons: Season[] = [
  {
    name: "Low Season",
    period: "November - March",
    price: "€450 per night"
  },
  {
    name: "Mid Season",
    period: "April - May, October",
    price: "€650 per night"
  },
  {
    name: "High Season",
    period: "June - September",
    price: "€850 per night"
  }
];

export const bookingPolicies: BookingPolicy[] = [
  {
    title: "Reservation",
    description: "A 30% deposit is required to secure your booking. The balance is due 30 days prior to arrival."
  },
  {
    title: "Cancellation",
    description: "Free cancellation up to 60 days before arrival. 50% refund for cancellations 30-60 days before arrival. Non-refundable within 30 days of arrival."
  },
  {
    title: "Check-in & Check-out",
    description: "Check-in: 3:00 PM - 8:00 PM. Check-out: by 11:00 AM. Early check-in and late check-out available upon request and subject to availability."
  }
];