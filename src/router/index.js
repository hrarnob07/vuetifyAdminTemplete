import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Login from '../pages/core/Login.vue';




Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'Dashboard' }
        ]
      }
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    
  ]
});
