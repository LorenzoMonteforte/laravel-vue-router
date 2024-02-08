import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";
import AppEvents from "./components/AppEvents.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/about",
            name: "about",
            component: AppAbout
        },
        {
            path: "/events",
            name: "events",
            component: AppEvents
        }
    ]
});

export { router };