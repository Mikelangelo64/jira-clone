<template>
  <div class="workspace">
    <WorkspaceGroup
      v-for="group in groups"
      :key="group.id"
      class="workspace-item"
      v-bind="group"
    />
  </div>
</template>

<script setup lang="ts">
const appStore = useAppStore();
const { groups } = storeToRefs(appStore);
</script>

<style scoped lang="scss">
.workspace {
  width: 100%;
  height: 100%;
  display: flex;

  > * + * {
    margin-left: 20px;
  }

  &-item {
    width: 100%;
  }
}
</style>
