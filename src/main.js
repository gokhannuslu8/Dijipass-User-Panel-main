import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";

router.beforeEach(async function (to, from, next) {
  window.scrollTo(0, 0);
  next();
});

createApp(App).use(router).mount("#app");
