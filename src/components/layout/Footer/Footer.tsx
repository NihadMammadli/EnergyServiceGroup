import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
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
            <span className={styles.brandTitle}>Energy Service Group</span>
            <p className={styles.brandTagline}>
              Sənaye və şəhər layihələri üçün boru kəmərinin tikintisi, qaz sistemləri
              və infrastruktur mühəndisliyi.
            </p>
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
                <span>Bakı, Azərbaycan</span>
              </li>
              <li>
                <Mail size={14} aria-hidden="true" />
                <a href="mailto:info@energyservice.group">info@energyservice.group</a>
              </li>
              <li>
                <Phone size={14} aria-hidden="true" />
                <a href="tel:+994000000000">+994 00 000 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Energy Service Group. Bütün hüquqlar qorunur.</span>
          <span className={styles.bottomMeta}>Sənaye etibarlılığı üçün diqqətlə qurulmuşdur.</span>
        </div>
      </Container>
    </footer>
  );
}
