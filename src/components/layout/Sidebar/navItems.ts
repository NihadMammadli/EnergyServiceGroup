import { Home, Info, Wrench, Handshake, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: Info },
  { to: '/projects', label: 'Projects', icon: Wrench },
  { to: '/partners', label: 'Partners', icon: Handshake },
  { to: '/contact', label: 'Contact', icon: Mail },
];
