import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import NotFoundView from '../views/NotFoundView'
import RegisterView from '../views/RegisterView'
import UserListView from '../views/UserListView'
import UserProfileView from '../views/UserProfileView'

const routes = [
    {
        path: '/',
        name: 'home', 
        component: HomeView
    },
    {
        path: '/userlist/',
        name: 'userlist',
        component: LoginView,
    },
    {
        path: '/userlist',
        name: 'userlist',
        component: UserListView,
    },
    {
        path: '/userprofile/',
        name: 'userprofile',
        component: UserProfileView,
    },
    {
        path: '/userprofile/:userId/',
        name: 'userprofile',
        component: UserProfileView
    },
    {
        path: '/login/',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/register/',
        name: 'register',
        component: RegisterView,
    },
    {
        path: '/404/',
        name: '404',
        component: NotFoundView,
    },
    {
        path: '/:catchAll(.*)',
        redirect: "/404/"
    }
]

const router = createRouter ({
    history: createWebHistory(), 
    routes
})

export default router