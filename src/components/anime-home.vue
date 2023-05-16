<template>
    <Navbar></Navbar>

    <div class="titre">
        <SearchBar placeHolder="Find you anime..." @search="handleSearch"></SearchBar>
    </div>
  
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
import Navbar from './navBar.vue'
import SearchBar from './searchBar.vue'

export default{
    name : 'AnimeHome',
    components: 
    { AnimeCard,
      FilterButton,
      Navbar,
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
    }
  },
  created:function(){
    this.chargeAnimeDatas()
  },
  methods:{

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

/* CSS HEX */
/* --air-force-blue: #54889Eff;
--butterscotch: #EB9D4Bff;
--champagne-pink: #EEE1D9ff;
--melon: #E4A4A4ff;
--brown-sugar: 0; */


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

/* form{
  width: 50%;
  margin: auto;
}

input{
  padding: 4px 10px;
  border: 0px;
  font-size: 16px;
} */



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