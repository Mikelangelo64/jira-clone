import type { IGroup } from '~/types/group';
import { ETaskPriority, ETaskStatus } from '~/types/task';

export const WORKSPACE_DATA: IGroup[] = [
  {
    id: '0',
    title: ETaskStatus.TODO,
    position: 0,
    tasks: [
      {
        id: '01',
        title: 'title 01',
        description: 'description 01',
        assignee: 'Mykhaylo',
        reporter: 'Mykhaylo Reporter',
        status: ETaskStatus.TODO,
        priority: ETaskPriority.NORMAL,
      },
      {
        id: '02',
        title: 'title 02',
        description: 'description 02',
        assignee: 'Mykhaylo',
        reporter: 'Mykhaylo Reporter',
        status: ETaskStatus.TODO,
        priority: ETaskPriority.NORMAL,
      },
    ],
  },
  {
    id: '1',
    title: ETaskStatus.IN_PROGRESS,
    position: 1,
    tasks: [
      {
        id: '1-1',
        title: 'title 11',
        description: 'description 11',
        assignee: 'Mykhaylo',
        reporter: 'Mykhaylo Reporter',
        status: ETaskStatus.IN_PROGRESS,
        priority: ETaskPriority.NORMAL,
      },
      {
        id: '1-2',
        title: 'title 12',
        description: 'description 12',
        assignee: 'Mykhaylo',
        reporter: 'Mykhaylo Reporter',
        status: ETaskStatus.IN_PROGRESS,
        priority: ETaskPriority.NORMAL,
      },
    ],
  },
  {
    id: '2',
    title: ETaskStatus.DONE,
    position: 2,
    tasks: [
      {
        id: '21',
        title: 'title 21',
        description: 'description 21',
        assignee: 'Mykhaylo',
        reporter: 'Mykhaylo Reporter',
        status: ETaskStatus.DONE,
        priority: ETaskPriority.NORMAL,
      },
      {
        id: '22',
        title: 'title 22',
        description: 'description 22',
        assignee: 'Mykhaylo',
        reporter: 'Mykhaylo Reporter',
        status: ETaskStatus.DONE,
        priority: ETaskPriority.NORMAL,
      },
    ],
  },
];
