import Vue from "vue";
import Router from "vue-router";
import home from "./pages/home.vue";
import start from "./pages/start.vue";
import layout from "./pages/layout.vue";
import typography from "./pages/typography.vue";
import colour from "./pages/colour.vue";
import inputs from "./pages/inputs.vue";
import components from "./pages/components.vue";

Vue.use(Router);

export default new Router({
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    mode: "history",
    
    base: process.env.BASE_URL,
    
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/start",
            name: "start",
            component: start
        },
        {
            path: "/layout",
            name: "layout",
            component: layout
        },
        {
            path: "/typography",
            name: "typography",
            component: typography
        },
        {
            path: "/colour",
            name: "colour",
            component: colour
        },
        {
            path: "/inputs",
            name: "inputs",
            component: inputs
        },
        {
            path: "/components",
            name: "components",
            component: components
        }
        // {
        //     path: '/section-getting-started',
        //     name: 'about',
        // component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
        // }
    ]
});
