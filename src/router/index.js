import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../components/History.vue"),
    },
  ],
});

export default router;
