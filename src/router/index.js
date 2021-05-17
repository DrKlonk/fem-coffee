import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import AboutUs from "@/pages/AboutUs.vue";
import CreatePlan from "@/pages/CreatePlan.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", component: AboutUs },
  { path: "/createPlan", component: CreatePlan },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
