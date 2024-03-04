import { createRouter, createWebHistory} from 'vue-router';

import Home from '@/home/Home.vue';
import EditAccount from '@/home/EditAccount.vue';
import Login from '@/login/Login.vue';
import { authGuard } from '@/_helpers';

const routes = [
    { path: '/', component: Home, beforeEnter: authGuard },
    { path: '/edit/:id', component: EditAccount, beforeEnter: authGuard },
    { path: '/login', component: Login },

    // otherwise redirect to home
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});