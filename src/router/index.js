import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import PatchsView from '@/views/PatchsView.vue'
import LinksView from '@/views/LinksView.vue'
import RequirementsView from '@/views/RequirementsView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/patches',
      name: 'patches',
      component: PatchsView
    },
    {
      path: '/requirements',
      name: 'requirements',
      component: RequirementsView
    },
    {
      path: '/links',
      name: 'links',
      component: LinksView
    },
    {
      path:'/admin',
      name:'admin',
      component:AdminView
    }
  ]
})

export default router
