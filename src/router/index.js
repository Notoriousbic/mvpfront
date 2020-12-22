import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Login.vue"
import AdminPage from "../views/AdminPage.vue"
import ThankYou from "../views/ThankYou.vue"
import StatsPage from "../views/StatsPage"
import ViewPurchasesVue from "../views/ViewPurchasesVue"
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    },
    {
        path: "/admin",
        name: "AdminPage",
        component: AdminPage
    },
    {
        path: "/thankyou",
        name: "ThankYou",
        component: ThankYou
    },
    {
        path: "/statspage",
        name: "StatsPage",
        component: StatsPage
    },
    {
        path: "/viewpurchases",
        name: "ViewPurchasesVue",
        component: ViewPurchasesVue
    },


];

const router = new VueRouter({
    routes
});

export default router;