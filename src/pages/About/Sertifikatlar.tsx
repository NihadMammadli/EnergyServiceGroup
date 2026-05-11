import { Award, ExternalLink } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Reveal } from '@/components/common/Reveal';
import { useReveal } from '@/hooks/useReveal';
import styles from './about.module.css';

interface CertificateEntry {
  code: string;
  title: string;
  issuer: string;
  year: string;
  file: string;
}

const certificates: CertificateEntry[] = [
  {
    code: 'ISO 9001:2015',
    title: 'Keyfiyyət İdarəetmə Sistemi',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2015',
    file: '/ISO 9001-2015.PDF',
  },
  {
    code: 'ISO 14001:2015',
    title: 'Ətraf Mühitin İdarəetmə Sistemi',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2015',
    file: '/ISO 14001-2015.PDF',
  },
  {
    code: 'ISO 45001:2018',
    title: 'Əməyin Mühafizəsi və Təhlükəsizliyinin İdarəetmə Sistemi',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2018',
    file: '/ISO 45001 - 2018.PDF',
  },
  {
    code: 'ISO 10002:2018',
    title: 'Müştəri Məmnuniyyəti və Şikayətlərin İdarəetmə Sistemi',
    issuer: 'Beynəlxalq Standartlaşdırma Təşkilatı',
    year: '2018',
    file: '/ISO 10002 -2018.PDF',
  },
];

export default function SertifikatlarPage() {
  const grid = useReveal<HTMLDivElement>({ stagger: true, direction: 'up' });
  return (
    <Container>
      <Reveal direction="up">
        <SectionTitle
          eyebrow="Standartlar"
          title="Sertifikatlarımız"
          description="Beynəlxalq standartlara uyğunluğumuzu təsdiqləyən sertifikatlar — keyfiyyət, ətraf mühit, əməyin təhlükəsizliyi və müştəri məmnuniyyəti üzrə."
        />
      </Reveal>
      <div ref={grid.ref} className={[styles.docGrid, grid.className].join(' ')}>
        {certificates.map((cert) => (
          <a
            key={cert.code}
            href={encodeURI(cert.file)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.docCardLink}
          >
            <article className={styles.docCard}>
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
                <span className={styles.docMetaAccent}>
                  {cert.year}
                  <ExternalLink size={12} aria-hidden="true" style={{ marginLeft: 6 }} />
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </Container>
  );
}
