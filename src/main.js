import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
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


Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({render: h => h(App), router}).$mount('#app')

export default router
