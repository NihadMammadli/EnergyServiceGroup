import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Image as ImageIcon, Play, X } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { useReveal } from '@/hooks/useReveal';
import { galleryItems, type GalleryItem } from '@/data/gallery';
import styles from './index.module.css';

type Filter = 'all' | 'photo' | 'video';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Hamısı' },
  { value: 'photo', label: 'Fotolar' },
  { value: 'video', label: 'Videolar' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const grid = useReveal<HTMLDivElement>({ stagger: true, direction: 'up' });

  const items = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((i) => i.type === filter)),
    [filter]
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <>
      <PageHero
        videoSrc="https://media.energyservicegroup.az/ESG%20Media/HeroCollab.mp4"
        videoPoster="/home/ProjectsHeroBackground.jpg"
        eyebrow="Qaleriya"
        title="Layihələrdən foto və video materiallar"
        description="Magistral kəmərlər, infrastruktur tikintisi və obyekt quraşdırma işlərindən kadr görüntüləri."
        minHeight="78vh"
      />

      <Container className={styles.page}>
        <div className={styles.toolbar}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={[
                styles.filterBtn,
                filter === f.value ? styles.filterBtnActive : '',
              ].join(' ')}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div ref={grid.ref} className={[styles.grid, grid.className].join(' ')}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.tile}
              onClick={() => setSelected(item)}
              aria-label={`${item.title} — aç`}
            >
              {item.type === 'photo' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.tileMedia}
                  loading="lazy"
                />
              ) : (
                <>
                  <video
                    src={`${item.src}#t=0.1`}
                    className={styles.tileMedia}
                    muted
                    playsInline
                    preload="metadata"
                    disableRemotePlayback
                  />
                  <span className={styles.playOverlay} aria-hidden="true">
                    <Play size={28} fill="currentColor" />
                  </span>
                </>
              )}
              <span className={styles.tileBadge}>
                {item.type === 'photo' ? (
                  <ImageIcon size={12} aria-hidden="true" />
                ) : (
                  <Play size={12} aria-hidden="true" />
                )}
                {item.type === 'photo' ? 'Foto' : 'Video'}
              </span>
            </button>
          ))}
        </div>

        {items.length === 0 && (
          <p className={styles.empty}>Bu kateqoriyada hələ material yoxdur.</p>
        )}
      </Container>

      {selected &&
        createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setSelected(null)}
              aria-label="Bağla"
            >
              <X size={20} />
            </button>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              {selected.type === 'photo' ? (
                <img src={selected.src} alt={selected.title} className={styles.lightboxMedia} />
              ) : (
                <video
                  src={selected.src}
                  className={styles.lightboxMedia}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
