import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News.vue'
import Job from '../views/Job'
import Ask from '../views/Ask'
import User from '../views/User'
import AskDetail from '../views/AskDetail'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/ask',
            name: 'ask',
            component: Ask
        }, 
        {
            path: '/job',
            name: 'job',
            component: Job
        },
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/item/:id',
            component: AskDetail
        }
    ]
})