import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Layers, Timer, Users } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProjectCard } from '@/components/common/ProjectCard';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { partners } from '@/data/partners';
import styles from './index.module.css';

export default function HomePage() {
  const completed = projects.filter((p) => p.status === 'completed').length;
  const ongoing = projects.filter((p) => p.status === 'ongoing').length;
  const featured = projects.slice(0, 4);

  const stats = [
    { icon: BadgeCheck, label: 'Tamamlanmış layihələr', value: completed },
    { icon: Timer, label: 'Davam edən layihələr', value: ongoing },
    { icon: Layers, label: 'İllik təcrübə', value: '15+' },
    { icon: Users, label: 'Strateji tərəfdaşlar', value: partners.length },
  ];

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Boru kəmərləri · Qaz sistemləri · İnfrastruktur</span>
            <h1 className={styles.title}>
              Hər kilometrdə{' '}
              <span className={styles.titleAccent}>etibarlı enerji infrastrukturu</span>{' '}
              mühəndisliyi.
            </h1>
            <p className={styles.lead}>
              Energy Service Group beynəlxalq standartlara uyğun, vaxtında və uzunömürlü
              olaraq yüksək tutumlu qaz kəmərləri, paylayıcı şəbəkələr və sənaye
              infrastrukturu layihələrini həyata keçirir.
            </p>
            <div className={styles.heroActions}>
              <Link to="/layihelerimiz/tamamlanmis" className={styles.primaryLink}>
                <Button variant="accent" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Layihələrə bax
                </Button>
              </Link>
              <Link to="/elaqe" className={styles.primaryLink}>
                <Button variant="outline" size="lg">
                  Bizimlə əlaqə
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.statsSection}>
        <Container>
          <ul className={styles.statsGrid}>
            {stats.map(({ icon: Icon, label, value }) => (
              <li key={label} className={styles.statCard}>
                <span className={styles.statIcon}>
                  <Icon size={20} />
                </span>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.featured}>
        <Container>
          <div className={styles.featuredHeader}>
            <SectionTitle
              eyebrow="Seçilmiş İşlər"
              title="Seçilmiş boru kəməri və infrastruktur layihələri"
              description="Dövlət operatorları, sənaye müştəriləri və azad iqtisadi zonalar üçün həyata keçirilən son layihələrimizdən nümunələr."
            />
            <Link to="/layihelerimiz/tamamlanmis" className={styles.viewAll}>
              Bütün layihələri gör <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.cardsGrid}>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
