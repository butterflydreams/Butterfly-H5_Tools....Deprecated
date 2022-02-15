import { createApp } from "vue";
import App from "@/App.vue";
import Router from "@routers/index.js";
import Library from "@lib/index.js";
import UI from "@ui/index.js";

import "@configs/font.css";
import "@configs/rem.js";
import "@configs/reset.css";
import "@configs/border.css";

const app = createApp(App);
app.use(Router);
app.use(Library);
app.use(UI);
app.mount("#app");
