<template>
  <div class="workspace">
    <WorkspaceGroup v-for="group in WORKSPACE_DATA" :key="group.id" />
  </div>
</template>

<script setup lang="ts">
import { WORKSPACE_DATA } from '~/mocks/workspace';
</script>

<style scoped lang="scss">
/* .workspace {} */
</style>
