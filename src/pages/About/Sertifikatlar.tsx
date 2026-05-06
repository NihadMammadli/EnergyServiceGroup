import { Award } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import styles from './about.module.css';

interface CertificateEntry {
  code: string;
  title: string;
  issuer: string;
  year: string;
}

// TODO: replace with real certificates when available.
const certificates: CertificateEntry[] = [
  {
    code: 'ISO 9001',
    title: 'Keyfiyyət İdarəetmə Sistemi',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2024',
  },
  {
    code: 'ISO 14001',
    title: 'Ətraf Mühitin İdarə Edilməsi',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2024',
  },
  {
    code: 'ISO 45001',
    title: 'Əməyin Təhlükəsizliyi və Sağlamlıq',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2024',
  },
  {
    code: 'API 1104',
    title: 'Boru kəmərlərinin qaynaqlanması üzrə uyğunluq',
    issuer: 'American Petroleum Institute',
    year: '2023',
  },
  {
    code: 'EN 12732',
    title: 'Qaz təchizatı sistemləri — qaynaq',
    issuer: 'Avropa Standartlaşdırma Komitəsi',
    year: '2023',
  },
  {
    code: 'OHSAS',
    title: 'Sahə təhlükəsizliyi üzrə təlim sertifikatı',
    issuer: 'Daxili Təlim Mərkəzi',
    year: '2024',
  },
];

export default function SertifikatlarPage() {
  return (
    <Container>
      <SectionTitle
        eyebrow="Standartlar"
        title="Sertifikatlarımız"
        description="Beynəlxalq və yerli standartlara uyğunluğumuzu təsdiqləyən sertifikatlar — keyfiyyət, ətraf mühit və əməyin təhlükəsizliyi sahələrində."
      />
      <div className={styles.docGrid}>
        {certificates.map((cert) => (
          <article key={cert.code} className={styles.docCard}>
            <div className={styles.docHeader}>
              <span className={styles.docIcon}>
                <Award size={20} />
              </span>
              <span className={styles.docNumber}>{cert.code}</span>
            </div>
            <h3 className={styles.docTitle}>{cert.title}</h3>
            <p className={styles.expertiseText}>{cert.issuer}</p>
            <div className={styles.docMeta}>
              <span>Verilmə ili</span>
              <span className={styles.docMetaAccent}>{cert.year}</span>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
