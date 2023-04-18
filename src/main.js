import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import AnimeHome from './components/anime-home.vue'
import MangaHome from './components/manga-home.vue'


const routes = [
    {path: '/anime', component: AnimeHome, name: 'AnimeHome', props: true}, 
    {path: '/manga', component: MangaHome, name: 'MangaHome', props: true},
    { path: '/:catchAll(.*)', redirect: '/anime'},
]

const router = VueRouter.createRouter({
    history : VueRouter.createWebHistory(),
    routes
})

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })


const app = createApp(App)
app.use(router)
app.mount('#app')
