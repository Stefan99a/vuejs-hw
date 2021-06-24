import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/CartList.vue'
import ProductList from '../components/product/ProductList.vue'
const routes = [
  {
    path: '/',
    redirect: 'Inventory',
    
  },
  {
    path: '/inventory',
    name: 'Inventory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductList

  },
  {
    path: '/shoppingCart',
    name: 'ShopptingCart',
    component: CartList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
