import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from './store'

//CSS
import '@/assets/css/style.scss'

Vue.config.productionTip = false;

//Global vars
Vue.prototype.$axios = axios;
Vue.prototype.$api = `http://localhost:5000`;

//Google map
import * as VueGoogleMaps from 'vue2-google-maps';
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_KEY',
    libraries: 'places',
  },
});

//ion icon setup
Vue.config.ignoredElements = [/^ion-/]

//Sweet alert
import VueSwal from 'vue-swal'
Vue.use(VueSwal)


//Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
 // import style
import 'swiper/swiper-bundle.css'
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
