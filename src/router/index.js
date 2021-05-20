import { createRouter, createWebHistory } from "vue-router"

import Home from "@/pages/home/Home.vue"
import AboutUs from "@/pages/about/AboutUs.vue"
import CreatePlan from "@/pages/create/CreatePlan.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: AboutUs },
  { path: "/create-plan", name: "CreatePlan", component: CreatePlan },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
