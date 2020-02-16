<template>
    <div>
    
        <h1>Détails</h1>
        <router-link to="/film">HomePage</router-link>
        <NavBar />
    </div>
    
</template>

<script>
import NavBar from './../components/NavBar.vue'

export default {
    name: 'DetailsPage',
    data(){
        return {

        };
    },
    component: {
        NavBar,
    }
}
</script>