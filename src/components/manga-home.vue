<template>
  <div class="lofi"></div>

    <div class="titre">
        <SearchBar placeHolder="Find your manga..." @search="handleSearch"></SearchBar>
    </div>
  
    <FilterButton :options="genreOptions" defaultOption="Genre" @selection="filterGenre"></FilterButton>
    <FilterButton :options="yearOptions" defaultOption="Year" @selection="filterYear"></FilterButton>
    <FilterButton :options="sortingOption" defaultOption="SortBy" @selection="sortMangas"></FilterButton>

    <div class="cards" @scroll="endScroll">
      <MangaCard
        v-for="manga in filteredList"
        :key="manga?.mal_id"
        :manga="manga"
        :favorites="favoriteMangas"
        :updateFavorites="updateFavorites"/>
    </div>
</template>

<script>
import MangaCard from './manga-card.vue'
import {getTopManga} from '@/assets/services/api/AnimRepo'
import axios from 'axios'
import FilterButton from './filterButton.vue'
import SearchBar from './searchBar.vue'

export default{
    name : 'MangaHome',
    components: 
    { MangaCard,
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
      mangaList : [],
      filteredList :[],
      genreOptions : [{name:"Genre", value:"Genre"}, {name: "Action", value: "Action"}, {name: "Aventure", value:"Adventure"}, {name: "Comédie", value: "Comedy"}, {name: "Drame", value:"Drama"}, {name: "Romance", value:"Romance"}],
      yearOptions : yearsObject,
      sortingOption : [{name:"Popularity", value:"popularity"}, {name:"Name", value:"name"}, {name:"Airing date", value:"airing"}, {name:"Score", value:"score"}],
      favoriteMangas : [],
      page: 1,
    }
  },
  created:function(){
    this.chargeMangaDatas()
  },
  methods:{

    async endScroll(){

      const bodyHeight = document.body.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;

      if(scrollPos >= bodyHeight){
        //charge new datas
        const newPage = await getTopManga(this.page);
        this.mangaList = [...this.mangaList, ...newPage];
        this.filteredList = this.mangaList;
        this.page++;
      }

    },

    
    updateFavorites(newFavorite){

      var index = this.favoriteMangas.findIndex(mangaF => (mangaF.mal_id === newFavorite.mal_id));

      if(index === -1){
        this.favoriteMangas.push(newFavorite);
      }
      else{
        this.favoriteMangas.splice(index, 1);
      }

      //stock the tab in local storage
      localStorage.setItem("favoris-m", JSON.stringify(this.favoriteMangas));    
    },

    /* FILTER METHODS */

    filterGenre(genre){

      if(genre.value == "Genre"){
        this.filteredList = this.mangaList;
      }
      else{
      this.filteredList = this.mangaList.filter(manga => {
        let genreTab = [];
        for (let i in manga.genres) {
          genreTab.push(manga.genres[i].name);
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
      this.filteredList = this.mangaList.filter(manga => manga.year===year.value);
      }

    },

    /* SORTING METHODS */

    //MAIN SORTING
    sortMangas(option){
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
      this.mangaList = await getTopManga(this.page);
      this.filteredList = this.mangaList;
      this.page++;
    },

    async handleSearch (search){
      if(search !== ""){
        this.mangaList = (await axios.get(`https://api.jikan.moe/v4/manga?q=${search}`)).data.data;
      }
      else{
        this.mangaList = await getTopManga();
      }

      this.filteredList = this.mangaList;
      
    },

  },
  mounted() {
    window.addEventListener('scroll', this.endScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.endScroll);
  }
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