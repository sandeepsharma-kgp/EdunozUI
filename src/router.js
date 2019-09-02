import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import Home from "@/views/Home";
import ProgramDetailPage from "@/views/ProgramDetailPage";
import NotLoggedInPage from "@/views/NotLoggedInPage";
import Webinar from "@/views/Webinar";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/ProgramDetailPage/course",
      name: "ProgramDetailPage",
      component: ProgramDetailPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/home/login",
      name: "ProgramDetailPage",
      component: NotLoggedInPage
    },
    {
      path: "/Webinar",
      name: "Webinar",
      component: Webinar
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next("/home/login")
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})
export default router;
