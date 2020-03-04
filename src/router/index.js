import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Film from '../components/Film'
import Details from '../pages/Details'
import Favoris from '../pages/Favoris'

Vue.use(VueRouter)

const routes = [
    { path: '/Film', component: Film },
    { path: '/', component: Home },
    { path: '/Details/:id', component: Details },
    { path: '/Favoris', component: Favoris}
]

export default new VueRouter({
    routes 
})