<template>
    <h2>Salut toi !</h2>

    <h3>Tes animés préférés</h3>
    <anime-card 
        v-for="anime in animeFav"
        :key="anime?.mal_id"
        :anime="anime"
        />
    <h3>Tes mangas préférés</h3>
</template>

<script>
import AnimeCard from './anime-card.vue'

export default{
    name : 'userProfile',
    components: {
        AnimeCard
    },
    data(){
        
        
        return{
            animeFav : [],
            mangaFav : [],
        }
    }, 
    created(){
        var stringAnimefav = localStorage.getItem("favoris");
        console.log(stringAnimefav)
        this.animeFav = JSON.parse(stringAnimefav);
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