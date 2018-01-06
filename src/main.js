import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入Store对象
import store from './store'
import svgImage from './components/svg/svg_image.vue'
//引入分割线的组件
import split from './components/split/split.vue'
//将线注册全局组件
Vue.component('split',split)
//mock数据加载
import './mock/mockServer'
//引入横向滑动
import {Swipe,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('svgImage', svgImage)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
