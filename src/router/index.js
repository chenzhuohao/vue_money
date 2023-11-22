// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login';

const routes = [{
        path: '/',
        name: 'Login',
        component: Login,
    },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;