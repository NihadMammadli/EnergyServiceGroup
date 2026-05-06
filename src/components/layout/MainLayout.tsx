import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './MainLayout.module.css';

const COLLAPSED_KEY = 'esg.sidebar.collapsed';

export function MainLayout() {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const location = useLocation();

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(COLLAPSED_KEY) === '1';
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(COLLAPSED_KEY, collapsed ? '1' : '0');
  }, [collapsed]);

  // Close mobile drawer on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile drawer is open.
  useEffect(() => {
    if (!isMobile) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? 'hidden' : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen, isMobile]);

  return (
    <div className={styles.layout}>
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        isMobile={isMobile}
        isMobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className={styles.shell}>
        <Header
          showMenuButton={isMobile}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
