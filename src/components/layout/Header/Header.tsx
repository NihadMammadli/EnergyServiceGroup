import { Menu, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { navItems } from '@/components/layout/Sidebar/navItems';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuClick: () => void;
  showMenuButton: boolean;
}

export function Header({ onMenuClick, showMenuButton }: HeaderProps) {
  const location = useLocation();

  const pageLabel = useMemo(() => {
    const match = navItems.find((item) =>
      item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to),
    );
    return match?.label ?? '';
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {showMenuButton && (
          <button
            type="button"
            className={styles.menuBtn}
            onClick={onMenuClick}
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>
        )}
        <div className={styles.crumb}>
          <span className={styles.crumbAccent}>Energy Service Group</span>
          {pageLabel && (
            <>
              <span className={styles.crumbSep} aria-hidden="true">/</span>
              <span className={styles.crumbCurrent}>{pageLabel}</span>
            </>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <a href="tel:+994000000000" className={styles.phone}>
          <Phone size={16} aria-hidden="true" />
          <span className={styles.phoneText}>+994 00 000 00 00</span>
        </a>
      </div>
    </header>
  );
}
