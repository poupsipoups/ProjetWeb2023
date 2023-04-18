<template>
    <div class="card">
            <img :src="anime?.images.jpg.image_url" @click="openDetails">
            <div @click="openDetails" class="overlay"><h5>{{anime?.title}}</h5></div>
            <AnimeDetails v-if="detailsVisible" :anime="anime" v-on:close="closeDetails"></AnimeDetails>
    </div>
</template>

<script>
import AnimeDetails from './anime-card-detail.vue'

export default{
    name : 'AnimeCard',
    props: {
        anime : Object,
        },
    components:{
        AnimeDetails,
    },
    data(){
        return{
            //detailsVisible : false,
            detailsVisible : false,
        }
    },
    methods:{
        openDetails(){
            this.detailsVisible = true;
        },
        closeDetails(){
            this.detailsVisible = false;
        }
    }
}

</script>

<style>
    .card{
        /* flex: 1 1 auto;
        max-width: 20%;
        width: 20%;
        margin: 2em 0; 
        height: 300px; */
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
        background: rgba(182, 123, 105, 0.5);
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

</style>