<template>
  <v-app>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </v-app>
</template>

<script lang="ts" setup>
import { WORKSPACE_DATA } from '~/mocks/workspace';
import type { ITask } from '~/types/task';

const appStore = useAppStore();
const { tasks, groups } = storeToRefs(appStore);

useAsyncData('init workspace data', async () => {
  const tasksData: ITask[] = [];

  WORKSPACE_DATA.forEach(item => {
    tasksData.push(...item.tasks);
  });

  appStore.initGroups(WORKSPACE_DATA);
  appStore.initTasks(tasksData);

  return !!tasks.value && !!groups.value;
});
</script>
