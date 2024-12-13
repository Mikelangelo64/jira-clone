<template>
  <div class="group">
    <p class="group-title">{{ title }}</p>

    <div ref="listElement" class="group-list">
      <v-card
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :subtitle="task.status"
        :text="task.assignee"
        class="group-list__item"
        variant="tonal"
      >
        <template #actions>
          <DialogForm button-text="Edit task" :task-id="task.id" />
        </template>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDraggable } from 'vue-draggable-plus';
import { TASKS_DRAG_GROUP } from '~/constants/general';
import type { IGroup } from '~/types/group';
import type { ITask } from '~/types/task';

type TProps = Omit<IGroup, 'tasks'>;

const { title, id } = defineProps<TProps>();

const appStore = useAppStore();
const { tasks: tasksAll, groups } = storeToRefs(appStore);
const tasks = ref<ITask[]>([]);

const listElement = ref<HTMLElement | null>(null);

watchEffect(() => {
  const groupData = groups.value.find(group => group.id === id);
  if (!groupData) {
    return;
  }

  tasks.value = tasksAll.value.filter(item => groupData.title === item.status);
});

useDraggable(listElement, tasks, {
  animation: 150,
  ghostClass: 'ghost',
  dragClass: 'draggable',
  group: TASKS_DRAG_GROUP,
  onAdd: evt => {
    // library mismatch type
    const { data: addedTaskData } = evt as unknown as {
      data: ITask | undefined;
    };
    if (!addedTaskData) {
      return;
    }

    const addedTask = tasks.value.find(item => item.id === addedTaskData.id);

    if (!addedTask) {
      return;
    }

    tasks.value = tasks.value.map(item => {
      if (item.id !== addedTaskData.id) {
        return item;
      }

      item.status = title;
      return item;
    });

    appStore.updateTask({ id: addedTaskData.id, data: { status: title } });
  },
});
</script>

<style scoped lang="scss">
.group {
  padding: 20px;
  background-color: rgb(var(--v-theme-surface));

  &-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: 100%;
  }
}
</style>
