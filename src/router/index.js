import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Contact from '../views/pages/Contact.vue'
import Login from '../views/pages/Login.vue'
import Logout from '../views/pages/Logout.vue'
import Register from '../views/pages/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{

  const withoutLogin = ['Login', 'Register']
  let isLogedIn = store.getters['login/isLogedIn']
  
  if(!withoutLogin.includes(to.name) && !isLogedIn){
    next('/login')
  }else{
    next()
  }

  next()
})

export default router
