import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import styles from './Footer.module.css';

const FOOTER_LINKS: { to: string; label: string }[] = [
  { to: '/', label: 'Ana səhifə' },
  { to: '/haqqimizda/melumat', label: 'Haqqımızda' },
  { to: '/layihelerimiz/tamamlanmis', label: 'Layihələrimiz' },
  { to: '/partnyorlar', label: 'Partnyorlar' },
  { to: '/elaqe', label: 'Əlaqə' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.brandTitle}>"Energy Service Group" MMC</span>
            <p className={styles.brandTagline}>
              Magistral qaz kəmərləri, polietilen şəbəkələr, içməli su və elektrik
              təchizatı xətləri, sənaye və yaşayış obyektlərinin tikinti-quraşdırma işləri.
            </p>
            <span className={styles.brandTagline}>VÖEN: 1404206411</span>
          </div>

          <div>
            <h4 className={styles.heading}>Naviqasiya</h4>
            <ul className={styles.linkList}>
              {FOOTER_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Əlaqə</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={14} aria-hidden="true" />
                <span>Abşeron rayonu, Saray ŞTQ, Polad Həşimov küç. 409</span>
              </li>
              <li>
                <Phone size={14} aria-hidden="true" />
                <a href="tel:+994502118829">(050) 211 88 29</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} "Energy Service Group" MMC. Bütün hüquqlar qorunur.</span>
          <span className={styles.bottomMeta}>Direktor: N.B. Abbasov</span>
        </div>
      </Container>
    </footer>
  );
}
