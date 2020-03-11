import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"demo",
    component:()=>import('views/demo.vue')
  },
  {
    path:"/demo2",
    name:"demo2",
    component:()=>import('views/demo2.vue')
  },
  {
    path:"/heightfunction",
    name:"heightfunction",
    component:()=>import('views/heightfunction.vue')
  },
  {
    path:"/bus",
    name:"bus",
    component:()=>import('views/bus.vue')
  },
  {
    path:"/vuexfx",
    name:"vuexfx",
    component:()=>import('views/vuexfx.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
