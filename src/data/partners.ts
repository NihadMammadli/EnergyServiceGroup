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
    description: 'Azərbaycan Respublikasının Dövlət Neft Şirkəti',
  },
  {
    id: 'afez',
    name: 'AFEZ',
    initials: 'AF',
    description: 'Ələt Azad İqtisadi Zonası',
  },
  {
    id: 'azerigas',
    name: 'Azəriqaz',
    initials: 'AG',
    description: 'Milli qaz paylama operatoru',
  },
  {
    id: 'tap',
    name: 'TAP AG',
    initials: 'TA',
    description: 'Trans-Adriatik Boru Kəməri',
  },
  {
    id: 'bp',
    name: 'BP Azerbaijan',
    initials: 'BP',
    description: 'Yuxarı və orta axın əməliyyatları üzrə tərəfdaş',
  },
  {
    id: 'sgc',
    name: 'Cənub Qaz Dəhlizi',
    initials: 'SG',
    description: 'Strateji enerji infrastrukturu tərəfdaşı',
  },
  {
    id: 'azerenerji',
    name: 'Azərenerji',
    initials: 'AE',
    description: 'Milli elektrik enerjisi şirkəti',
  },
  {
    id: 'asco',
    name: 'ASCO',
    initials: 'AS',
    description: 'Azərbaycan Xəzər Dəniz Gəmiçiliyi',
  },
];
