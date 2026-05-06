export interface NavLinkItem {
  type: 'link';
  to: string;
  label: string;
}

export interface NavDropdownItem {
  type: 'dropdown';
  key: string;
  label: string;
  basePath: string;
  items: { to: string; label: string }[];
}

export type NavItem = NavLinkItem | NavDropdownItem;

export const navItems: NavItem[] = [
  { type: 'link', to: '/', label: 'Ana səhifə' },
  {
    type: 'dropdown',
    key: 'haqqimizda',
    label: 'Haqqımızda',
    basePath: '/haqqimizda',
    items: [
      { to: '/haqqimizda/melumat', label: 'Məlumat' },
      { to: '/haqqimizda/lisenziyalar', label: 'Lisenziyalar' },
      { to: '/haqqimizda/sertifikatlar', label: 'Sertifikatlar' },
    ],
  },
  {
    type: 'dropdown',
    key: 'layihelerimiz',
    label: 'Layihələrimiz',
    basePath: '/layihelerimiz',
    items: [
      { to: '/layihelerimiz/davam-eden', label: 'Davam edən' },
      { to: '/layihelerimiz/tamamlanmis', label: 'Tamamlanmış' },
    ],
  },
  { type: 'link', to: '/partnyorlar', label: 'Partnyorlar' },
];

export const contactRoute = { to: '/elaqe', label: 'Əlaqə' };
