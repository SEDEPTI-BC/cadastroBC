// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import Buefy from 'buefy'
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})
import 'buefy/dist/buefy.css'
import VueMask from 'v-mask'
import MaterialKit from './plugins/material-kit'
import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload
)
Vue.component('vue-fontawesome', FontAwesomeIcon)

// ...
Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueMask)
Vue.use(MaterialKit)
Vue.use(Vuelidate)

const NavbarStore = {
  showNavbar: false,
}

Vue.mixin({
  data() {
    return {
      NavbarStore,
    }
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// let transporter = nodemailer.createTransport({
//   sendmail: true,
//   newline: "unix",
//   path: "/usr/sbin/sendmail"
// });
// transporter.sendMail(
//   {
//     from: "sender@example.com",
//     to: "recipient@example.com",
//     subject: "Message",
//     text: "I hope this message gets delivered!"
//   },
//   (err, info) => {
//     console.log(info.envelope);
//     console.log(info.messageId);
//   }
// );
