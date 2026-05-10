export interface Partner {
  id: string;
  name: string;
  initials: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    id: 'socar',
    name: 'ARDNŞ (SOCAR) — "Qaz İxrac" İdarəsi',
    initials: 'SO',
    description: 'Magistral qaz kəmərlərinin yenidən qurulması üzrə tərəfdaş',
  },
  {
    id: 'afez',
    name: 'AFEZ',
    initials: 'AF',
    description: 'Ələt Azad İqtisadi Zonası',
  },
  {
    id: 'sw-afezco',
    name: 'SW AFEZCO',
    initials: 'SW',
    description: 'Ələt Karqo Aeroport infrastruktur layihələri üzrə əsas tərəfdaş',
  },
  {
    id: 'mida',
    name: 'MİDA',
    initials: 'MD',
    description: 'Yaşayış kompleksləri üzrə qaz xətti tərəfdaşı',
  },
  {
    id: 'as-insaat',
    name: '"AS İNŞAAT" MMC',
    initials: 'AS',
    description: 'Zəngilan Ağalı kəndlərində tikinti və infrastruktur layihələri',
  },
  {
    id: 'nd-company',
    name: '"ND COMPANY" MMC',
    initials: 'ND',
    description: 'Horadiz–Cəbrayıl qaz kəməri üzrə podrat tərəfdaşı',
  },
  {
    id: 'caspian-railroad',
    name: '"CASPIAN RAILROAD COMPANY" MMC',
    initials: 'CR',
    description: 'Sumqayıt anqar və SOCAR Karbamid yükləmə binası tərəfdaşı',
  },
  {
    id: 'dovlet-komitesi',
    name: 'Qaçqın və Məcburi Köçkünlər üzrə Dövlət Komitəsi',
    initials: 'DK',
    description: 'Sosial obyektlərin təmir-bərpa işləri üzrə tərəfdaş',
  },
];
