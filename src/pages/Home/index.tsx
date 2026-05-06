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
    { icon: BadgeCheck, label: 'Projects Completed', value: completed },
    { icon: Timer, label: 'Ongoing Projects', value: ongoing },
    { icon: Layers, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Strategic Partners', value: partners.length },
  ];

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Pipeline · Gas Systems · Infrastructure</span>
            <h1 className={styles.title}>
              Engineering reliable <span className={styles.titleAccent}>energy infrastructure</span>{' '}
              across every kilometer.
            </h1>
            <p className={styles.lead}>
              Energy Service Group designs and builds high-capacity gas pipelines,
              distribution networks, and industrial infrastructure — delivered to
              international standards, on schedule, and engineered to last.
            </p>
            <div className={styles.heroActions}>
              <Link to="/projects" className={styles.primaryLink}>
                <Button variant="accent" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Explore projects
                </Button>
              </Link>
              <Link to="/contact" className={styles.primaryLink}>
                <Button variant="outline" size="lg">
                  Talk to our team
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
              eyebrow="Featured Work"
              title="Selected pipeline & infrastructure projects"
              description="A snapshot of recent engagements delivered for state operators, industrial clients, and free-economic zones."
            />
            <Link to="/projects" className={styles.viewAll}>
              View all projects <ArrowRight size={16} />
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
