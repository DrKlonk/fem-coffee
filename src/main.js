import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { VueWindowSizePlugin } from "vue-window-size/option-api"

createApp(App)
  .use(router)
  .use(VueWindowSizePlugin, {
    delay: 0,
  })
  .mount("#app")
