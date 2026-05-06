import type { Project } from '@/types/project';

// TODO: replace these placeholder entries with the real project list when available.
// Each item must satisfy the `Project` type in src/types/project.ts.
export const projects: Project[] = [
  {
    id: 'eg-pe-450-trunk',
    title: 'Yüksək Tutumlu Xarici Qaz Kəməri',
    summary:
      '450 mm polietilen borulardan istifadə edərək 11 km-dən artıq uzunluqda yüksək tutumlu xarici qaz kəmərinin tikintisi — beynəlxalq standartlara tam uyğun.',
    status: 'completed',
    timeline: '2022 — 2023',
    client: 'SOCAR',
    tags: ['Qaz paylama', 'Polietilen', 'Xarici şəbəkə'],
  },
  {
    id: 'eg-industrial-grid',
    title: 'Sənaye Zonası Paylama Şəbəkəsi',
    summary:
      'Sənaye zonasına xidmət edən orta təzyiqli paylama şəbəkəsinin layihələndirilməsi və quraşdırılması — təzyiq tənzimləmə stansiyaları və tam SCADA inteqrasiyası daxil olmaqla.',
    status: 'ongoing',
    timeline: '2024 — Hazırda',
    client: 'AFEZ',
    tags: ['Paylama', 'SCADA', 'Sənaye'],
  },
  {
    id: 'eg-residential-extension',
    title: 'Yaşayış Şəbəkəsinin Genişləndirilməsi',
    summary:
      'Şəhər yaşayış qaz şəbəkəsinin bir neçə rayon üzrə genişləndirilməsi — minlərlə evə minimum xidmət kəsintisi ilə etibarlı təchizat.',
    status: 'completed',
    timeline: '2021 — 2022',
    tags: ['Yaşayış', 'Şəhər infrastrukturu'],
  },
  {
    id: 'eg-pumping-station',
    title: 'Kompressor və Nasos Stansiyasının Modernləşdirilməsi',
    summary:
      'Regional kompressor və nasos stansiyasının modernləşdirilməsi — idarəetmə sistemlərinin yenilənməsi və köhnə mexaniki düyünlərin əvəz edilməsi ilə əməliyyat müddətinin uzadılması.',
    status: 'ongoing',
    timeline: '2025 — Hazırda',
    tags: ['Stansiyalar', 'Modernləşdirmə'],
  },
];
