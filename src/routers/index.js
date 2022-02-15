import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/pages/Test.vue")
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue")
  },
  {
    path: "/qrscanner",
    name: "QRScanner",
    component: () => import("@/pages/QRScanner.vue")
  },
  {
    path: "/qrgenerator",
    name: "QRGenerator",
    component: () => import("@/pages/QRGenerator.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
