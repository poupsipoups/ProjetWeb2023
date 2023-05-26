<template>
    <div class="head">
        <h2>Salut toi !</h2>
    </div>

    <h3>Tes animés préférés</h3>
    <div class="cards">
        <anime-card 
            v-for="anime in animeFav"
            :key="anime?.mal_id"
            :anime="anime"
            />
        </div>
    <h3>Tes mangas préférés</h3>
    <div class="cards">
        <manga-card
            v-for="manga in mangaFav"
            :key="manga?.mal_id"
            :manga="manga">
        </manga-card>
    </div>
</template>

<script>
import AnimeCard from './anime-card.vue'
import MangaCard from './manga-card.vue'

export default{
    name : 'userProfile',
    components: {
        AnimeCard,
        MangaCard
    },
    data(){
        
        
        return{
            animeFav : [],
            mangaFav : [],
        }
    }, 
    created(){
        var stringAnimefav = localStorage.getItem("favoris");
        this.animeFav = JSON.parse(stringAnimefav);

        var stringMangaFav = localStorage.getItem("favoris-m");
        this.mangaFav = JSON.parse(stringMangaFav);
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

</style>