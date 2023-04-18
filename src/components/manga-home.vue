<template>
    <Navbar></Navbar>

    <div class="titre">
        <SearchBar placeHolder="Find your manga..." @search="handleSearch"></SearchBar>
    </div>
  
    <FilterButton :options="genreOptions" defaultOption="Genre" @selection="filterGenre"></FilterButton>
    <FilterButton :options="yearOptions" defaultOption="Year" @selection="filterYear"></FilterButton>
    <FilterButton :options="sortingOption" defaultOption="SortBy" @selection="sortAnimes"></FilterButton>

    <div class="cards">
      <MangaCard
        v-for="manga in filteredList"
        :key="manga?.mal_id"
        :manga="manga"/>
    </div>
</template>

<script>
import MangaCard from './manga-card.vue'
import {getTopManga} from '@/assets/services/api/AnimRepo'
import axios from 'axios'
import FilterButton from './filterButton.vue'
import Navbar from './navBar.vue'
import SearchBar from './searchBar.vue'

export default{
    name : 'MangaHome',
    components: 
    { MangaCard,
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
      mangaList : [],
      filteredList :[],
      genreOptions : [{name:"Genre", value:"Genre"}, {name: "Action", value: "Action"}, {name: "Aventure", value:"Adventure"}, {name: "Comédie", value: "Comedy"}, {name: "Drame", value:"Drama"}, {name: "Romance", value:"Romance"}],
      yearOptions : yearsObject,
      sortingOption : [{name:"Popularity", value:"popularity"}, {name:"Name", value:"name"}, {name:"Airing date", value:"airing"}, {name:"Score", value:"score"}],
    }
  },
  created:function(){
    this.chargeMangaDatas()
  },
  methods:{

    /* FILTER METHODS */

    filterGenre(genre){

      if(genre.value == "Genre"){
        this.filteredList = this.mangaList;
      }
      else{
      this.filteredList = this.mangaList.filter(anime => {
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
        this.filteredList = this.mangaList;
      }
      else{
      this.filteredList = this.mangaList.filter(anime => anime.year===year.value);
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
      this.mangaList.sort((a,b)=> b.popularity - a.popularity);
    },

    //SORTING BY NAME
    sortByName(){
      this.mangaList.sort((a,b)=> a.title.localeCompare(b.title) );
    },

    //SORTING BY AIRING DATE
    sortByAiringDate(){
      this.mangaList.sort((a,b)=> {
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
      this.mangaList.sort((a,b)=> b.score - a.score);
    },


    /* CHARGING DATA METHODS */

    async chargeMangaDatas (){
      this.mangaList = await getTopManga();
      this.filteredList = this.mangaList;
    },

    async handleSearch (search){
      if(search !== ""){
        this.mangaList = (await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`)).data.data;
      }
      else{
        this.mangaList = await getTopManga();
      }

      this.filteredList = this.mangaList;
      
    },

  },
}

</script>

<style>


</style>