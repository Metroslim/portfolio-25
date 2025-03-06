import { createRouter, createWebHistory } from 'vue-router'
import WorksView from '../views/WorksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'works',
      component: WorksView,
    },
  ],
})

export default router
