import styles from './ProjectCardSkeleton.module.css';

export function ProjectCardSkeleton() {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <div className={styles.media} />
      <div className={styles.body}>
        <div className={[styles.line, styles.pill].join(' ')} />
        <div className={[styles.line, styles.title].join(' ')} />
        <div className={[styles.line, styles.text].join(' ')} />
        <div className={[styles.line, styles.text, styles.shorter].join(' ')} />
        <div className={styles.footerLine} />
      </div>
    </div>
  );
}
