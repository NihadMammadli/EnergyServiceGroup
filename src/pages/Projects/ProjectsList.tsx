import { useEffect, useMemo, useState } from 'react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { ProjectCard, ProjectCardSkeleton } from '@/components/common/ProjectCard';
import { projects } from '@/data/projects';
import type { ProjectStatus } from '@/types/project';
import styles from './projects.module.css';

interface ProjectsListProps {
  status: ProjectStatus;
}

const COPY: Record<
  ProjectStatus,
  { eyebrow: string; title: string; description: string; empty: string }
> = {
  ongoing: {
    eyebrow: 'Layihələrimiz',
    title: 'Davam edən layihələr',
    description:
      'Hazırda icra edilən boru kəməri, paylama şəbəkəsi və stansiya modernləşdirmə proqramları.',
    empty: 'Hazırda davam edən layihə yoxdur.',
  },
  completed: {
    eyebrow: 'Layihələrimiz',
    title: 'Tamamlanmış layihələr',
    description:
      'Beynəlxalq standartlara uyğun, vaxtında və büdcə daxilində uğurla təhvil verilmiş layihələr.',
    empty: 'Hələ ki burada göstəriləcək tamamlanmış layihə yoxdur.',
  },
};

export function ProjectsList({ status }: ProjectsListProps) {
  const [loading, setLoading] = useState(true);
  const copy = COPY[status];

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 500);
    return () => window.clearTimeout(timer);
  }, [status]);

  const visible = useMemo(
    () => projects.filter((p) => p.status === status),
    [status],
  );

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <Container className={styles.page}>
        <div
          key={`${status}-${loading ? 'loading' : 'loaded'}`}
          className={[styles.grid, loading ? '' : 'stagger-mount up'].filter(Boolean).join(' ')}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)
            : visible.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>

        {!loading && visible.length === 0 && (
          <p className={styles.empty}>{copy.empty}</p>
        )}
      </Container>
    </>
  );
}
