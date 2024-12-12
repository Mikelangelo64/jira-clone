import { defineStore } from 'pinia';
import type { IUpdateGroupProps, IGroup } from '~/types/group';
import type { IUpdateTaskProps, ITask } from '~/types/task';

export const useAppStore = defineStore('app', () => {
  // state
  const groups = ref<Omit<IGroup, 'tasks'>[]>([]);
  const tasks = ref<ITask[]>([]);

  // actions
  const initGroups = (groupsProp: IGroup[]) => {
    groups.value = groupsProp.map(item => {
      const { tasks, ...result } = item;
      return result;
    });
  };

  const updateGroup = ({ id, data }: IUpdateGroupProps) => {
    if (
      groups.value.length === 0 ||
      (Object.keys(data).length === 0 && data.constructor === Object)
    ) {
      return;
    }

    groups.value = groups.value.map(item => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        ...data,
      };
    });
  };

  const initTasks = (tasksProp: ITask[]) => {
    tasks.value = [...tasksProp];
  };

  const addTask = (newTask: ITask) => {
    tasks.value.push(newTask);
  };

  const updateTask = ({ id, data }: IUpdateTaskProps) => {
    if (
      tasks.value.length === 0 ||
      (Object.keys(data).length === 0 && data.constructor === Object)
    ) {
      return;
    }

    tasks.value = tasks.value.map(item => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        ...data,
      };
    });
  };

  return {
    groups,
    tasks,
    initGroups,
    updateGroup,
    initTasks,
    addTask,
    updateTask,
  };
});
