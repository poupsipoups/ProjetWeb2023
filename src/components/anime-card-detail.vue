<template>
    <div>
        <h1>{{ anime.title }}</h1>
        <p>image de l'animé</p>
        <p>genre</p>
        <p>année</p>
        <p>résumé</p>
        <p>personnages</p>
    </div>
</template> 
    

<script>

export default{
    name: 'AnimeDetails',
    props :{
        anime: { 
            type: Object,
            required:true,
        }
    },
    data(){
        return{
            animeD : Object
        }
    },
    mounted(){
        this.animeD = this.$route.params.anime;
     }
}
</script>