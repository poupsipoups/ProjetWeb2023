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
        <p>Ce site va être trop stylé mais je ne sais pas encore ce que je vais mettre dedans !</p>
        
    </div>
    <div class="cards">
      <anime-card 
        v-for="anime in animeList"
        :key="anime?.mal_id"
        :anime="anime" />
    </div>
</template>

<script>
import AnimeCard from './anime-card.vue'
import {getTopAnime} from '@/assets/services/api/AnimRepo'

export default{
    name : 'MyHome',
    components: {AnimeCard},
    data(){
    return{
      animeList : [],
    }
  },
  created:function(){
    this.chargeAnimeDatas()
  },
  methods:{

    async chargeAnimeDatas (){
      this.animeList = await getTopAnime();
    }

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
</style>