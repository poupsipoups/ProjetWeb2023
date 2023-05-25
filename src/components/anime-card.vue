<template>
    <div class="card">
            <img :src="anime?.images.jpg.image_url" @click="openDetails">
            <div @click="openDetails" class="overlay">
                <h5>{{anime?.title}}</h5>
            </div>
            <AnimeDetails v-if="detailsVisible" :anime="anime" v-on:close="closeDetails"></AnimeDetails>
            <button :class="['btn-favori', { 'active': isActive }]"  @click="handleFavorites()"><i class="fas fa-heart"></i></button>
    </div>
</template>

<script>
import AnimeDetails from './anime-card-detail.vue'

export default{
    name : 'AnimeCard',
    props: {
        anime : Object,
        updateFavorites: Function,
        animeFavorites: Array
        },
    components:{
        AnimeDetails,
    },
    data(){
        return{
            //detailsVisible : false,
            detailsVisible : false,
            isActive: false,
            
        }
    },
   
    methods:{
        openDetails(){
            this.detailsVisible = true;
        },
        closeDetails(){
            this.detailsVisible = false;
        }, 
            /* FAVORITES */

        handleFavorites(){
        this.updateFavorites(this.anime);
            this.isActive = !this.isActive;
        }
        },
    }


</script>

<style>
    .card{
        cursor: pointer;
        position: relative; 
        flex-basis: 150px;
    }


    .card img{
        object-fit: cover;
        max-width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .card img:hover{
        transform: scale(1.05);
    }

    .card .overlay{
        opacity: 0%;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(160, 155, 243, 0.7);
        top: 0;
        left:0;
   
        transition: 0.5s;
        color: #fff;
        border-radius:5px;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .card:hover .overlay{
        opacity: 100%;
        transition: 0.5s;
    }

    .btn-favori {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
  color:  #AF56EBff;
  padding: 0;
  position: absolute;
  top: 1%;
  left: 88%;
}

.btn-favori:hover {
  color: red;
}

.btn-favori.active {
    color: red;
}

</style>