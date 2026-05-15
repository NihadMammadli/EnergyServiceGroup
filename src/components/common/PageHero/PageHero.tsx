import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional background image URL. When omitted, a navy + bronze CSS pattern is used. */
  imageSrc?: string;
  /**
   * Optional background video URL. Takes precedence over imageSrc when provided.
   * Pass an array to play multiple clips back-to-back (carousel), looping the playlist.
   */
  videoSrc?: string | string[];
  /** Optional poster image shown before the background video loads. */
  videoPoster?: string;
  variant?: 'full' | 'compact';
  /** Optional override for the section's min-height (any valid CSS length, e.g. "78vh"). */
  minHeight?: string;
  align?: 'center' | 'left';
  showScrollCue?: boolean;
  onScrollClick?: () => void;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  videoSrc,
  videoPoster,
  variant = 'compact',
  minHeight,
  align = 'center',
  showScrollCue = false,
  onScrollClick,
  children,
}: PageHeroProps) {
  const innerCls = [styles.inner, align === 'left' ? styles.alignLeft : '']
    .filter(Boolean)
    .join(' ');

  const backgroundStyle: CSSProperties | undefined = imageSrc
    ? ({ ['--page-hero-image' as string]: `url(${JSON.stringify(imageSrc)})` } as CSSProperties)
    : undefined;

  const videoSources = Array.isArray(videoSrc) ? videoSrc : videoSrc ? [videoSrc] : [];
  const isPlaylist = videoSources.length > 1;
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isPlaylist) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
    const playPromise = el.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  }, [videoIndex, isPlaylist]);

  const handleVideoEnded = isPlaylist
    ? () => setVideoIndex((i) => (i + 1) % videoSources.length)
    : undefined;

  const currentSrc = videoSources[videoIndex];
  const preloadNextHref = isPlaylist
    ? videoSources[(videoIndex + 1) % videoSources.length]
    : undefined;

  return (
    <section
      className={[styles.hero, variant === 'full' ? styles.full : styles.compact].join(' ')}
      style={minHeight ? { minHeight } : undefined}
      role="banner"
    >
      <div
        className={[
          styles.background,
          imageSrc && !currentSrc ? styles.backgroundWithImage : '',
        ].join(' ')}
        style={!currentSrc ? backgroundStyle : undefined}
        aria-hidden="true"
      />
      {currentSrc && (
        <video
          ref={videoRef}
          key={currentSrc}
          className={styles.backgroundVideo}
          src={currentSrc}
          poster={videoPoster}
          autoPlay
          loop={!isPlaylist}
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          aria-hidden="true"
        />
      )}
      {preloadNextHref && (
        <video
          key={`preload-${preloadNextHref}`}
          src={preloadNextHref}
          preload="auto"
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          style={{ display: 'none' }}
        />
      )}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={innerCls}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1
          className={[
            styles.title,
            variant === 'full' ? styles.titleFull : styles.titleCompact,
          ].join(' ')}
        >
          {title}
        </h1>
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>

      {showScrollCue && onScrollClick && (
        <button
          type="button"
          className={styles.scrollCue}
          onClick={onScrollClick}
          aria-label="Növbəti hissəyə keç"
        >
          <span className={styles.scrollCueDot} aria-hidden="true" />
        </button>
      )}
    </section>
  );
}
