import { useEffect, useMemo, useState } from 'react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProjectCard, ProjectCardSkeleton } from '@/components/common/ProjectCard';
import { projects } from '@/data/projects';
import type { ProjectStatus } from '@/types/project';
import styles from './index.module.css';

type Filter = 'all' | ProjectStatus;

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'ongoing', label: 'Ongoing' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(timer);
  }, []);

  const visibleProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <Container>
      <SectionTitle
        eyebrow="Project portfolio"
        title="Pipeline & infrastructure programs"
        description="A curated selection of completed and ongoing engagements — from external trunk lines to industrial distribution grids."
      />

      <div className={styles.controls} role="tablist" aria-label="Filter projects by status">
        {FILTERS.map((option) => (
          <button
            key={option.value}
            role="tab"
            aria-selected={filter === option.value}
            type="button"
            className={[
              styles.chip,
              filter === option.value ? styles.chipActive : '',
            ].join(' ')}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)
          : visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>

      {!loading && visibleProjects.length === 0 && (
        <p className={styles.empty}>No projects match this filter yet.</p>
      )}
    </Container>
  );
}
