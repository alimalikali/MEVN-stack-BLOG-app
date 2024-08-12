<script setup>
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import { onMounted } from "vue"
import axios  from "axios"
import {useBlogStore} from './stores/blogStore'
import { useuserStore } from './stores/userStore';

const blogStore = useBlogStore();
const userStore= useuserStore();

const fetchUser = async(token)=>{
  try{
        const res =  await axios.get(`http://localhost:2000/api/v1/profile`,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });
        const data = await res.data;
        console.log(data);
        userStore.setUser(data);
  }catch(e){
    console.log(e)
  }
}

const fetchBlogs = async()=>{
  try{
        const res =  await axios.get(`http://localhost:2000/api/v1/post`);
        const data = await res.data;
        console.log(data);
        blogStore.setBlogs(data.posts);
        
  }catch(e){
    console.log(e)
  }
}



onMounted(async()=>{
 await fetchBlogs()
 const token = localStorage.getItem("token");
 if(token){
  await fetchUser(token);
 }
})



</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

