import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  // state
  const count = ref(1);

  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value = count.value - 1 > 0 ? count.value - 1 : count.value;
  };

  return {
    count,
    doubleCount,
    increment,
    decrement,
  };
});
