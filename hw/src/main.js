import{createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


createApp({
  router,
  store,
  render: h => h(App)
}).$mount("#app");