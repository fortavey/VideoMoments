import { createRouter, createWebHashHistory } from 'vue-router'
import React from '../views/React.vue'

const routes = [
  {
    path: '/',
    name: 'React',
    component: React
  },
  {
    path: '/react-native',
    name: 'ReactNative',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "react-native" */ '../views/ReactNative.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
