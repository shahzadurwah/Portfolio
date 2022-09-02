import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../components/Resume.vue'
import Home from '../components/Home.vue'
import Aboutp from '../components/Aboutp.vue'
import Project from '../components/Project.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'Home',
      path:'/',
      component:Home
    },
    {
      name:'Resume',
      path:'/Resume',
      component:Resume
    },
    {
      name:'Aboutp',
      path:'/About',
      component:Aboutp
    },
    {
      name:'Project',
      path:'/project',
      component:Project
    }
   
  ]
})

export default router
