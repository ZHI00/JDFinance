import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import '../css/reset.scss'
// import './config/rem.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
