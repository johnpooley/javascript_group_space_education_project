import Vue from 'vue'
import Home from './components/home.vue'
import Earth from './components/earth.vue'
import Jupiter from './components/jupiter.vue'
import Mars from './components/mars.vue'
import Mercury from './components/mercury.vue'
import Neptune from './components/neptune.vue'
import Saturn from './components/saturn.vue'
import Uranus from './components/uranus.vue'
import Venus from './components/venus.vue'
import Moon from './components/moon.vue'
import Iss from './components/iss.vue'

import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const routes =  [
    {path: '', component: Home, name:'home'},
    {path: '/earth', component: Earth, name:'earth'},
    {path: '/jupiter', component: Jupiter, name:'jupiter'},
    {path: '/mars', component: Mars, name:'mars'},
    {path: '/mercury', component: Mercury, name:'mercury'},
    {path: '/neptune', component: Neptune, name:'neptune'},
    {path: '/saturn', component: Saturn, name:'saturn'},
    {path: '/uranus', component: Uranus, name:'uranus'},
    {path: '/venus', component: Venus, name:'venus'},
    {path: '/moon/:moonname', component: Moon, name:'moon', props: true },
    {path: '/home', component: Home,redirect: ''},
    {path: '/iss', component: Iss, name:'iss'}
  ];

  const router = new VueRouter(
      {    mode: 'history', routes });



  export default router

// const app = new Vue({
//   router
// })  .$mount('#app');
