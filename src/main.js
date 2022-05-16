import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCartShopping as fasCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faIdCardClip as fasIdCardClip } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign as fasDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight as fasChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram as fasInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter as fasTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF as fasFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP as fasPinterestP } from '@fortawesome/free-brands-svg-icons'



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fasCartShopping, fasIdCardClip, fasDollarSign, fasChevronLeft, fasChevronRight, fasInstagram, fasTwitter, fasFacebookF, fasPinterestP)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)




const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
