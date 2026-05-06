export type ProjectStatus = 'completed' | 'ongoing';

export interface Project {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  timeline: string;
  client?: string;
  tags?: string[];
}
