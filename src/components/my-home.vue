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
        <button @click="sortByScore">Sort button</button>

        <div class="searchBar">
          <form action="" @submit.prevent = "handleSearch">
            <input type="text" v-model="search" class="search" placeholder="Tape ta recherche :)">
            <input type="submit" name="submit" class="submit" alt="soumettre">
          </form>
        </div>

    </div>
    <!-- <dropdown class="genres"
              :options="genres"
              :selected="genre"
              v-on:updateOption="runSelect"
              :placeholder="Genre"
              :close-on-outside-click="boolean">
    </dropdown> -->
    <FilterButton :options="genreOptions" defaultOption="Genre" @selection="filterGenre"></FilterButton>
    <FilterButton :options="yearOptions" defaultOption="Year" @selection="filterYear"></FilterButton>
    <FilterButton :options="sortingOption" defaultOption="SortBy" @selection="sortAnimes"></FilterButton>

    <div class="cards">
      <anime-card 
        v-for="anime in filteredList"
        :key="anime?.mal_id"
        :anime="anime"/>
    </div>
</template>

<script>
import AnimeCard from './anime-card.vue'
import {getTopAnime} from '@/assets/services/api/AnimRepo'
import axios from 'axios'
import FilterButton from './filterButton.vue'
//import dropdown from 'vue-dropdowns'

export default{
    name : 'MyHome',
    components: 
    { AnimeCard,
      //'dropdown' : dropdown,
      FilterButton,
    },
    data(){
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = 0; i < 15; i++) {
        years.push(currentYear - i);
      }
      const yearsObject = years.map(year => 
      {return {name: year, value: year}})
      yearsObject.unshift({name: "Year", value: "Year"});

    return{
      animeList : [],
      filteredList :[],
      search : "",
      genreOptions : [{name:"Genre", value:"Genre"}, {name: "Action", value: "Action"}, {name: "Aventure", value:"Adventure"}, {name: "Comédie", value: "Comedy"}, {name: "Drame", value:"Drama"}, {name: "Romance", value:"Romance"}],
      yearOptions : yearsObject,
      sortingOption : [{name:"Popularity", value:"popularity"}, {name:"Name", value:"name"}, {name:"Airing date", value:"airing"}, {name:"Score", value:"score"}],
    }
  },
  created:function(){
    this.chargeAnimeDatas()
  },
  methods:{

    /* FILTER METHODS */

    filterGenre(genre){

      console.log(genre.value)

      if(genre.value == "Genre"){
        this.filteredList = this.animeList;
      }
      else{
      this.filteredList = this.animeList.filter(anime => {
        let genreTab = [];
        for (let i in anime.genres) {
          genreTab.push(anime.genres[i].name);
        }
        
        if(genreTab.includes(genre.value))
          return true;
        else
          return false;
      });
    }
    },

    filterYear(year){

      if(year.value == "Year"){
        this.filteredList = this.animeList;
      }
      else{
      this.filteredList = this.animeList.filter(anime => anime.year===year.value);
      }

    },

    /* SORTING METHODS */

    //MAIN SORTING
    sortAnimes(option){
      console.log("je passe")
      if(option.value == "popularity"){
        this.sortByPopularity();
      }
      if(option.value == "name"){
        this.sortByName();
      }
      if(option.value == "airing"){
        this.sortByAiringDate();
      }
      if(option.value == "score"){
        this.sortByScore();
      }
    },
    
    //SORTING BY POPULARITY

    sortByPopularity(){
      this.animeList.sort((a,b)=> b.popularity - a.popularity);
      console.log(this.animeList)
    },

    //SORTING BY NAME
    sortByName(){
      this.animeList.sort((a,b)=> a.title.localeCompare(b.title) );
      console.log(this.animeList)
    },

    //SORTING BY AIRING DATE
    sortByAiringDate(){
      this.animeList.sort((a,b)=> {
        const dateA = new Date(a.aired.from).getTime();
        const dateB = new Date(b.aired.from).getTime();

        if(dateA < dateB){
          return 1;
        }
        else{
          return -1;
        }
      });
      console.log(this.animeList)
    },

    //SORTING BY SCORE
    sortByScore(){
      this.animeList.sort((a,b)=> b.score - a.score);
      console.log(this.animeList);
    },

    /* CHARGING DATA METHODS */

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

      this.filteredList = this.animeList;
      
    },

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

  .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}

.dropdown-menu li {
  display: block;
  padding: 5px 10px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}

.dropdown-menu li:hover {
  background-color: #f5f5f5;
}

.dropdown-menu li:first-child {
  margin-top: 0;
}

.dropdown-menu li:last-child {
  margin-bottom: 0;
}

.dropdown-menu li a:hover {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}

.dropdown-menu .active a,
.dropdown-menu .active a:hover {
  color: #fff;
  background-color: #337ab7;
}




</style>