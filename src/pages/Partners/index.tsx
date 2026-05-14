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
        eyebrow="Etibar edirlər"
        title="Tərəfdaşlarımız və müştərilərimiz"
        description="Mürəkkəb boru kəməri proqramlarını həyata keçirmək üçün milli operatorlar, azad iqtisadi zonalar və strateji enerji təşkilatları ilə işləyirik."
      />

      <Container className={styles.page}>
        <ul ref={grid.ref} className={[styles.grid, grid.className].join(' ')}>
          {partners.map((partner) => (
            <li key={partner.id} className={styles.card}>
              <span className={styles.monogram} aria-hidden="true">
                {partner.initials}
              </span>
              <div className={styles.meta}>
                <span className={styles.name}>{partner.name}</span>
                {partner.description && (
                  <span className={styles.description}>{partner.description}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
