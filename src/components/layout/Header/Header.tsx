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
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      <header
        className={[styles.header, scrolled || mobileOpen ? styles.headerSolid : ''].join(' ')}
      >
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
      </header>

      <div
        className={[styles.overlay, mobileOpen ? styles.overlayOpen : ''].join(' ')}
        onClick={closeDrawer}
        aria-hidden={!mobileOpen}
      />

      <aside
        className={[styles.drawer, mobileOpen ? styles.drawerOpen : ''].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.drawerHeader}>
          <Link to="/" className={styles.drawerLogo} onClick={closeDrawer}>
            <img src={logo} alt="" className={styles.logo} />
            <span className={styles.brandText}>
              <span className={styles.drawerBrandTop}>ENERGY SERVICE</span>
              <span className={styles.drawerBrandBottom}>GROUP</span>
            </span>
          </Link>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeDrawer}
            aria-label="Menyunu bağla"
          >
            <X size={22} />
          </button>
        </div>

        <div className={styles.drawerBody}>
          <nav className={styles.drawerNav} aria-label="Mobil naviqasiya">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      [styles.drawerNavLink, isActive ? styles.drawerNavLinkActive : ''].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }
              const expanded = openMobileGroup === item.key;
              const childActive = location.pathname.startsWith(item.basePath);
              return (
                <div key={item.key} className={styles.drawerGroup}>
                  <button
                    type="button"
                    className={[
                      styles.drawerGroupHead,
                      childActive ? styles.drawerGroupHeadActive : '',
                    ].join(' ')}
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
                    <div className={styles.drawerSub}>
                      {item.items.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={closeDrawer}
                          className={({ isActive }) =>
                            [
                              styles.drawerSubLink,
                              isActive ? styles.drawerSubLinkActive : '',
                            ].join(' ')
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className={styles.drawerFooter}>
          <Link
            to={contactRoute.to}
            className={styles.drawerContactButton}
            onClick={closeDrawer}
          >
            {contactRoute.label}
          </Link>
          <div className={styles.drawerBrand}>
            <div className={styles.drawerBrandTitle}>ENERGY SERVICE GROUP</div>
            <div className={styles.drawerBrandSubtitle}>
              Etibarlı enerji infrastrukturu
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
