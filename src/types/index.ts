export interface NavItem {
  label: string;
  href: string;
}

export interface RoomDetails {
  id: string;
  name: string;
  villaId?: string;
  description: string;
  specs: {
    size: string;
    capacity: string;
    features: string;
  };
  amenities: string[];
  images: string[];
}

export interface VillaDetails {
  id: string;
  name: string;
  description: string;
  totalSize: string;
  facilities: string[];
  images: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Season {
  name: string;
  period: string;
  price: string;
}

export interface BookingPolicy {
  title: string;
  description: string;
}