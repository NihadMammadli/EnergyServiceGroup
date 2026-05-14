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
        imageSrc='/home/ProjectsHeroBackground.jpg'

        eyebrow="Bizə etibar edirlər"
        title="Strateji Tərəfdaşlarımız və Müştərilərimiz"
        description="SOCAR | AFEZ | MİDA | AS İnşaat | ND Company | Dövlət Qurumları"
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
