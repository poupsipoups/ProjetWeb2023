<template>
    <div class="card">
        <router-link :to="{name: 'Details'}">
            <img :src="anime?.images.jpg.image_url">
            <h5>{{anime?.title}}</h5>
        </router-link>
    </div>
</template>

<script>
export default{
    name : 'AnimeCard',
    props: {
        anime : Object,
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
    }

    .card a{
        text-decoration: none;
    }

    .card img{
        width: 100%;
        height: 90%;
        object-fit: cover;
        border-radius: 10px;
        transition: 0.4s;
    }

    .card img:hover{
        transform: scale(1.05);
    }

    .card h5{
        margin:2px;
        transition:0.4s; 
    }

    .card h5:hover{
        color:hotpink;
    }

</style>