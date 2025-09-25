import { GalleryImage } from "../types";

const photoFiles = [
  "00 MAIN BACKGROUND.jpg",
  "DJI_20250725181816_0527_D.jpg",
  "DJI_20250725182120_0532_D.jpg",
  "DJI_20250725182210_0534_D2.jpeg",
  "DJI_20250725182528_0544_D.jpg",
  "DJI_20250725193457_0557_D 2.jpg",
  "DJI_20250725193545_0562_D 2.jpg",
  "entrance.jpg",
  "maids room 1.jpg",
  "staircase.jpg",
  "villa ammos entrance 2.jpg",
  "villa ammos entrance 4.jpg",
  "villa ammos gym.jpg",
  "villa ammos kitchen 1.jpg",
  "villa ammos kitchen 4.jpg",
  "villa ammos kitchen 6.jpg",
  "villa ammos kitchen 7.jpg",
  "villa ammos kitchen 8.jpg",
  "villa ammos outdoor 2.jpg",
  "villa ammos outdoor 5.jpg",
  "villa ammos outdoor 6.jpg",
  "villa ammos r1 1.jpg",
  "villa ammos r1 2.jpg",
  "villa ammos r1 4.jpg",
  "villa ammos r1 5.jpg",
  "villa ammos r1 7.jpg",
  "villa ammos r1 8.jpg",
  "villa ammos r1 9.jpg",
  "villa ammos r2 1.jpg",
  "villa ammos r2 2.jpg",
  "villa ammos r2 3.jpg",
  "villa ammos r2 5.jpg",
  "villa ammos r2 6.jpg",
  "villa ammos r3 1.jpg",
  "villa ammos r3 2.jpg",
  "villa ammos r3 3.jpg",
  "villa ammos r3 4.jpg",
  "villa ammos r3 5.jpg",
  "villa ammos r3 6.jpg",
  "villa ammos r4 1.jpg",
  "villa ammos r4 10.jpg",
  "villa ammos r4 2.jpg",
  "villa ammos r4 3.jpg",
  "villa ammos r4 6.jpg",
  "villa ammos r4 8.jpg",
  "villa ammos r4 9.jpg",
  "villa kyma bar area 2.jpg",
  "villa kyma dining 1.jpg",
  "villa kyma dining 2.jpg",
  "villa kyma dining 3.jpg",
  "villa kyma dining 4.jpg",
  "villa kyma dining 6.jpg",
  "villa kyma kitchen 1.jpg",
  "villa kyma kitchen 4.jpg",
  "villa kyma outdoor 10.jpg",
  "villa kyma outdoor 11.jpg",
  "villa kyma outdoor 12.jpg",
  "villa kyma outdoor 14.jpg",
  "villa kyma outdoor 17.jpg",
  "villa kyma outdoor 18.jpg",
  "villa kyma outdoor 19.jpg",
  "villa kyma outdoor 2.jpg",
  "villa kyma outdoor 20.jpg",
  "villa kyma outdoor 22.jpg",
  "villa kyma outdoor 23.jpg",
  "villa kyma outdoor 24.jpg",
  "villa kyma outdoor 25.jpg",
  "villa kyma outdoor 28.jpg",
  "villa kyma outdoor 29.jpg",
  "villa kyma outdoor 3.jpg",
  "villa kyma outdoor 30.jpg",
  "villa kyma outdoor 32.jpg",
  "villa kyma outdoor 4.jpg",
  "villa kyma outdoor 7.jpg",
  "villa kyma outdoor 9.jpg",
  "villa kyma pool 2.jpg",
  "villa kyma pool 3.jpg",
  "villa kyma pool 4.jpg",
  "villa kyma r5 10.jpg",
  "villa kyma r5 2.jpg",
  "villa kyma r5 3.jpg",
  "villa kyma r5 7.jpg",
  "villa kyma r5 8.jpg",
  "villa kyma r5 9.jpg",
  "villa kyma r6 1.jpg",
  "villa kyma r6 2.jpg",
  "villa kyma r6 3.jpg",
  "villa kyma r6 5.jpg",
  "villa kyma r6 6.jpg",
  "villa kyma r7 1.jpg",
  "villa kyma r7 4.jpg",
  "villa kyma r7 5.jpg",
  "villa kyma r7 6.jpg",
  "villa kyma r7 7.jpg",
  "villa kyma r8 10.jpg",
  "villa kyma r8 11.jpg",
  "villa kyma r8 12.jpg",
  "villa kyma r8 2.jpg",
  "villa kyma r8 4.jpg",
  "villa kyma r8 6.jpg",
  "villa kyma r8 7.jpg",
  "villa kyma r8 8.jpg"
];

function getAltText(filename: string): string {
  const name = filename.replace(/\.(jpg|jpeg|png)$/i, '');

  if (name.includes('outdoor')) return 'Outdoor area';
  if (name.includes('pool')) return 'Pool area';
  if (name.includes('kitchen')) return 'Kitchen';
  if (name.includes('dining')) return 'Dining area';
  if (name.includes('entrance')) return 'Villa entrance';
  if (name.includes('gym')) return 'Gym area';
  if (name.includes('bar')) return 'Bar area';
  if (name.includes('staircase')) return 'Staircase';
  if (name.match(/r\d/)) {
    const roomNum = name.match(/r(\d+)/)?.[1];
    return `Room ${roomNum}`;
  }
  if (name.includes('DJI')) return 'Aerial view';
  if (name.includes('MAIN BACKGROUND')) return 'Villa overview';

  return name.replace(/_/g, ' ').replace(/villa (ammos|kyma)/i, '').trim();
}

export const galleryImages: GalleryImage[] = photoFiles.map((filename, index) => ({
  id: `img${index + 1}`,
  src: `/src/public/${filename}`,
  alt: getAltText(filename),
  width: 800,
  height: 600
}));