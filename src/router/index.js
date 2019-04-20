import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Con from '../components/content.vue'
import Log from '../components/login.vue'
import Edit from '../views/editor.vue'
import Activity from '@/views/Activity.vue'
import Dynamic from '@/views/Dynamic.vue'
import Conversation from '@/views/Conversation.vue'
import FindPassword from '@/views/findpassword.vue'
import Sign from '@/views/sign.vue'
import CaoGX from '@/views/caogao.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
        children:[
          {
            path: 'home',
            name: 'Home',
            component: Con,
          },
          {
            path: 'dynamic',
            name: 'Dynamic',
            component: Dynamic
          },
          {
            path: 'activity',
            name: 'activity',
            component: Activity
          },
          {
            path: 'conversation',
            name: 'Conversation',
            component: Conversation
          }
        ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'home',
          name: 'Home',
          component: Con,
        },
        {
          path: 'dynamic',
          name: 'Dynamic',
          component: Dynamic
        },
        {
          path: 'activity',
          name: 'activity',
          component: Activity
        },
        {
          path: 'conversation',
          name: 'Conversation',
          component: Conversation
        }
      ]
    },
    {
      path: '/con',
      name: 'Con',
      component: Con
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/editor',
      name: 'edit',
      component: Edit
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/find',
      name: 'findpassword',
      component: FindPassword
    },
    {
      path: '/caogao',
      name: 'caogaoxiang',
      component: CaoGX
    }
  ]
})