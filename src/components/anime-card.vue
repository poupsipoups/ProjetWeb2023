<template>
    <div class="card">
            <img :src="anime?.images.jpg.image_url" @click="openDetails">
            <h5 @click="openDetails">{{anime?.title}}</h5>
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
        flex: 1 1 20%;
        max-width: 20%;
        width: 20%;
        padding: 8px;
        margin: 16px 0; 
        cursor: pointer;
    }

    .card a{
        text-decoration: none;
    }

    .card img{
        width: 100%;
        height: 90%;
        object-fit: cover;
        border-radius: 5px;
        transition: 0.4s;
    }

    .card img:hover{
        transform: scale(1.05);
    }

    .card h5{
        font-size: 0.7em;
        margin:2px;
        transition:0.4s; 
    }

    .card h5:hover{
        color:hotpink;
    }

</style>