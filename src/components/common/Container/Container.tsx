import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'md' | 'lg' | 'full';
}

export function Container({
  children,
  size = 'lg',
  className,
  ...rest
}: ContainerProps) {
  const cls = [styles.container, styles[size], className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
