export interface Partner {
  id: string;
  name: string;
  initials: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    id: 'socar',
    name: 'SOCAR',
    initials: 'SO',
    description: 'State Oil Company of the Azerbaijan Republic',
  },
  {
    id: 'afez',
    name: 'AFEZ',
    initials: 'AF',
    description: 'Alat Free Economic Zone',
  },
  {
    id: 'azerigas',
    name: 'Azerigaz',
    initials: 'AG',
    description: 'National gas distribution operator',
  },
  {
    id: 'tap',
    name: 'TAP AG',
    initials: 'TA',
    description: 'Trans Adriatic Pipeline',
  },
  {
    id: 'bp',
    name: 'BP Azerbaijan',
    initials: 'BP',
    description: 'Upstream and midstream operations partner',
  },
  {
    id: 'sgc',
    name: 'Southern Gas Corridor',
    initials: 'SG',
    description: 'Strategic energy infrastructure partner',
  },
  {
    id: 'azerenerji',
    name: 'Azerenerji',
    initials: 'AE',
    description: 'National electric utility',
  },
  {
    id: 'asco',
    name: 'ASCO',
    initials: 'AS',
    description: 'Azerbaijan Caspian Shipping Company',
  },
];
