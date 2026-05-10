import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.jpeg';
import { Container } from '@/components/common/Container';
import { contactRoute, navItems } from './navConfig';
import styles from './Header.module.css';

export function Header() {
  const location = useLocation();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenKey(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setOpenKey(null);
    setMobileOpen(false);
    setOpenMobileGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.bar}>
          <Link to="/" className={styles.brand} aria-label="Ana səhifə">
            <img src={logo} alt="" className={styles.logo} />
            <span className={styles.brandText}>
              <span className={styles.brandTop}>ENERGY SERVICE</span>
              <span className={styles.brandBottom}>GROUP</span>
            </span>
          </Link>

          <nav className={styles.nav} ref={navRef} aria-label="Əsas naviqasiya">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      [styles.navLink, isActive ? styles.active : ''].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const isOpen = openKey === item.key;
              const childActive = location.pathname.startsWith(item.basePath);

              return (
                <div key={item.key} className={styles.dropdown}>
                  <button
                    type="button"
                    className={[styles.navLink, childActive ? styles.active : ''].join(' ')}
                    onClick={() => setOpenKey(isOpen ? null : item.key)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={[styles.chevron, isOpen ? styles.chevronOpen : ''].join(' ')}
                      aria-hidden="true"
                    />
                  </button>
                  <ul
                    className={[styles.menu, isOpen ? styles.menuOpen : ''].join(' ')}
                    role="menu"
                  >
                    {item.items.map((child) => (
                      <li key={child.to} role="none">
                        <NavLink
                          to={child.to}
                          role="menuitem"
                          className={({ isActive }) =>
                            [styles.menuLink, isActive ? styles.menuLinkActive : ''].join(' ')
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>

          <Link to={contactRoute.to} className={styles.cta}>
            {contactRoute.label}
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Menyunu bağla' : 'Menyunu aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <div
        className={[styles.mobilePanel, mobileOpen ? styles.mobilePanelOpen : ''].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <Container>
          <ul className={styles.mobileList}>
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        [styles.mobileLink, isActive ? styles.mobileLinkActive : ''].join(' ')
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              }
              const expanded = openMobileGroup === item.key;
              return (
                <li key={item.key} className={styles.mobileGroup}>
                  <button
                    type="button"
                    className={styles.mobileGroupHead}
                    onClick={() =>
                      setOpenMobileGroup((k) => (k === item.key ? null : item.key))
                    }
                    aria-expanded={expanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={[styles.chevron, expanded ? styles.chevronOpen : ''].join(' ')}
                    />
                  </button>
                  {expanded && (
                    <ul className={styles.mobileSub}>
                      {item.items.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              [
                                styles.mobileSubLink,
                                isActive ? styles.mobileSubLinkActive : '',
                              ].join(' ')
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li>
              <Link to={contactRoute.to} className={styles.mobileCta}>
                {contactRoute.label}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
