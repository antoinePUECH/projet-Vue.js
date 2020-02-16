<template>
<div>
    <NavBar />
      <p>{{film.imbID}}</p>
    <h1>ERGZERRTHZRTHHRSTHRTBHRTHRTZ</h1>
</div>
</template>

<script>
import NavBar from "./NavBar.vue"
const axios = require('axios').default;
export default {
    name: 'films',
    props: {
        message: String,
        imbID: String
    },
    component: {
        NavBar,
    },
    data() {
        return {
            info: [],
            id: this.$route.params.id
        };
    },
     mounted(){

    if(!this.films){
axios
        .get('http://www.omdbapi.com/?s='+ this.id +'n&apikey=904eed5c')
        .then(response => (this.info = response.data.Search))
    }
  }
}
</script>