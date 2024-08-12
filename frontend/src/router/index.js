import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import nProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/registor',
      name: 'Registor',
      component: () => import('../views/RegistotView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/blog/:id',
      name: 'BlogById',
      component: () => import('../views/SingleBlog.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashBoardView.vue')
    },
    
  ]
})
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  nProgress.start()
  

  
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  nProgress.done()
})

export default router
