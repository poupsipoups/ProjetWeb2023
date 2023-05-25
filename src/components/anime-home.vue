<template>
  <div class="lofi"></div>
    <div class="titre">
        <SearchBar placeHolder="Find you anime..." @search="handleSearch"></SearchBar>
    </div>
    <div class="filters">
      <FilterButton :options="genreOptions" defaultOption="Genre" @selection="filterGenre"></FilterButton>
      <FilterButton :options="yearOptions" defaultOption="Year" @selection="filterYear"></FilterButton>
      <FilterButton :options="sortingOption" defaultOption="SortBy" @selection="sortAnimes"></FilterButton>
    </div>
  

    <div class="cards">
      <anime-card 
        v-for="anime in filteredList"
        :key="anime?.mal_id"
        :anime="anime"
        :favorites="favoriteAnimes"
        :updateFavorites="updateFavorites"/>
    </div>
</template>

<script>
import AnimeCard from './anime-card.vue'
import {getTopAnime} from '@/assets/services/api/AnimRepo'
import axios from 'axios'
import FilterButton from './filterButton.vue'
import SearchBar from './searchBar.vue'

export default{
    name : 'AnimeHome',
    components: 
    { AnimeCard,
      FilterButton,
      SearchBar,
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
      //search : "",
      genreOptions : [{name:"Genre", value:"Genre"}, {name: "Action", value: "Action"}, {name: "Aventure", value:"Adventure"}, {name: "Comédie", value: "Comedy"}, {name: "Drame", value:"Drama"}, {name: "Romance", value:"Romance"}],
      yearOptions : yearsObject,
      sortingOption : [{name:"Popularity", value:"popularity"}, {name:"Name", value:"name"}, {name:"Airing date", value:"airing"}, {name:"Score", value:"score"}],
      favoriteAnimes : [],
    }
  },
  created:function(){
    this.chargeAnimeDatas()
  },
  methods:{


    /* FAVORITES */

    updateFavorites(newFavorite){
      var index = this.favoriteAnimes.findIndex(animeF => (animeF.mal_id === newFavorite.mal_id));
      

      if(index === -1){
        this.favoriteAnimes.push(newFavorite);
      }
      else{
        this.favoriteAnimes.splice(index, 1);
      }

      //console.log(this.favoriteAnimes)

      //stock the tab in local storage
      localStorage.setItem("favoris", JSON.stringify(this.favoriteAnimes));

      var test = localStorage.getItem("favoris");

      var objTest = JSON.parse(test);

      console.log(objTest)

       
    },

    /* FILTER METHODS */

   

    filterGenre(genre){

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
    },

    //SORTING BY NAME
    sortByName(){
      this.animeList.sort((a,b)=> a.title.localeCompare(b.title) );
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
    },

    //SORTING BY SCORE
    sortByScore(){
      this.animeList.sort((a,b)=> b.score - a.score);
    },


    /* CHARGING DATA METHODS */

    async chargeAnimeDatas (){
      this.animeList = await getTopAnime();
      this.filteredList = this.animeList;
    },

    async handleSearch (search){
      if(search !== ""){
        this.animeList = (await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`)).data.data;
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
    margin:auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

}

.cards::after{
  content: "";
  flex-basis: 150px;
}


.filters {
  margin: 1em auto;
  max-width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}



</style>