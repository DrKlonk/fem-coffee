import { createRouter, createWebHistory } from "vue-router"

import Home from "@/pages/Home.vue"
import AboutUs from "@/pages/AboutUs.vue"
import CreatePlan from "@/pages/CreatePlan.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: AboutUs },
  { path: "/create-plan", name: "CreatePlan", component: CreatePlan },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
