export interface Partner {
  id: string;
  name: string;
  initials: string;
  description?: string;
  url?: string;
  /** Path to the partner logo (e.g. "/partners/socar.png"). Falls back to initials. */
  logo?: string;
}

export const partners: Partner[] = [
  {
    id: 'socar',
    name: 'SOCAR',
    initials: 'SO',
    description: 'Azərbaycan Respublikası Dövlət Neft Şirkəti',
    url: 'https://socar.az/',
    logo: '',
  },
  {
    id: 'afez',
    name: 'AFEZ',
    initials: 'AF',
    description: 'Ələt Azad İqtisadi Zonası',
    url: 'https://afez.az/',
    logo: '',
  },
  {
    id: 'mida',
    name: 'MİDA',
    initials: 'MD',
    description: 'Mənzil İnşaatı Dövlət Agentliyi',
    url: 'https://mida.gov.az/',
    logo: '',
  },
  {
    id: 'as-group',
    name: 'AS Group',
    initials: 'AS',
    description: 'Tikinti və infrastruktur tərəfdaşı',
    url: 'https://asgroup.az/',
    logo: '',
  },
  {
    id: 'silkway-group',
    name: 'Silkway Group',
    initials: 'SW',
    description: 'Logistika və infrastruktur tərəfdaşı',
    url: 'https://www.silkwaygroup.com/',
    logo: '',
  },
];
