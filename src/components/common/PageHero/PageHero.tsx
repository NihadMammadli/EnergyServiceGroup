import type { CSSProperties, ReactNode } from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional background image URL. When omitted, a navy + bronze CSS pattern is used. */
  imageSrc?: string;
  variant?: 'full' | 'compact';
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
  variant = 'compact',
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
      role="banner"
    >
      <div
        className={[
          styles.background,
          imageSrc ? styles.backgroundWithImage : '',
        ].join(' ')}
        style={backgroundStyle}
        aria-hidden="true"
      />
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
