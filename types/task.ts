import type { TId } from './general';

export enum ETaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
}

export enum ETaskPriority {
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low',
}

export interface ITask {
  id: TId;
  title: string;
  description: string;
  assignee: string;
  reporter: string;
  status: ETaskStatus;
  priority: ETaskPriority;
}

export interface IUpdateTaskProps {
  id: ITask['id'];
  data: Partial<Omit<ITask, 'id'>>;
}
