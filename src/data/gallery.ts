export type GalleryMediaType = 'photo' | 'video';

export interface GalleryItem {
  id: string;
  type: GalleryMediaType;
  src: string;
  title: string;
}

const DEFAULT_BASE = 'https://media.energyservicegroup.az/ESG%20Media';
const R2_BASE = (import.meta.env.VITE_R2_GALLERY_BASE_URL ?? DEFAULT_BASE).replace(/\/$/, '');

const PHOTO_COUNT = 12;
const VIDEO_COUNT = 24;

const photos: GalleryItem[] = Array.from({ length: PHOTO_COUNT }, (_, i) => {
  const n = i + 1;
  return {
    id: `photo-${n}`,
    type: 'photo',
    src: `${R2_BASE}/Photo-${n}.jpeg`,
    title: `Foto ${n}`,
  };
});

const videos: GalleryItem[] = Array.from({ length: VIDEO_COUNT }, (_, i) => {
  const n = i + 1;
  return {
    id: `video-${n}`,
    type: 'video',
    src: `${R2_BASE}/Video-${n}.mp4`,
    title: `Video ${n}`,
  };
});

export const galleryItems: GalleryItem[] = [...photos, ...videos];
