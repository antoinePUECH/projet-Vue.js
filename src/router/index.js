import Vue from 'vue'
import VueRouter from 'vue-router'


import HomePage from './../views/HomePage.vue'
import DetailsPage from './../views/DetailsPage.vue'
import films from './../components/films.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/film', component: HomePage},
        { path: '/film/:id', component: films},
        { path: '/Details', component: DetailsPage},
    ]
})
