import type { CSSProperties, ReactNode } from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional background image URL. When omitted, a navy + bronze CSS pattern is used. */
  imageSrc?: string;
  /** Optional background video URL. Takes precedence over imageSrc when provided. */
  videoSrc?: string;
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

  return (
    <section
      className={[styles.hero, variant === 'full' ? styles.full : styles.compact].join(' ')}
      style={minHeight ? { minHeight } : undefined}
      role="banner"
    >
      <div
        className={[
          styles.background,
          imageSrc && !videoSrc ? styles.backgroundWithImage : '',
        ].join(' ')}
        style={!videoSrc ? backgroundStyle : undefined}
        aria-hidden="true"
      />
      {videoSrc && (
        <video
          className={styles.backgroundVideo}
          src={videoSrc}
          poster={videoPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
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
