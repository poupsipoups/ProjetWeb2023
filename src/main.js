import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import AnimeHome from './components/anime-home.vue'
import MangaHome from './components/manga-home.vue'
import UserProfile from './components/user-profile.vue'


const routes = [
    {path: '/anime', component: AnimeHome, name: 'AnimeHome', props: true}, 
    {path: '/manga', component: MangaHome, name: 'MangaHome', props: true},
    {path: '/favorites', component: UserProfile, name: 'UserProfile', props: true},
    { path: '/:catchAll(.*)', redirect: '/anime'},
]

const router = VueRouter.createRouter({
    history : VueRouter.createWebHistory(),
    routes
})



const app = createApp(App)
app.use(router)
app.mount('#app')
