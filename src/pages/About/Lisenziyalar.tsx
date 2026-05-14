import { FileText, Download } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { Button } from '@/components/ui/Button';
import styles from './about.module.css';

const LICENSE_FILE = '/ESG Lisenziyalar.pdf';

export default function LisenziyalarPage() {
  return (
    <>
      <PageHero
        imageSrc='/home/AboutHeroBackground.jpg'
        eyebrow="Hüquqi əsas"
        title="Lisenziyalı və Səlahiyyətli Podratçı"
        description="Tikinti | Qaz | Su | Elektrik İnfrastrukturu üzrə Dövlət Lisenziyaları"
      />

      <Container className={styles.page}>
        <Reveal direction="up" delay={120} duration={800}>
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
        </Reveal>
      </Container>
    </>
  );
}
