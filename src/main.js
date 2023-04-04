import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import MyHome from './components/my-home.vue'
import Details from './components/anime-card-detail.vue'



const routes = [
    {path: '/', component: MyHome, name: 'Home'},
    {path: '/detail', component: Details, name:'Details'}, 
    { path: '/:catchAll(.*)', redirect: '/'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
console.log(App);
app.use(router)
app.mount('#app')
