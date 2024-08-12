<!-- LoadingComponent.vue -->
<template>
      <div v-if="loading" class="flex flex-col items-center space-y-4">
        <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
        <h1 class="text-xl font-semibold text-gray-700">Loading...</h1>
      </div>
      <div v-else>
        <slot></slot>
      </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useuserStore } from "../stores/userStore";
  import { useRouter } from "vue-router";
  
  const loading = ref(true);
  const userStore = useuserStore();
  const router = useRouter();
  
  onMounted(() => {
    if (userStore.user) {
      loading.value = false;
    } else {
      router.push("/");
    }
  });
  </script>
  