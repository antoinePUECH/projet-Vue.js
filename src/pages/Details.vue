<template>
    <div>
        <div class="box">
            <div class="left">
                <img :src="details.Poster" alt="...">
            </div>
            <div class="right">
                <h2>{{details.Title}}</h2>
                <p>{{details.Plot}}</p>
                <p class="info">Auteur: {{details.Writer}}</p>
                <p class="info">date de sortie : {{details.Released}}</p>
                <div id="heart" class="heart"></div>
                <a href="#" class="btn btn-primary" v-on:click="pushFavorite()">Like</a>
            </div>
        </div>
        <p>{{favorite}}</p>
    </div>
</template>

<script>

const axios = require('axios').default

export default {
    name: 'Details',

    data(){
        return{
            details: [],
            id: this.$route.params.id
        }
    },

    mounted(){
        axios
            .get('http://www.omdbapi.com/?i=' + this.id + '&plot=full&apikey=904eed5c')
            .then(response => (this.details = response.data))
    },

    computed:{
        favorite(){
            return this.$store.state.favorite
        }
    }
}



</script>

<style scoped>
    .box{
        margin: 0;
        width: 100vw !important;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
        margin-top: 100px;
    }

    .left{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center; 
}

    .right{
        width: 40%;
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: left;
        text-align: left;
    }

    img{
        width: 30vw !important;
        height: auto;
    }

    h2{
        font-size: 50px;
        margin-bottom: 30px;
    }

    .btn{
        width: 100px;
        transition-duration: 300ms;
    }

    .btn:hover{
        transition-duration: 300ms;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.473);
    }
</style>