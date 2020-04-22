import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Main,
    redirect: "/win-global",
    children: [
      {
        name: "win-global",
        path: "win-global",
        component: () => import("@/views/WithWindow.vue")
      },
      {
        name: "lazy-load",
        path: "lazy-load",
        component: () => import("@/views/WithOnce.vue")
      },
      {
        name: "root-margin",
        path: "root-margin",
        component: () => import("@/views/WithRootMargin.vue")
      },
      {
        name: "root-frame",
        path: "root-frame",
        component: () => import("@/views/WithFrame.vue")
      },
      {
        name: "root-threshold",
        path: "root-threshold",
        component: () => import("@/views/WithThresholds.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
