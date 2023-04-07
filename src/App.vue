<template>
  <div>
     <MyHome/>
  </div>
   
<!-- <h3>{{ animeList[0] }}</h3> -->
  <!-- <button v-on:click="onClickData">Voir les ressources</button> -->

</template>

<script>
import MyHome from './components/my-home.vue'

//import axios from 'axios'

export default {
  name: 'App',
  components: {
    MyHome,
  },
}
</script>

<style>

html{
  background-color: blanchedalmond;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
  padding: 0;
}

nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: coral;
  color: white;
  padding: 0 30px;
  margin: 8px;
  border-radius: 20px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

nav .gauche{
  display: flex;
  flex-wrap: wrap;
 
}

nav .gauche img{
  padding-top: 5px;
  margin-right: 5px;
}

nav .onglets{
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}

nav .onglets p{
  margin-left: 20px;
  color: pink;
}

nav .onglets p:hover{
  color: white;
}
</style>
