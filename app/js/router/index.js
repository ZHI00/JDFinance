import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Whiterbar from '../whitebar/index.vue'
import Crowdfunding from '../crowdfunding/index.vue'

Vue.use(Router)

export default new Router({
    // app.vue下的主路由
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/whitebar",
            name: "whitebar",
            component: Whiterbar,
        },
        {
            path: "/crowdfunding",
            name: "crowdfunding",
            component: Crowdfunding,
        }
    ],
})
