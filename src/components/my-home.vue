<template>
    <nav>
    <div class="gauche">
      <img alt="Vue logo" src="https://cdn-icons-png.flaticon.com/512/5722/5722057.png" height="40">
      <p>Le repère de <strong>Poups</strong></p>
   </div>
   <div class="onglets">
        <router-link to="/">Home</router-link>
        <p>Liste d'animés</p>
        <p>Liste de mangas</p>
        <p>Recherche</p>
    </div>
    <div class="droite">
      <p>Mon profil</p>
    </div>
  </nav>

    <div class="titre">
        <h1>{{ title }}</h1>
        <p>Recherche un animé :</p>

        <div class="searchBar">
          <form action="" @submit.prevent = "handleSearch">
            <input type="text" v-model="search" class="search" placeholder="Tape ta recherche :)">
            <input type="submit" name="submit" class="submit" alt="soumettre">
          </form>
        </div>

    </div>
    <dropdown class="genres"
              :options="genres"
              :selected="genre"
              v-on:updateOption="runSelect"
              :placeholder="Genre"
              :close-on-outside-click="boolean">
    </dropdown>


    <div class="cards">
      <anime-card 
        v-for="anime in filteredList"
        :key="anime?.mal_id"
        :anime="anime" />
    </div>
</template>

<script>
import AnimeCard from './anime-card.vue'
import {getTopAnime} from '@/assets/services/api/AnimRepo'
import axios from 'axios'
import dropdown from 'vue-dropdowns'

export default{
    name : 'MyHome',
    components: 
    { AnimeCard,
      'dropdown' : dropdown,
    },
    data(){
    return{
      animeList : [],
      filteredList :[],
      search : "",
      genres : [{name:"All", value:"All"}, {name: "Action", value: "Action"}, {name: "Aventure", value:"Adventure"}, {name: "Comédie", value: "Comedy"}, {name: "Drame", value:"Drama"}, {name: "Romance", value:"Romance"}],
      genre : {name: 'Genre' },
    }
  },
  created:function(){
    this.chargeAnimeDatas()
  },
  methods:{

    filterGenre(){

      if(this.genre.value == "All"){
        this.filteredList = this.animeList;
      }
      else{
      this.filteredList = this.animeList.filter(anime => {
        let genreTab = [];
        for (let i in anime.genres) {
          genreTab.push(anime.genres[i].name);
        }
        
        if(genreTab.includes(this.genre.value))
          return true;
        else
          return false;
      });
    }
    },

    runSelect(payload){
      this.genre = payload;
      this.filterGenre();
      console.log(this.genre.name);
    },

    async chargeAnimeDatas (){
      this.animeList = await getTopAnime();
      this.filteredList = this.animeList;
    },

    async handleSearch (){
      if(this.search !== ""){
        this.animeList = (await axios.get(`https://api.jikan.moe/v4/anime?q=${this.search}`)).data.data;
      }
      else{
        this.animeList = await getTopAnime();
      }
      
    },

    // async chargeSearchAnimes(){
    //   this.animeList = await getSearchAnime();
    // }

  },
}

</script>

<style>
.cards{
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
form{
  width: 50%;
  margin: auto;
}
input{
  padding: 4px 10px;
  border: 0px;
  font-size: 16px;
}

.search{
  width: 75%;
}

.searchBar input[type="submit"]{
  width: 50px;
  height: 50px;
  background-image: url(https://cdn-icons-png.flaticon.com/512/6671/6671414.png);
  background-repeat: no-repeat;
  background-size: contain;
  color:transparent;
  background-color: transparent;
  cursor: pointer;
  
}

.genres {
  border-radius: 5px;
}

  ::v-deep .genres {
    color: tomato;
    font-size: 25px;
    font-weight: 800;
  }

  ::v-deep .dropdown-toggle-placeholder {
    color: #c4c4c4;
  }




</style>