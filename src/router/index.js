import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
  routes: [
      {path:'/home',component:Home},
      {path:'/',component:Home},
      {path:'/user',component: User},
      {path:'/detail/:id/:name/:age/:content',component: UserDetail},
  ]
})
