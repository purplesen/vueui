import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Category_list from './views/category_list.vue'
import Product from './views/Product.vue'
import Shop_list from './views/shop_list.vue'
import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'
import Checkout from './views/checkout/Home.vue'
import Address from './views/checkout/Address.vue'
import New_address from './views/checkout/newAddress.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'on',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/category_list/:id',
      name: 'category_list',
      component: Category_list
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/shop_list',
      name: 'shop_list',
      component: Shop_list
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/checkout/address',
      name: 'address',
      component: Address
    },
    {
      path: '/checkout/new_address',
      name: 'new_address',
      component: New_address
    },
  ]
})
