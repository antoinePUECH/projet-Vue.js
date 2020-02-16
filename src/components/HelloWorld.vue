<template>
  <div class="hello">
  <NavBar />
  <h1 class="display1">Films disponible</h1>
  <div class="images">
  <div class="card" style="width: 18rem;" v-for="film in info" :key="film.imbID">
    <img :src="film.Poster" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{film.Title}}</h5>
      <p class="card-text">{{film.Year}}</p>
      <a :href="`#/films/${film.imbID}`">Info sur le film</a>
    </div>
  </div>
  </div>
  <MonComposant />
  </div>
</template>

<script>
import NavBar from './../components/NavBar.vue'
const axios = require('axios').default;
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    text: String,
    message: String
  },
  components: {
    NavBar,
  },
  data() {
    return{
      FullName: {
        firstname: 'Antoine',
        lastname: 'Puech'
      },
      ListNames:[
        {firstname: 'vero', lastname: 'zlorit'},
        {firstname: 'mamxime', lastname: 'figue'},
        {firstname: 'Antoine', lastname: 'puech'},
      ],
      info: null,
      affiche: false,
      imbID: String
    }
    
  },
  mounted(){

    if(!this.films){
axios
        .get('http://www.omdbapi.com/?s=batman&apikey=904eed5c')
        .then(response => (this.info = response.data.Search))
    }
  },

   

    
    
  
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.images{
  display: flex;
}
.btn{
  font-size: 10px;
}
.card{
  width: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  padding: 20px;
  border: 2px solid #42b983;
  font-size: 30px;
}
.btn:hover {
  background-color: #42b983;
}
</style>
