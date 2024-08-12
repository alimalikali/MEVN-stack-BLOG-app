import "./assets/main.css"; // Import the Tailwind CSS file
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { OhVueIcon } from "oh-vue-icons";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import enUS from "@kangc/v-md-editor/lib/lang/en-US";
import Prism from "prismjs";
import "nprogress/nprogress.css";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VueMarkdownEditor.lang.use("en-US", enUS);

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(VueMarkdownEditor);

app.mount("#app");
