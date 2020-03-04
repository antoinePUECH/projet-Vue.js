<template>
    <div class="box-container">
        <h1>Recherchez votre film</h1>
        <form id="form" class="form-inline my-2 my-lg-0">
            <input v-model="search" name="search"  class="form-control mr-sm-2" type="search" placeholder="Votre recherche" aria-label="Search" >
            <button v-on:click = "Search()" class="btn btn-outline-success my-2 my-sm-0">Rechercher</button>
        </form>
        <p class="noMovies" v-if="!films">Pas de film trouvé !</p>
        <div v-else class="card" style="width: 18rem;" v-for="film in films" v-bind:key="film.imdbID">
            <div v-if="film.Poster == 'N/A'">
                <p class="image">Pas d'image trouvé</p>
            </div>
            <div v-else>
                <img :src="film.Poster" class="card-img-top" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{film.Title}}</h5>
                <a :href="`#/Details/${film.imdbID}`" class="btn btn-primary bouton">Plus d'information</a>
            </div>
        </div>
    </div>
</template>
<script>

const axios = require('axios').default

export default {
    name: 'Film',
    data(){
        return{
            films: [],
            search: '',
            errored: false,
        }
    },

    methods: {
        Search(){
            event.preventDefault();
            axios.get('http://www.omdbapi.com/?s=' + this.search + '&apikey=904eed5c')
            .then(
                response => (this.films = response.data.Search))
        }
    }
}
</script>

<style scoped>
    .box-container{
        height: auto;
        width: 100vw;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 80px;
    }

    .card{
        width: 20vw !important;
        margin: 50px;
        box-shadow: 0px 0px 21px -4px rgba(0,0,0,0.75);
    }

    #form{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 70px;
        margin: 50px 0 50px 0;
    }

    .image{
        height: 400px;
        padding-top: 200px;
    }

    .noMovies{
        font-size: 40px;
        margin-top: 50px;
    }
</style>