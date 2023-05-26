<template>
  <div class="lofi"></div>
    <div class="titre">
        <SearchBar placeHolder="Find you anime..." @search="handleSearch"></SearchBar>
    </div>
    <div class="filters">
      <FilterButton :options="genreOptions" defaultOption="Genre" @selection="filterGenre"></FilterButton>
      <FilterButton :options="yearOptions" defaultOption="Year" @selection="filterYear"></FilterButton>
      <FilterButton :options="sortingOption" defaultOption="Sort By" @selection="sortAnimes"></FilterButton>
    </div>

    <div class="cards" @scroll="endScroll">
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
import FilterButton from './filterButton.vue'
import SearchBar from './searchBar.vue'
import {chargeAnimeDatas, handleSearch, endScroll} from '@/assets/services/animeMethods/animeCharging'
import {updateFavorites} from '@/assets/services/animeMethods/animeFav'
import {filterGenre, filterYear} from '@/assets/services/animeMethods/animeFilter'
import {sortAnimes, sortByPopularity, sortByName, sortByAiringDate, sortByScore} from '@/assets/services/animeMethods/animeSort'


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
      page: 1,
    }
  },
    /* LIFE CYCLE METHODS */
  created:function(){
    this.chargeAnimeDatas()
  },
  mounted() {
    window.addEventListener('scroll', this.endScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.endScroll);
  },

  methods:{
    chargeAnimeDatas,
    handleSearch,
    endScroll,
    updateFavorites,
    filterGenre,
    filterYear,
    sortAnimes,
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