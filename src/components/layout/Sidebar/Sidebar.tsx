import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Flame, X } from 'lucide-react';
import logo from '@/assets/logo.jpeg';
import { navItems } from './navItems';
import styles from './Sidebar.module.css';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  isMobile: boolean;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({
  collapsed,
  onToggleCollapse,
  isMobile,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  const showCollapsed = collapsed && !isMobile;

  const asideClass = [
    styles.sidebar,
    showCollapsed ? styles.collapsed : '',
    isMobile ? styles.mobile : '',
    isMobile && isMobileOpen ? styles.mobileOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {isMobile && (
        <div
          className={[styles.backdrop, isMobileOpen ? styles.backdropVisible : ''].join(' ')}
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}
      <aside className={asideClass} aria-label="Primary navigation">
        <div className={styles.brand}>
          <img src={logo} alt="Energy Service Group" className={styles.logo} />
          {!showCollapsed && (
            <div className={styles.brandText}>
              <span className={styles.brandName}>Energy Service</span>
              <span className={styles.brandSub}>Group</span>
            </div>
          )}
          {isMobile && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onMobileClose}
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      [styles.link, isActive ? styles.active : ''].join(' ')
                    }
                    onClick={isMobile ? onMobileClose : undefined}
                    title={showCollapsed ? item.label : undefined}
                  >
                    <Icon size={20} className={styles.linkIcon} aria-hidden="true" />
                    {!showCollapsed && <span className={styles.linkLabel}>{item.label}</span>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {!isMobile && (
          <button
            type="button"
            className={styles.collapseBtn}
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-expanded={!collapsed}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!showCollapsed && <span>Collapse</span>}
          </button>
        )}

        {!showCollapsed && (
          <div className={styles.footnote}>
            <Flame size={14} className={styles.footnoteIcon} aria-hidden="true" />
            <span>Pipeline & gas systems</span>
          </div>
        )}
      </aside>
    </>
  );
}
