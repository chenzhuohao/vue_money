// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login';
import Loading from '../views/Loading'
const routes = [{
        path: '/',
        name: 'Login',
        component: Login,
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