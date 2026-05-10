import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'crc-sumqayit-anqar',
    title: 'Sumqayıt anqar və SOCAR Karbamid yükləmə binasının tikintisi',
    summary:
      'Sumqayıt şəhərində 5 ha ərazidə anqarın tikinti işləri və SOCAR Karbamid zavodu ərazisində yük maşınları və konteynerlərin yükləmə binasının tikintisi işləri.',
    status: 'completed',
    timeline: '04.05.2023 — 31.12.2024',
    client: '"CASPIAN RAILROAD COMPANY" MMC',
    contract: 'CRC-ESG-05/23/03 · 06.03.2023',
    tags: ['Tikinti', 'Sənaye obyekti'],
  },
  {
    id: 'nd-horadiz-cebrayil',
    title: 'Horadiz–Cəbrayıl qaz kəmərinin çəkilişi',
    summary:
      'Horadiz–Cəbrayıl qaz kəmərinin çəkilişi: torpaq işləri və qaz xətti çəkilişi işləri.',
    status: 'completed',
    timeline: '16.09.2023 — 01.09.2024',
    client: '"ND COMPANY" MMC',
    contract: 'ND-ECG-06/23 · 19.06.2023',
    tags: ['Qaz kəməri', 'Torpaq işləri'],
  },
  {
    id: 'dovlet-komitesi-temir',
    title: 'Məcburi köçkünlər üçün bina və yataqxanaların təmiri',
    summary:
      'Ağcabədi rayonunda GEM və TPM binalarının dam örtüklərinin vurulması və təmiri, Rəncbər kəndində hamam binasının təmiri, Bakı Gilavar Sanatoriyasında və Şəmkir Yenihəyat kəndində KB binasının təmiri, Qaradağ Qızıldaş 8 saylı Peşə məktəbinin yataqxanasının təmiri işləri.',
    status: 'completed',
    timeline: '31.10.2023 — 31.10.2024',
    client: 'Azərbaycan Respublikası Qaçqınların və Məcburi Köçkünlərin İşləri Üzrə Dövlət Komitəsi',
    contract: 'MM/AZ/09 · 31.10.2023',
    tags: ['Təmir-bərpa', 'Sosial obyekt'],
  },
  {
    id: 'mida-sirvan-qaz',
    title: 'Şirvan yaşayış kompleksinin xarici və daxili qaz xətləri',
    summary:
      'Şirvan şəhəri, Naxçıvan küçəsində 8,11 ha ərazidə tikilmiş yaşayış binalarının qaz xətti çəkilişi: 219 mm metal daşıyıcı boru ilə xarici, 160–110 mm polietilen boru ilə daxili, 108/89/76/57/40/20/15 mm metal borularla binadaxili xətlər.',
    status: 'ongoing',
    timeline: '22.01.2025 — Hazırda',
    client: 'MİDA',
    progress: '80% tikilib',
    tags: ['Qaz xətti', 'Yaşayış kompleksi', 'Polietilen'],
  },
  {
    id: 'as-insaat-zengilan-agali',
    title: 'Zəngilan Ağalı-1 və Ağalı-2 kəndlərində evlərin tikintisi və qaz/su xətləri',
    summary:
      'Zəngilan rayonu Ağalı-1 və Ağalı-2 kəndlərində 3, 4 və 5 otaqlı evlərin tikilməsi, evlərə polietilen borularla qaz və içməli su xətti çəkilişi işləri.',
    status: 'completed',
    timeline: '16.06.2024 — 15.01.2026',
    client: '"AS İNŞAAT" MMC',
    contract: '16.06.2024',
    tags: ['Tikinti', 'Qaz xətti', 'İçməli su'],
  },
  {
    id: 'afezco-aeroport-tm',
    title: 'Ələt Karqo Aeroportunda 2 ədəd 400 kVA TM tikintisi və quraşdırma',
    summary:
      'Ələt Azad İqtisadi Zonasında Yeni Karqo Aeroportunun Ələt Beynəlxalq Hava Limanı ərazisində 2 ədəd 400 kVA-lıq transformator məntəqəsinin tikintisi və avadanlıqların quraşdırılması işləri.',
    status: 'ongoing',
    timeline: '03.02.2025 — Hazırda',
    client: 'SW AFEZCO',
    contract: 'ESG/032/2025',
    progress: '80% tikilib',
    tags: ['Elektrik', 'Transformator', 'Aeroport'],
  },
  {
    id: 'afezco-qaz-xetti-450',
    title: 'Ələt Karqo Aeroportunda 11 089 m, Ø450 mm xarici qaz xəttinin çəkilişi',
    summary:
      'Yeni Karqo Aeroportunun Ələt Beynəlxalq Hava Limanında AZS 806-2-2014 və EN 12201-2 standartlarına cavab verən, diametri 450 mm, divar qalınlığı 40,9 mm olan polietilen qaz borusu ilə 11 089 m xarici qaz xəttinin çəkilişi.',
    status: 'completed',
    timeline: '03.03.2025 — Hazırda',
    client: 'SW AFEZCO',
    contract: 'ESG/038/2025',
    tags: ['Qaz kəməri', 'Polietilen', 'Aeroport'],
  },
  {
    id: 'afez-pirsaatcay-mecra',
    title: 'Pirsaatçayın məcrasının dəyişdirilməsi (62 m enli yeni kanal)',
    summary:
      'Pirsaatçayın məcrasının dəyişdirilməsi və 62 metr enində yeni kanalın tikilməsi işləri.',
    status: 'completed',
    timeline: '04.07.2025 — Hazırda',
    client: 'AFEZ',
    contract: 'AFES4-OFF-İNF001 · 04.07.2025',
    tags: ['Hidrotexnika', 'Kanal tikintisi'],
  },
  {
    id: 'afezco-cargo-village',
    title: '"Cargo Village and Airport" infrastruktur kompleksi',
    summary:
      'Ələt Azad İqtisadi Zonasında "Cargo Village and Airport" layihəsi: layihələndirmə, kanalizasiya şəbəkəsi, içməli su xətləri, elektrik təchizatı kabel boruları və yağış suyu şəbəkəsi işləri.',
    status: 'ongoing',
    timeline: '30.05.2025 — Hazırda',
    client: 'SW AFEZCO',
    contract: '30.05.2025',
    progress: '30% tikilib',
    tags: ['Kanalizasiya', 'İçməli su', 'Elektrik', 'Layihələndirmə'],
  },
  {
    id: 'afezco-su-xetti-225',
    title: 'Ələt Karqo Aeroportunda 8 200 m, Ø225 mm xarici içməli su xətti',
    summary:
      'Yeni Karqo Aeroportunun Ələt Beynəlxalq Hava Limanında diametri 225 mm, divar qalınlığı 20,5 mm, PE 100 SDR 11 borusu ilə 8 200 m xarici içməli su xəttinin çəkilişi.',
    status: 'completed',
    timeline: '04.07.2025 — Hazırda',
    client: 'SW AFEZCO',
    contract: 'ESG/037/2025',
    tags: ['İçməli su', 'Polietilen', 'Aeroport'],
  },
  {
    id: 'socar-qazimemmed-qazax',
    title: '"Qazıməmməd–Qazax" I xətt magistral qaz kəmərinin yenidən qurulması',
    summary:
      '"Qazıməmməd–Qazax" I xətt magistral qaz kəmərinin 148–182,5-ci km hissəsinin yenidən qurulması layihəsi çərçivəsində Dş 1000 mm-lik polad boru ilə 34 692 m qaz kəmərinin çəkilişi.',
    status: 'ongoing',
    timeline: '31.05.2025 — Hazırda',
    client: 'ARDNŞ (SOCAR) — "Qaz İxrac" İdarəsi',
    contract: '14-2-12-3-10158/25 · 04.07.2025',
    progress: '80% tikilib',
    tags: ['Magistral qaz kəməri', 'Polad boru', 'SOCAR'],
  },
  {
    id: 'afezco-muveqqeti-elektrik',
    title: 'Ələt Karqo Aeroportunda müvəqqəti elektrik xətti və 400 kVA transformator',
    summary:
      'Ələt Azad İqtisadi Zonasında Yeni Karqo Aeroportunun Ələt Beynəlxalq Hava Limanı ərazisində müvəqqəti elektrik xəttinin çəkilməsi və 400 kVA-lıq transformatorun quraşdırılması işləri.',
    status: 'completed',
    timeline: '20.02.2026 — Hazırda',
    client: 'SW AFEZCO',
    contract: 'ESG/010/2026',
    tags: ['Elektrik', 'Transformator', 'Aeroport'],
  },
];
