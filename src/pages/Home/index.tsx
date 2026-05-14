import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  HardHat,
  Layers,
  Network,
  ShieldCheck,
  Timer,
  Users,
  Wrench,
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { ProjectCard } from '@/components/common/ProjectCard';
import { useReveal } from '@/hooks/useReveal';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { projects } from '@/data/projects';
import { partners } from '@/data/partners';
import styles from './index.module.css';

export default function HomePage() {
  const completed = projects.filter((p) => p.status === 'completed').length;
  const ongoing = projects.filter((p) => p.status === 'ongoing').length;
  const featured = projects.slice(0, 4);

  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsReveal = useReveal<HTMLDivElement>({ stagger: true, direction: 'up' });

  const completedCount = useCounterAnimation(completed, 1400, statsReveal.inView);
  const ongoingCount   = useCounterAnimation(ongoing,   1400, statsReveal.inView);
  const totalCount     = useCounterAnimation(projects.length, 1400, statsReveal.inView);
  const partnersCount  = useCounterAnimation(partners.length, 1400, statsReveal.inView);

  const stats = [
    { icon: BadgeCheck, label: 'Tamamlanmış layihələr', value: completedCount },
    { icon: Timer,      label: 'Davam edən layihələr',  value: ongoingCount },
    { icon: Layers,     label: 'Ümumi layihələr',       value: totalCount },
    { icon: Users,      label: 'Strateji tərəfdaşlar',   value: partnersCount },
  ];

  const expertise = [
    {
      icon: Wrench,
      title: 'Qaz kəmərlərinin çəkilişi',
      text: 'Magistral polad qaz kəmərləri və polietilen şəbəkələr — AZS və EN standartlarına uyğun.',
    },
    {
      icon: Network,
      title: 'İçməli su və kanalizasiya',
      text: 'PE 100 SDR 11 polietilen borularla içməli su və kanalizasiya xətlərinin çəkilişi.',
    },
    {
      icon: HardHat,
      title: 'Tikinti və elektrik təchizatı',
      text: 'Sənaye obyektləri, yaşayış kompleksləri və transformator məntəqələrinin quraşdırılması.',
    },
    {
      icon: ShieldCheck,
      title: 'Beynəlxalq sertifikasiya',
      text: 'ISO 9001, 14001, 45001 və 10002 idarəetmə sistemləri ilə tam uyğunluq.',
    },
    {
      icon: Layers,
      title: 'Layihələndirmə və icra',
      text: 'Texniki layihə hazırlığından təhvilə qədər tam məsuliyyət və nəzarət.',
    },
    {
      icon: Users,
      title: 'Etibarlı tərəfdaşlıq',
      text: 'SOCAR, AFEZ, MİDA və dövlət qurumları ilə uzunmüddətli müqavilələr.',
    },
  ];

  const cardsStagger = useReveal<HTMLDivElement>({ stagger: true, direction: 'up' });
  const expertiseStagger = useReveal<HTMLDivElement>({ stagger: true, direction: 'up' });

  const handleScrollDown = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        variant="full"
        eyebrow="Qaz · Su · Tikinti · Enerji"
        title={
          <>
            Magistral qaz kəmərlərindən{' '}
            <span className={styles.titleAccent}>aeroport infrastrukturuna</span>{' '}
            qədər etibarlı mühəndislik.
          </>
        }
        description='"Energy Service Group" MMC — SOCAR, AFEZ, MİDA və dövlət qurumlarının layihələrində magistral qaz kəmərləri, polietilen şəbəkələr, içməli su və elektrik təchizatı xətlərini beynəlxalq standartlara uyğun icra edir.'
        showScrollCue
        onScrollClick={handleScrollDown}
      >
        <Link to="/layihelerimiz/tamamlanmis" className={styles.primaryButton}>
          Layihələrə bax
          <ArrowRight size={18} />
        </Link>
        <Link to="/elaqe" className={styles.secondaryButton}>
          Bizimlə əlaqə
        </Link>
      </PageHero>

      <section className={styles.statsSection} ref={statsRef}>
        <div
          ref={statsReveal.ref}
          className={[styles.statsGrid, statsReveal.className].join(' ')}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className={styles.statCard}>
              <span className={styles.statIcon}>
                <Icon size={26} strokeWidth={1.6} />
              </span>
              <span className={styles.statValue}>{value}+</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.expertiseSection}>
        <header className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Fəaliyyət sahələrimiz</span>
          <h2 className={styles.sectionTitle}>
            Mühəndislik dəqiqliyi.{' '}
            <span className={styles.sectionTitleAccent}>Etibarlı təhvil.</span>
          </h2>
          <p className={styles.sectionLead}>
            Qaz, su və enerji infrastrukturu üzrə ixtisaslaşmış komandamız hər bir layihəni
            beynəlxalq keyfiyyət və əməyin təhlükəsizliyi standartlarına uyğun həyata keçirir.
          </p>
        </header>
        <div
          ref={expertiseStagger.ref}
          className={[styles.expertiseGrid, expertiseStagger.className].join(' ')}
        >
          {expertise.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.expertiseCard}>
              <span className={styles.expertiseIcon}>
                <Icon size={28} strokeWidth={1.6} />
              </span>
              <h3 className={styles.expertiseTitle}>{title}</h3>
              <p className={styles.expertiseText}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <header className={styles.featuredHeader}>
          <div className={styles.featuredTitleRow}>
            <div className={styles.featuredTitleStack}>
              <span className={styles.sectionEyebrow}>Seçilmiş İşlər</span>
              <h2 className={styles.sectionTitle}>
                Boru kəməri və{' '}
                <span className={styles.sectionTitleAccent}>infrastruktur layihələri</span>
              </h2>
              <p className={styles.sectionLead}>
                Dövlət operatorları, sənaye müştəriləri və azad iqtisadi zonalar üçün həyata
                keçirilən son layihələrimizdən nümunələr.
              </p>
            </div>
            <Link to="/layihelerimiz/tamamlanmis" className={styles.viewAll}>
              Bütün layihələri gör
              <ArrowRight size={16} />
            </Link>
          </div>
        </header>
        <div
          ref={cardsStagger.ref}
          className={[styles.cardsGrid, cardsStagger.className].join(' ')}
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
