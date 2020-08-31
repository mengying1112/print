import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Home from '../views/Home'
import Welcome from '../views/Welcome'
import OverView from '../views/OverView'
import MyDocument from '../views/MyDocument'
import ScanFile from '../views/ScanFile'
import DealDetail from '../views/DealDetail'




Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home/:id',
      component: Home,
      children: [
        {
          path: '/',
          component: Welcome
        },
        {
          path: '/overview',
          component: OverView
        },
        {
          path: '/myDocument',
          component: MyDocument
        },
        {
          path: '/scanFile',
          component: ScanFile
        },
        {
          path: '/dealDetail',
          component: DealDetail
        }
      ]
    }
    
  ]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
