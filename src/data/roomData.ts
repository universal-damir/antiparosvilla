import { RoomDetails } from "../types";

// Property Overview Data
export const propertyOverview = {
  title: "INDIGO CHIC VILLAS",
  description: "Two luxury villas on the hillside of Antiparos, offering stunning views of the Aegean Sea. Each villa features four bedrooms, a common kitchen and sitting area, outdoor dining, and a private pool. Experience the perfect blend of modern comfort and traditional Greek hospitality.",
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
    description: "Located on the lower level, Villa Ammos offers a tranquil retreat with four elegantly appointed bedrooms, a fully equipped common kitchen, comfortable sitting areas, and an outdoor dining space. The villa features a private pool and includes an indoor gym for fitness enthusiasts.",
    totalSize: "98m² of bedrooms",
    facilities: [
      "4 Bedrooms",
      "Common kitchen & sitting area",
      "Private swimming pool",
      "Outdoor dining area",
      "Indoor gym",
      "Outdoor sitting area",
      "Daily maid service",
      "Private parking"
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
    description: "Positioned on the upper level with breathtaking views, Villa Kyma features four luxurious bedrooms, a spacious common kitchen, elegant sitting areas, and an outdoor dining space. The highlight is the stunning infinity pool that seems to merge with the horizon.",
    totalSize: "105m² of bedrooms",
    facilities: [
      "4 Bedrooms",
      "Common kitchen & sitting area",
      "Infinity swimming pool",
      "Outdoor dining area",
      "Panoramic sea views",
      "Outdoor sitting area",
      "Daily maid service",
      "Private parking"
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
      capacity: "MAX 2 ADULTS",
      features: "POOL VIEW · GARDEN ACCESS"
    },
    amenities: [
      "King size bed or twin beds",
      "Pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
      "Safe deposit box",
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
      features: "GARDEN VIEW · POOL ACCESS"
    },
    amenities: [
      "Queen size bed or twin beds",
      "Pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
      "Safe deposit box",
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
      capacity: "MAX 2 ADULTS",
      features: "CONNECTING ROOM OPTION · POOL ACCESS"
    },
    amenities: [
      "King size bed or twin beds",
      "Connects to Room 4",
      "Pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
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
      features: "CONNECTING ROOM OPTION · GARDEN VIEW"
    },
    amenities: [
      "Double bed or twin beds",
      "Connects to Room 3",
      "Pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
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
    description: "The most spacious room at 31m² with an exclusive private balcony offering panoramic sea views. Located in the upper villa, this room provides the ultimate in privacy and luxury with stunning Aegean vistas.",
    specs: {
      size: "31M² + PRIVATE BALCONY",
      capacity: "MAX 2 ADULTS",
      features: "PRIVATE BALCONY · SEA VIEW · INFINITY POOL ACCESS"
    },
    amenities: [
      "King size bed",
      "Private balcony with sea view",
      "Infinity pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
      "Panoramic views"
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
      features: "CONNECTING ROOM OPTION · SEA VIEW"
    },
    amenities: [
      "Queen size bed or twin beds",
      "Connects to Room 7",
      "Infinity pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
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
      features: "CONNECTING ROOM OPTION · POOL VIEW"
    },
    amenities: [
      "Queen size bed or twin beds",
      "Connects to Room 6",
      "Infinity pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
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
      features: "SEA VIEW · INFINITY POOL ACCESS"
    },
    amenities: [
      "King size bed",
      "Infinity pool access",
      "Air conditioning",
      "Premium linens",
      "Daily maid service",
      "Mini fridge",
      "Safe deposit box",
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