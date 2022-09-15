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
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
