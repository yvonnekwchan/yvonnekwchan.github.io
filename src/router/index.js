import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/university-student-admission-system',
      name: 'universityStudentAdmissionSystem',
      component: () => import('../views/AdmissionSystemView.vue')
    },
    {
      path: '/real-estate-rental-system',
      name: 'realEstateRentalSystem',
      component: () => import('../views/realEstateRentalSystemView.vue')
    },
    {
      path: '/to-do-list',
      name: 'todoListApplication',
      component: () => import('../views/TodoListView.vue')
    }
  ]
})

export default router
