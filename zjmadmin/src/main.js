// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueResource from 'vue-resource'
import '../src/assets/ress.less'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView);
Vue.use(VueResource);
router.push('login');

// router.beforeEach((to,from,next) =>{
//   if(to.meta.loginAuth){
//     if(sessionStorage.getItem('token')){
//       next()
//     } else {
//       router.push('login')
//     }
//   } else {
//     next()
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
