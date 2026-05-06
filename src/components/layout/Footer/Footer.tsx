import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { navItems } from '@/components/layout/Sidebar/navItems';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.brandTitle}>Energy Service Group</span>
            <p className={styles.brandTagline}>
              Pipeline construction, gas systems, and infrastructure engineering for
              industrial and urban projects.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Navigate</h4>
            <ul className={styles.linkList}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={14} aria-hidden="true" />
                <span>Baku, Azerbaijan</span>
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
          <span>© {year} Energy Service Group. All rights reserved.</span>
          <span className={styles.bottomMeta}>Built with care for industrial reliability.</span>
        </div>
      </Container>
    </footer>
  );
}
