import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueAgile from 'vue-agile'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLinkedin)
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueAgile)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
