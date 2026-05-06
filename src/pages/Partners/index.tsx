import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { partners } from '@/data/partners';
import styles from './index.module.css';

export default function PartnersPage() {
  return (
    <Container>
      <SectionTitle
        eyebrow="Trusted by"
        title="Our partners and clients"
        description="We work alongside national operators, free-economic zones, and strategic energy organizations to deliver complex pipeline programs."
      />

      <ul className={styles.grid}>
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
  );
}
