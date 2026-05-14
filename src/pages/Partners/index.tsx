import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { useReveal } from '@/hooks/useReveal';
import { partners } from '@/data/partners';
import styles from './index.module.css';

export default function PartnersPage() {
  const grid = useReveal<HTMLUListElement>({ stagger: true, direction: 'up' });

  return (
    <>
      <PageHero
        imageSrc="/home/ProjectsHeroBackground.jpg"
        eyebrow="Bizə etibar edirlər"
        title="Strateji Tərəfdaşlarımız və Müştərilərimiz"
        description="SOCAR | AFEZ | MİDA | AS Group | Silkway Group"
      />

      <Container className={styles.page}>
        <ul ref={grid.ref} className={[styles.grid, grid.className].join(' ')}>
          {partners.map((partner) => (
            <li key={partner.id}>
              <a
                href={partner.url ?? '#'}
                target={partner.url ? '_blank' : undefined}
                rel={partner.url ? 'noopener noreferrer' : undefined}
                className={styles.card}
                aria-label={`${partner.name} — saytı aç`}
              >
                <div className={styles.logoFrame}>
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={styles.logoImage}
                      loading="lazy"
                    />
                  ) : (
                    <span className={styles.monogram} aria-hidden="true">
                      {partner.initials}
                    </span>
                  )}
                </div>

                <div className={styles.body}>
                  <span className={styles.name}>{partner.name}</span>
                  {partner.description && (
                    <span className={styles.description}>{partner.description}</span>
                  )}
                </div>

                {partner.url && (
                  <span className={styles.footer}>
                    Saytı aç
                    <ExternalLink size={14} />
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
