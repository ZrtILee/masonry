import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: "home",
    component: () => import('../views/index.vue')
},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router