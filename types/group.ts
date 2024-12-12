import type { ETaskStatus, ITask } from '~/types/task';
import type { TId } from './general';

export interface IGroup {
  id: TId;
  title: ETaskStatus;
  position: number;
  tasks: ITask[];
}

export interface IUpdateGroupProps {
  id: IGroup['id'];
  data: Partial<Omit<IGroup, 'tasks' | 'id'>>;
}
