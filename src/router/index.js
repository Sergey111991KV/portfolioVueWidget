import {createRouter, createWebHistory} from "vue-router";
import WidgetHome from "../vuews/Home";

const routes = [
    {
        path: "/",
        name: "home",
        component: WidgetHome,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
