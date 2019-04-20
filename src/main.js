// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'
import PullTo from 'vue-pull-to'
import axios from 'axios'
import store from './store'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
axios.defaults.withCredentials = false
axios.defaults.baseURL = 'http://192.168.80.152:8088'
axios.defaults.headers.common['Authorization'] = store.state.token
Vue.prototype.$axios = axios
Vue.use(ElementUI,PullTo,axios,VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  ElementUI,
  PullTo,
  axios,
  store,
  VueQuillEditor,
  components: { App },
  template: '<App/>'
})

axios.interceptors.request.use(function (config) { //添加请求拦截器
  if(store.state.token) { //在没有后台的情况下，token存在但是为undefined
    config.headers.common['Authorization'] = store.state.token.token
    console.log(store.state.token.token)
    console.log('no')
  }
  else {
    console.log('no')
  }
  console.log('开始请求')
  console.log(`请求地址: ${config.url}`)
  // let token = 
  return config
  }, function (error) {
      console.log('请求失败')
      return Promise.reject(error)
  })
  axios.interceptors.response.use(function (config) { //添加request拦截器
      console.log('接收响应')
      return config
  }, function (error) {
      console.log('响应出错')
      return Promise.reject(error)
  })