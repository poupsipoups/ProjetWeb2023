<template>
    <div class ="popup">
        <div class="popup-inner">
            <div class="popup-header">
                <div class="mangaImage">
                    <img :src="manga?.images.jpg.image_url" alt="manga s image">
                </div>
                <h2>{{ manga.title }}</h2>
                <button type="button" @click="close()">X</button>
                
            </div>
            
            <div class="content">
                
                <p>Genre :</p>
                <div class="mangaGenres" v-for="genre in this.manga.genres" :key="genre">
                    <span class="w3-tag w3-round w3-pink  w3-border w3-border-white">{{ genre.name }}</span>
                </div>
                <p v-if="this.manga.year !== undefined">{{this.manga.year}}</p>
                <p>{{this.manga.synopsis}}</p>
                <div class="characters">
                    <p>Characters : </p>
                    <div class="characters-content">
                        <div class="characters-img" :key="character" v-for="character in characters">
                            <img :src="character?.character.images.jpg.image_url" :alt="character.character.name">
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template> 
    

<script>

import {getMangaCharacters} from '@/assets/services/api/AnimRepo'

export default{
    name: 'MangaDetails',
    props :{
        manga: { 
            type: Object,
            required:true,
        },
        detailsVisible : {
            type : Boolean,
        }
    },
    data(){

        return{
        characters: [],
        }
    },
    methods:{
        close(){
            this.$emit('close');
        },

        displayGenres(){
            let genreTab = [];
            for (let i in this.manga.genres) {
            genreTab.push(this.manga.genres[i].name);
            }
        return genreTab;
        },
        async chargeCharacters(){
            this.characters = await getMangaCharacters(this.manga.mal_id);
            console.log(this.characters)
        },

    },
    created:function(){
        this.chargeCharacters()
    }
}
</script>

<style>




</style>


