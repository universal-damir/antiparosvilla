import { RoomDetails } from "../types";

// Property Overview Data
export const propertyOverview = {
  title: "INDIGO CHIC VILLAS",
  description: [
    "Discover two luxury villas perched on the hillside of St. Georgios, Antiparos, offering unobstructed panoramic views of the Aegean Sea and the enchanting Cycladic islands of Skopelos, Sikinos, Sifnos, and Despotoiko in perspective. Each villa boasts four ensuite bedrooms, a fully equipped luxury kitchen, spacious indoor and outdoor living areas, al fresco dining, and private pool. Every space, inside and out, is designed to capture the stunning Aegean vistas, ensuring that no view goes unseen from all our visitors.",
    "Located just 300 meters from the serene beaches of Agios Georgios, these villas provide the perfect setting for a restful getaway. A short 5-minute walk leads you to crystal-clear waters and golden sands, ideal for relaxation and exploration.",
    "Whether you choose to stroll or drive, charming local tavernas await nearby, serving authentic Greek cuisine, fresh seafood, and traditional dishes crafted with care. The genuine warmth of local hospitality turns every meal into a memorable experience.",
    "Perfect for couples, families, or groups of friends, this idyllic location blends tranquility with convenient access to nature, delectable dining, and the authentic spirit of Greece. Experience a seamless fusion of modern luxury and traditional Greek hospitality for an unforgettable stay."
  ],
  images: [
    "/DJI_20250725181816_0527_D.jpg",
    "/DJI_20250725182120_0532_D.jpg",
    "/DJI_20250725182210_0534_D2.jpeg",
    "/villa kyma outdoor 11.jpg",
    "/villa kyma pool 2.jpg",
    "/villa kyma outdoor 32.jpg"
  ]
};

// Villa Data
export const villaData = [
  {
    id: "villa-ammos",
    name: "VILLA AMMOS",
    description: "Located on the lower level, Villa Ammos offers panoramic views of the Aegean sea, Agios Georgios Bay and Despotiko island. The villa features four elegantly appointed ensuite bedrooms, a fully equipped common kitchen with kitchen island and luxury appliances, a comfortable sitting area, an outdoor dining space sitting 8 people, and an outdoor sitting area to enjoy the view. The villa offers a private pool and an indoor gym for fitness enthusiasts. There is the option to connect Rooms 3 & 4 for families. Max occupancy of 10 people. Using a bring your own device concept, our guests can take advantage of our complimentary fast satellite internet access on their familiar personal devices. A projector is also available, upon request, to enjoy movie nights or sports events. A boho chic villa ideal for your tranquil retreat.",
    totalSize: "98m² of bedrooms",
    facilities: [
      "Sea View",
      "King size beds or Queen size beds",
      "Pool with shallow end for kids",
      "Air conditioning",
      "Ceiling Fans in all rooms",
      "Safe deposit box",
      "BBQ",
      "Indoor gym",
      "Private parking",
      "Daily maid service",
      "Complimentary WiFi",
      "Concierge Assistance"
    ],
    images: [
      "/villa ammos outdoor 2.jpg",
      "/villa ammos outdoor 5.jpg",
      "/villa ammos outdoor 6.jpg",
      "/villa ammos kitchen 1.jpg",
      "/villa ammos gym.jpg",
      "/entrance.jpg"
    ]
  },
  {
    id: "villa-kyma",
    name: "VILLA KYMA",
    description: "Positioned on the upper level with breathtaking views, Villa Kyma features four luxurious ensuite bedrooms, a spacious common kitchen with kitchen island and luxurious appliances, elegant sitting area with a seamless indoor-outdoor flow, an outdoor dining space sitting 12 people and an outdoor sitting area. The peaceful meeting of villa geometric lines with the endless Aegean blue, creates a truly striking visual experience, where architecture and nature blend seamlessly for an inspiring sense of harmony and serenity. Villa Kyma features also a stunning infinity temperature controlled pool, outdoor shower and an outdoor bar/BBQ which blends elegantly stone built architecture with the natural rocky terrain of Agios Georgios hillside. Room 8 features a private outdoor shower and Room 5 a private balcony with sea view. There is the option to connect Rooms 6 & 7 for families. Max occupancy of 9 people. Using a bring your own device concept, our guests can take advantage of our complimentary fast satellite internet access on their familiar personal devices. A projector is also available, upon request, to enjoy movie nights or sports events. A chic villa combining comforts, eclectic décor, natural materials and elegance, making it a perfect choice for anyone seeking a peaceful retreat with character and style.",
    totalSize: "105m² of bedrooms",
    facilities: [
      "Sea View",
      "King size beds or Queen size beds",
      "Temperature Controlled Swimming Pool",
      "Air conditioning",
      "Ceiling Fans in all rooms",
      "Safe deposit box",
      "Outdoor Bar/ BBQ",
      "Outdoor Shower",
      "Private parking",
      "Daily maid service",
      "Complimentary WiFi",
      "Concierge Assistance"
    ],
    images: [
      "/villa kyma outdoor 11.jpg",
      "/villa kyma pool 2.jpg",
      "/villa kyma pool 3.jpg",
      "/villa kyma dining 2.jpg",
      "/villa kyma kitchen 1.jpg",
      "/villa kyma bar area 2.jpg"
    ]
  }
];

// Individual Room Data
export const roomData: RoomDetails[] = [
  // VILLA AMMOS ROOMS
  {
    id: "ammos-room-1",
    name: "AMMOS ROOM 1",
    villaId: "villa-ammos",
    description: "A spacious 30m² room featuring elegant design with natural surfaces and soft tones. The room offers comfortable sleeping arrangements and opens onto the villa's shared pool area, creating a seamless indoor-outdoor living experience.",
    specs: {
      size: "30M²",
      capacity: "MAX 3 ADULTS",
      features: "SEA VIEW · GARDEN ACCESS"
    },
    amenities: [
      "King size bed",
      "Couch / Single bed",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Complimentary WiFi"
    ],
    images: [
      "/villa ammos r1 1.jpg",
      "/villa ammos r1 2.jpg",
      "/villa ammos r1 4.jpg",
      "/villa ammos r1 5.jpg",
      "/villa ammos r1 7.jpg",
      "/villa ammos r1 8.jpg",
      "/villa ammos r1 9.jpg"
    ]
  },
  {
    id: "ammos-room-2",
    name: "AMMOS ROOM 2",
    villaId: "villa-ammos",
    description: "A comfortable 22m² room with thoughtful design elements that create a warm, inviting atmosphere. Natural materials and local craftsmanship define this peaceful retreat with direct access to shared villa amenities.",
    specs: {
      size: "22M²",
      capacity: "MAX 2 ADULTS",
      features: "SEA AND POOL VIEW"
    },
    amenities: [
      "Queen size bed",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Complimentary WiFi"
    ],
    images: [
      "/villa ammos r2 1.jpg",
      "/villa ammos r2 2.jpg",
      "/villa ammos r2 3.jpg",
      "/villa ammos r2 5.jpg",
      "/villa ammos r2 6.jpg"
    ]
  },
  {
    id: "ammos-room-3",
    name: "AMMOS ROOM 3",
    villaId: "villa-ammos",
    description: "A well-appointed 27m² room that can connect with Room 4 to create a family suite. Features elegant furnishings and opens to the villa's outdoor areas. Perfect for families or groups traveling together.",
    specs: {
      size: "27M²",
      capacity: "MAX 3 ADULTS",
      features: "SEA VIEW · CONNECTING ROOM OPTION"
    },
    amenities: [
      "King size bed",
      "Couch / Single bed",
      "Pool access",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Family-friendly setup"
    ],
    images: [
      "/villa ammos r3 1.jpg",
      "/villa ammos r3 2.jpg",
      "/villa ammos r3 3.jpg",
      "/villa ammos r3 4.jpg",
      "/villa ammos r3 5.jpg",
      "/villa ammos r3 6.jpg"
    ]
  },
  {
    id: "ammos-room-4",
    name: "AMMOS ROOM 4",
    villaId: "villa-ammos",
    description: "A cozy 19m² room that can connect with Room 3 for family accommodation. Despite being the most intimate room, it maintains all the luxury amenities and thoughtful design of the villa.",
    specs: {
      size: "19M²",
      capacity: "MAX 2 ADULTS",
      features: "SEA VIEW · CONNECTING ROOM OPTION · GARDEN VIEW"
    },
    amenities: [
      "Double bed",
      "Pool access",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Family-friendly setup"
    ],
    images: [
      "/villa ammos r4 1.jpg",
      "/villa ammos r4 2.jpg",
      "/villa ammos r4 3.jpg",
      "/villa ammos r4 6.jpg",
      "/villa ammos r4 8.jpg",
      "/villa ammos r4 9.jpg",
      "/villa ammos r4 10.jpg"
    ]
  },

  // VILLA KYMA ROOMS
  {
    id: "kyma-room-5",
    name: "KYMA ROOM 5",
    villaId: "villa-kyma",
    description: "A spacious room at 31m² with an exclusive private balcony offering panoramic sea views. Located in the upper villa, this room provides the ultimate in privacy and luxury with stunning Aegean vistas.",
    specs: {
      size: "31M² + PRIVATE BALCONY",
      capacity: "MAX 2 ADULTS",
      features: "SEA VIEW · PRIVATE BALCONY"
    },
    amenities: [
      "Queen size bed",
      "Private balcony with sea view",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service"
    ],
    images: [
      "/villa kyma r5 2.jpg",
      "/villa kyma r5 3.jpg",
      "/villa kyma r5 7.jpg",
      "/villa kyma r5 8.jpg",
      "/villa kyma r5 9.jpg",
      "/villa kyma r5 10.jpg"
    ]
  },
  {
    id: "kyma-room-6",
    name: "KYMA ROOM 6",
    villaId: "villa-kyma",
    description: "A charming 21m² room that can connect with Room 7 for family accommodation. Features elegant design with access to the villa's infinity pool and spectacular views of the Aegean Sea.",
    specs: {
      size: "21M²",
      capacity: "MAX 2 ADULTS",
      features: "SEA VIEW · POOL VIEW · CONNECTING ROOM OPTION"
    },
    amenities: [
      "Queen size bed",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Family-friendly setup"
    ],
    images: [
      "/villa kyma r6 1.jpg",
      "/villa kyma r6 2.jpg",
      "/villa kyma r6 3.jpg",
      "/villa kyma r6 5.jpg",
      "/villa kyma r6 6.jpg"
    ]
  },
  {
    id: "kyma-room-7",
    name: "KYMA ROOM 7",
    villaId: "villa-kyma",
    description: "A comfortable 21m² room with the option to connect with Room 6. Thoughtfully designed with natural materials and offering access to all villa amenities including the stunning infinity pool.",
    specs: {
      size: "21M²",
      capacity: "MAX 2 ADULTS",
      features: "SEA VIEW · POOL VIEW · CONNECTING ROOM OPTION"
    },
    amenities: [
      "Queen size bed",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Family-friendly setup"
    ],
    images: [
      "/villa kyma r7 1.jpg",
      "/villa kyma r7 4.jpg",
      "/villa kyma r7 5.jpg",
      "/villa kyma r7 6.jpg",
      "/villa kyma r7 7.jpg"
    ]
  },
  {
    id: "kyma-room-8",
    name: "KYMA ROOM 8",
    villaId: "villa-kyma",
    description: "A spacious 32m² room offering luxury and comfort with stunning views. This generously sized room features elegant furnishings and provides direct access to the villa's infinity pool and outdoor areas.",
    specs: {
      size: "32M²",
      capacity: "MAX 2 ADULTS",
      features: "SEA VIEW · POOL VIEW · PRIVATE OUTDOOR SHOWER"
    },
    amenities: [
      "King size bed",
      "Couch / Single bed",
      "Air conditioning",
      "Ceiling Fan",
      "Premium linens",
      "Daily maid service",
      "Spectacular sea views"
    ],
    images: [
      "/villa kyma r8 2.jpg",
      "/villa kyma r8 4.jpg",
      "/villa kyma r8 6.jpg",
      "/villa kyma r8 7.jpg",
      "/villa kyma r8 8.jpg",
      "/villa kyma r8 10.jpg",
      "/villa kyma r8 11.jpg",
      "/villa kyma r8 12.jpg"
    ]
  }
];