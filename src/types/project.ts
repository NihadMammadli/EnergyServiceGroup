export type ProjectStatus = 'completed' | 'ongoing';

export interface Project {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  timeline: string;
  client?: string;
  contract?: string;
  progress?: string;
  tags?: string[];
  image?: string;
}
