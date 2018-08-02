import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Main from '@/components/main'
import order from '@/components/orderManage'
import historyOrders from '@/components/historyOrders'
import newOrders from '@/components/newOrders'
import productManage from '@/components/productManage'
import productList from '@/components/productList'
import addNewProduct from '@/components/addNewProduct'
import downProduct from '@/components/down-product'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: 'Login'
    },
    {
      path: '/main',
      component: Main,
      name: 'main',
      meta: {
        loginAuth: true
      },
      children: [
        {
          path: 'orderManage',
          component: order,
          name: '',
          children: [
            {
              path: '/main/historyOrders',
              component: historyOrders,
              name: '历史订单'
            },
            {
              path: '/main/newOrders',
              component: newOrders,
              name: '新订单'
            }
          ]
        },
        {
          path: 'productManage',
          component: productManage,
          name: '',
          children: [
            {
              path: '/main/productList',
              component: productList,
              name: '商品列表'
            },
            {
              path: '/main/addNewProduct',
              component: addNewProduct,
              name: '新增货品'
            },
            {
              path: '/main/down-product',
              component: downProduct,
              name: '已下架商品'
            }
          ]
        }
      ]
    }

  ]
})
