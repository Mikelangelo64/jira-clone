<template>
  <NuxtLayout name="main">
    <div class="hello">Jira clone by Mykhailo Arkhypov</div>

    <div>
      <DialogForm button-text="Add new task" />
    </div>

    <Workspace />
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hello {
  font-size: 20px;
}
</style>
