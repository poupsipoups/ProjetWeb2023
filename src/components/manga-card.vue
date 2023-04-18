<template>
    <div class="card">
            <img :src="manga?.images.jpg.image_url" @click="openDetails">
            <h5 @click="openDetails">{{manga?.title}}</h5>
            <MangaDetails v-if="detailsVisible" :manga="manga" v-on:close="closeDetails"/>
    </div>
</template>

<script>
import MangaDetails from './manga-detail.vue'

export default{
    name : 'MangaCard',
    props: {
        manga : Object,
        },
    components:{
        MangaDetails,
    },
    data(){
        return{
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
    /* .card{
        flex: 1 1 20%;
        max-width: 20%;
        width: 20%;
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
    } */

    /* .card img:hover{
        transform: scale(1.05);
    }

    .card h5{
        font-size: 0.7em;
        margin:2px;
        transition:0.4s; 
    }

    .card h5:hover{
        color:hotpink;
    } */

</style>