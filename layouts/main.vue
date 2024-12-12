<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 20px 40px;

  > * + * {
    margin-top: 30px;
  }
}
</style>
