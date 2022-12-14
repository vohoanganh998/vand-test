import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory('/vand-test/');
console.log(routerHistory.base)
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
    {
      path: "/",
      name: "Countries",
      component: () => import("./modules/country/views/Countries.vue"),
    },
  ],
});
export default router;
