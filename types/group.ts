import type { ETaskStatus, ITask } from '~/types/task';

export interface IGroup {
  id: string;
  title: ETaskStatus;
  position: number;
  tasks: ITask[];
}
