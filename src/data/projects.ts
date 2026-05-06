import type { Project } from '@/types/project';

// TODO: replace these placeholder entries with the real project list when available.
// Each item must satisfy the `Project` type in src/types/project.ts.
export const projects: Project[] = [
  {
    id: 'eg-pe-450-trunk',
    title: 'High-Capacity External Gas Pipeline',
    summary:
      'Construction of a high-capacity external gas pipeline using 450 mm polyethylene pipes spanning over 11 km, fully compliant with international standards.',
    status: 'completed',
    timeline: '2022 — 2023',
    client: 'SOCAR',
    tags: ['Gas distribution', 'Polyethylene', 'External network'],
  },
  {
    id: 'eg-industrial-grid',
    title: 'Industrial Zone Distribution Grid',
    summary:
      'Engineering and installation of a medium-pressure distribution grid serving an industrial zone, including pressure regulation stations and full SCADA integration.',
    status: 'ongoing',
    timeline: '2024 — Present',
    client: 'AFEZ',
    tags: ['Distribution', 'SCADA', 'Industrial'],
  },
  {
    id: 'eg-residential-extension',
    title: 'Residential Network Extension',
    summary:
      'Extension of an urban residential gas network across multiple districts, delivering reliable supply to thousands of households with minimal service disruption.',
    status: 'completed',
    timeline: '2021 — 2022',
    tags: ['Residential', 'Urban infrastructure'],
  },
  {
    id: 'eg-pumping-station',
    title: 'Compressor & Pumping Station Modernization',
    summary:
      'Modernization of a regional compressor and pumping station, upgrading control systems and replacing legacy mechanical assemblies to extend operational life.',
    status: 'ongoing',
    timeline: '2025 — Present',
    tags: ['Stations', 'Modernization'],
  },
];
