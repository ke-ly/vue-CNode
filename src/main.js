// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引用 vue 
import Vue from 'vue';
//引用路由
import VueRouter from 'vue-router';
//使用路由

Vue.use(VueRouter)
//入口文件
import App from './App';
// 引用路由配置文件
import routes from './config/routes';
// 使用配置文件规则
const router = new VueRouter({
  routes
})

import filters from './config/filters';

Object.keys(filters).forEach(f=>Vue.filter(f,filters[f]))


//import api from './config/api';
//Vue.prototype.$api = api;


//Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render:(h) => h(App)
})


