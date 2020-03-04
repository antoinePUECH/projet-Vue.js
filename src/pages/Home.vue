<template>
    <div>
        <h1>Bienvenue</h1>  
        <h2>Site Francais de référencement de film</h2>
        <p>
            Vous trouverez ici tout les films de l'api OMDB qui regroupe tout les films référencé au cinéma <br>
            Pour rechercher un film aller dans la section "Films"
        </p>
    </div>
</template>

<script>


export default {
    name: 'Home',
    components: {

    },

    data(){
        return{

        }
    },
}

</script>

<style scoped>

    div{
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    h1{
        font-size: 100px;
        margin: 50px 0 50px 0;
    }

    h2{
        font-size: 40px;
        margin: 50px 0 50px 0;
    }

    p{
        font-size: 20px;
        margin: 50px 0 50px 0;
    }

</style>