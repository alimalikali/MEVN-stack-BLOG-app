<script setup>
import { ref } from "vue";
import ProtectedLayout from "../layout/ProtectedLayout.vue";
import { toast } from "vue3-toastify";
import axios from "axios";
const text = ref("");
const title = ref("");
const description = ref("");
const image = ref(null);
import { useBlogStore } from "./../stores/blogStore";
const blogStore = useBlogStore();
const onChangeImage = (img) => {
  image.value = img;
};

const fetchBlogs = async () => {
  try {
    const res = await axios.get(`http://localhost:2000/api/v1/post`);
    const data = await res.data;
    // console.log(data);
    blogStore.setBlogs(data.posts);
  } catch (e) {
    console.log(e);
  }
};

const submitBtn = async () => {
  try {
    const formdata = new FormData();
    formdata.append("title", title.value);
    formdata.append("content", text.value);
    formdata.append("description", description.value);
    formdata.append("image", image.value);
    const response = await axios.post(
      "http://localhost:2000/api/v1/post",
      formdata,
      {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    toast.success(response.data?.msg);
    fetchBlogs();

    title.value = "";
    text.value = "";
    description.value = "";
    image.value = null;
  } catch (error) {
    toast.error(error.response.data.message);
   
  }
};
</script>

<template>
  <ProtectedLayout>
    <section
      class="section w-full mx-auto py-24 px-5 min-h-screen bg-[#ebc44f]"
    >
      <div class="mx-3 px-14 flex flex-col space-y-4">
        <div class="mb-3 flex flex-col space-y-2">
          <label>Title</label>
          <input
            v-model="title"
            placeholder="Enter Title"
            class="ouline-none border-none w-full py-3 px-2 rounded-md"
          />
        </div>
        <div class="mb-3 flex flex-col space-y-2">
          <label>Desciption</label>
          <textarea
            v-model="description"
            placeholder="Enter desc"
            class="ouline-none border-none w-full py-3 px-2 rounded-md"
          ></textarea>
        </div>
        <div class="mb-3 flex flex-col space-y-2">
          <label>Image</label>
          <input
            @change="onChangeImage($event.target.files[0])"
            accept="image/*"
            type="file"
            class="ouline-none border-none w-full py-3 px-2 rounded-md bg-white"
          />
        </div>
        <div class="mb-3 flex flex-col space-y-2">
          <label>Content</label>
          <v-md-editor v-model="text" height="400px"></v-md-editor>
        </div>
        <div class="mb-3 flex justify-center space-y-2">
          <button
            @click="submitBtn"
            class="px-12 py-3 bg-purple-500 hover:bg-purple-600 duration-300 transtion-all rounded-lg text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  </ProtectedLayout>
</template>
