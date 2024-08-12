
<template>
  <header class="shadow">
    <nav class="w-full md:w-[80%] mx-auto flex flex-col text-center md:flex-row justify-center items-center md:justify-between py-4 px-2">
      <router-link to="/" class="text-3xl md:text-4xl font-bold text-indigo-600">ThunderBlog</router-link>
      <ul class="flex space-x-4 text-xl items-center mt-4 md:mt-0">
        <li>
          <router-link to="/" class="hover:text-indigo-600">Blogs</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-indigo-600">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-indigo-600">Contact</router-link>
        </li>
        <li v-if="!token">
          <router-link to="/login" class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-12 md:py-3 rounded-md text-white">Login</router-link>
        </li>
        <li v-if="token">
          <router-link to="/dashboard" class="hover:text-indigo-600">Dashboard</router-link>
        </li>
        <li v-if="token">
          <button @click="logout" class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-12 md:py-3 rounded-md text-white">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { computed } from "vue";
import { useuserStore } from "@/stores/userStore";
import { toast } from "vue3-toastify";
import {useRouter} from 'vue-router'

const userStore= useuserStore();
const route = useRouter()
const token = computed(()=>userStore.token);
const logout =()=>{
  try{
    userStore.logoutButton();
  toast.success("logout Success")
  route.replace("/")
  }catch(e){
    toast.error(e.message)
  }
}

</script>

