<template>
  <div class="about">
    <Form
      :on-submit="onSubmitHandler"
      :validation-schema="validationSchema"
      :initial-values="initialValues"
      class="w-[90%] mt-12 md:w-1/2 mx-auto flex py-24 flex-col px-10 bg-gray-200 rounded-md"
    >
      <h1 class="text-center font-semibold text-5xl f-1">Log In</h1>

      <div class="mb-3 w-full">
        <label class="text-start"
          >Email <span class="text-red-500">*</span></label
        >
        <Field
          name="email"
          type="text"
          placeholder="Enter Email Address"
          class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif placeholder:font-normal"
        />
        <p class="text-red-500">
          <ErrorMessage name="email" />
        </p>
      </div>
      <div class="mb-3 w-full">
        <label class="text-start"
          >Password <span class="text-red-500">*</span></label
        >
        <Field
          name="password"
          type="password"
          placeholder="Enter Password"
          class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif placeholder:font-normal"
        />
        <p class="text-red-500">
          <ErrorMessage name="password" />
        </p>
      </div>
      <div class="mb-3 w-full flex justify-center">
        <button
          class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-12 py-3 rounded-md text-white text-2xl f-1"
        >
          Login In
        </button>
      </div>
      <div class="mb-3">
        <p class="text-center text-lg">
          Dont Have An Account
          <span class="text-indigo-500"
            ><router-link to="/registor">Registor?</router-link></span
          >
        </p>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import { toast } from "vue3-toastify";
import axios from "axios";
import { useRouter } from "vue-router";
import { useuserStore } from "@/stores/userStore";
const router = useRouter();

const validationSchema = yup.object({
  email: yup
    .string()
    .email("plese enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "password is grater than 5 characters")
    .required("password is required"),
});
const initialValues = {
  email: "",
  password: "",
};

const userStore = useuserStore();

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


const onSubmitHandler = async (e, { resetForm }) => {
  try {
    const res = await axios.post("http://localhost:2000/api/v1/login", e);
    const data = await res.data;
    toast.success(data?.msg);
    userStore.setToken(data.token);
    fetchUser(data?.token)
    resetForm();
    setTimeout(() => {
      router.push('/');
    }, 3000); 
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};
</script>

<style></style>
