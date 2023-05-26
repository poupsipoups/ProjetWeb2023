<template>
  <div class="lofi"></div>
    <div class="titre">
        <SearchBar placeHolder="Find your manga..." @search="handleSearch"></SearchBar>
    </div>
  
    <FilterButton :options="genreOptions" defaultOption="Genre" @selection="filterGenre"></FilterButton>
    <FilterButton :options="yearOptions" defaultOption="Year" @selection="filterYear"></FilterButton>
    <FilterButton :options="sortingOption" defaultOption="Sort By" @selection="sortMangas"></FilterButton>

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
import FilterButton from './filterButton.vue'
import SearchBar from './searchBar.vue'
import {chargeMangaDatas, handleSearch, endScroll} from '@/assets/services/mangaMethods/mangaCharging'
import {updateFavorites} from '@/assets/services/mangaMethods/mangaFav'
import {filterGenre, filterYear} from '@/assets/services/mangaMethods/mangaFilter'
import {sortMangas, sortByPopularity, sortByName, sortByAiringDate, sortByScore} from '@/assets/services/mangaMethods/mangaSort'

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
  mounted() {
    window.addEventListener('scroll', this.endScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.endScroll);
  },
  methods:{
    chargeMangaDatas,
    handleSearch,
    endScroll,
    updateFavorites,
    filterGenre,
    filterYear,
    sortMangas,
    sortByPopularity, 
    sortByName, 
    sortByAiringDate, 
    sortByScore

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