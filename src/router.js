import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: ()=>import('./components/layout/layout.vue'),
      children:[
          {
            path:'list1',
            name:'column1List1',
            component: ()=>import('./views/column1/list-1/list.vue'),
          },
          {
            path:'list2',
            name:'column1List2',
            component: ()=>import('./views/column1/list-2/list.vue'),
          },
          {
            path:'list3',
            name:'column1List3',
            component: ()=>import('./views/column1/list-3/list.vue'),
          },
          {
            path:'list4',
            name:'column1List4',
            component: ()=>import('./views/column1/list-4/list.vue'),
          },
          /* 第二栏目 */
          {
            path:'list5',
            name:'column2List5',
            component: ()=>import('./views/column2/list-1/list.vue'),
          },
          {
            path:'list6',
            name:'column2List6',
            component: ()=>import('./views/column2/list-2/list.vue'),
          },
          {
            path:'list7',
            name:'column2List7',
            component: ()=>import('./views/column2/list-3/list.vue'),
          },

      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  next();
})

export default router;