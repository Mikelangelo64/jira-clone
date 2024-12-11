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
  id: string;
  title: string;
  description: string;
  assignee: string;
  reporter: string;
  status: ETaskStatus;
  priority: ETaskPriority;
}
