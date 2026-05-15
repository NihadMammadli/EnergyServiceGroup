import { CalendarDays, CheckCircle2, ImageIcon, Loader2 } from 'lucide-react';
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
  const statusLabel =
    project.status === 'ongoing' && project.progress
      ? project.progress
      : STATUS_LABEL[project.status];

  return (
    <article className={styles.card}>
      <div className={styles.media} aria-hidden="true">
        {project.image ? (
          <img src={project.image} alt="" className={styles.mediaImg} />
        ) : (
          <div className={styles.mediaPlaceholder}>
            <ImageIcon size={28} />
            <span>Şəkil tezliklə</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <span className={[styles.status, styles[project.status]].join(' ')}>
            <StatusIcon size={14} aria-hidden="true" />
            {statusLabel}
          </span>
          {project.client && (
            <span className={styles.client}>Sifarişçi - {project.client}</span>
          )}
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
      </div>
    </article>
  );
}
