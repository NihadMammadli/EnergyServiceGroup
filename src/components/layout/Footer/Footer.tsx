import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
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
      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>
          Növbəti layihəniz üçün{' '}
          <span className={styles.ctaTitleAccent}>etibarlı tərəfdaş</span> axtarırsınız?
        </h3>
        <p className={styles.ctaDescription}>
          Qaz kəmərləri, su xətləri və elektrik infrastrukturu — sizinlə yanaşı planlaşdırmaqdan
          təhvilə qədər.
        </p>
        <Link to="/elaqe" className={styles.ctaButton}>
          Bizimlə əlaqə
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={[styles.column, styles.brandSection].join(' ')}>
            <span className={styles.brandTitle}>"Energy Service Group" MMC</span>
            <p className={styles.brandDescription}>
              Magistral qaz kəmərləri, polietilen şəbəkələr, içməli su və elektrik
              təchizatı xətləri, sənaye və yaşayış obyektlərinin tikinti-quraşdırma işləri.
            </p>
            <span className={styles.brandMeta}>VÖEN: 1404206411</span>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Naviqasiya</h4>
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

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Əlaqə</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>Abşeron rayonu, Saray ŞTQ,<br />Polad Həşimov küç. 409</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                <a href="tel:+994502118829">(050) 211 88 29</a>
              </li>
              <li className={styles.contactItem}>
                <Clock size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>B.e — Cümə · 09:00 — 18:00</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Sertifikasiyalar</h4>
            <ul className={styles.linkList}>
              <li><Link to="/haqqimizda/lisenziyalar" className={styles.link}>Lisenziyalar</Link></li>
              <li><Link to="/haqqimizda/sertifikatlar" className={styles.link}>ISO 9001:2015</Link></li>
              <li><Link to="/haqqimizda/sertifikatlar" className={styles.link}>ISO 14001:2015</Link></li>
              <li><Link to="/haqqimizda/sertifikatlar" className={styles.link}>ISO 45001:2018</Link></li>
              <li><Link to="/haqqimizda/sertifikatlar" className={styles.link}>ISO 10002:2018</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} "Energy Service Group" MMC. Bütün hüquqlar qorunur.</span>
          <span className={styles.bottomMeta}>Direktor: N.B. Abbasov</span>
        </div>
      </div>
    </footer>
  );
}
