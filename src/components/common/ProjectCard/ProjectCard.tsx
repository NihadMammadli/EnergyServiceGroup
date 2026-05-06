import { CalendarDays, CheckCircle2, Loader2 } from 'lucide-react';
import type { Project } from '@/types/project';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const STATUS_LABEL: Record<Project['status'], string> = {
  completed: 'Tamamlanıb',
  ongoing: 'Davam edir',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const StatusIcon = project.status === 'completed' ? CheckCircle2 : Loader2;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={[styles.status, styles[project.status]].join(' ')}>
          <StatusIcon size={14} aria-hidden="true" />
          {STATUS_LABEL[project.status]}
        </span>
        {project.client && <span className={styles.client}>{project.client}</span>}
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      <footer className={styles.footer}>
        <span className={styles.timeline}>
          <CalendarDays size={16} aria-hidden="true" />
          {project.timeline}
        </span>
        {project.tags && project.tags.length > 0 && (
          <ul className={styles.tags}>
            {project.tags.slice(0, 2).map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </footer>
    </article>
  );
}
