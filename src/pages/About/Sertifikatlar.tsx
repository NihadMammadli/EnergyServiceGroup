import { Award, ExternalLink } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
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
    <>
      <PageHero
        imageSrc='/home/AboutHeroBackground.jpg'
        eyebrow="Beynəlxalq standartlar"
        title="ISO Sertifikatlı İdarəetmə Sistemləri"
        description="ISO 9001 | ISO 14001 | ISO 45001 | ISO 10002"
      />

      <Container className={styles.page}>
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
                <div className={styles.docPreview}>
                  <iframe
                    src={`${encodeURI(cert.file)}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                    title={`${cert.code} — önizləmə`}
                    className={styles.docPreviewFrame}
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className={styles.docPreviewOverlay}>
                    <span className={styles.docPreviewBadge}>
                      <ExternalLink size={12} aria-hidden="true" />
                      Aç
                    </span>
                  </div>
                </div>
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
    </>
  );
}
