// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login';
import storeInfo from '../views/storeInfo.vue';
import Loading from '../views/Loading'
import ShowCredit from '../views/ShowCredit.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/storeInfo',
        name: 'storeInfo',
        component: storeInfo,
    },
    {
        path: '/ShowCredit',
        name: 'ShowCredit',
        component: ShowCredit,
    },
    {
        path: '/loading',
        name: 'Loading',
        component: Loading
    }
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
