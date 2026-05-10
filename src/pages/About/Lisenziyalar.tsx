import { FileText, Download } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/Button';
import styles from './about.module.css';

const LICENSE_FILE = '/ESG Lisenziyalar.pdf';

export default function LisenziyalarPage() {
  return (
    <Container>
      <SectionTitle
        eyebrow="Sənədlərimiz"
        title="Lisenziyalarımız"
        description='"Energy Service Group" MMC tərəfindən aparılan tikinti, qaz və infrastruktur işlərinin qanuni əsasını təşkil edən rəsmi dövlət lisenziyaları.'
      />

      <div className={styles.licenseHero}>
        <div className={styles.licenseHeroLeft}>
          <span className={styles.docIcon}>
            <FileText size={22} />
          </span>
          <div>
            <h3 className={styles.docTitle}>"Energy Service Group" MMC — Lisenziyalar paketi</h3>
            <p className={styles.expertiseText}>
              Şirkətin fəaliyyət göstərdiyi sahələr üzrə bütün lisenziyalar tək sənəddə
              toplanmışdır. Tam siyahı və tarixləri görmək üçün PDF-i açın və ya yükləyin.
            </p>
          </div>
        </div>
        <a
          href={encodeURI(LICENSE_FILE)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.licenseLink}
        >
          <Button variant="accent" rightIcon={<Download size={16} />}>
            Lisenziyaları aç (PDF)
          </Button>
        </a>
      </div>
    </Container>
  );
}
