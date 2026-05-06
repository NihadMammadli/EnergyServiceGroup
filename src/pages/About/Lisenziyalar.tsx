import { FileText } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import styles from './about.module.css';

interface LicenseEntry {
  number: string;
  title: string;
  authority: string;
  validUntil: string;
}

// TODO: replace with real licenses when available.
const licenses: LicenseEntry[] = [
  {
    number: 'LIS-001',
    title: 'Boru kəmərinin tikintisi və quraşdırılması',
    authority: 'Energetika Nazirliyi',
    validUntil: 'Müddətsiz',
  },
  {
    number: 'LIS-002',
    title: 'Qaz paylama şəbəkələrinin layihələndirilməsi',
    authority: 'Fövqəladə Hallar Nazirliyi',
    validUntil: '2028',
  },
  {
    number: 'LIS-003',
    title: 'Yüksək təzyiqli sistemlərin istismarı',
    authority: 'Sənaye və Texniki Təhlükəsizlik Agentliyi',
    validUntil: '2027',
  },
  {
    number: 'LIS-004',
    title: 'Tikinti-quraşdırma işlərinin aparılması',
    authority: 'Şəhərsalma və Tikinti Komitəsi',
    validUntil: 'Müddətsiz',
  },
];

export default function LisenziyalarPage() {
  return (
    <Container>
      <SectionTitle
        eyebrow="Sənədlərimiz"
        title="Lisenziyalarımız"
        description="Bütün layihələrimizdə tam yasal uyğunluğu təmin edən etibarlı dövlət lisenziyalarına sahibik."
      />
      <div className={styles.docGrid}>
        {licenses.map((license) => (
          <article key={license.number} className={styles.docCard}>
            <div className={styles.docHeader}>
              <span className={styles.docIcon}>
                <FileText size={20} />
              </span>
              <span className={styles.docNumber}>{license.number}</span>
            </div>
            <h3 className={styles.docTitle}>{license.title}</h3>
            <p className={styles.expertiseText}>{license.authority}</p>
            <div className={styles.docMeta}>
              <span>Etibarlılıq</span>
              <span className={styles.docMetaAccent}>{license.validUntil}</span>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
