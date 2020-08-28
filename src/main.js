import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Mint from 'mint-ui';
import router from '../src/assets/js/router';
import '../node_modules/mint-ui/lib/style.css'
import { Toast } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.use(VueRouter);
Vue.use(Mint);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Mint,Toast);
import '../src/assets/css/cssreset.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
