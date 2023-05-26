<template>
    <div class ="popup">
        <div class="animeImage">
                    <img :src="anime?.images.jpg.image_url" alt="anime s image">
                </div>
        <div class="popup-inner">
            <div class="popup-header"> 
                <h2>{{ anime.title }}</h2>
                <button type="button" @click="close()">X</button>
                
            </div>
            
            <div class="content">
                
                <p>Genre :</p>
                <div class="animeGenres" v-for="genre in this.anime.genres" :key="genre">
                    <span class="w3-tag w3-round w3-pink  w3-border w3-border-white">{{ genre.name }}</span>
                </div>
                <p v-if="this.anime.year !== undefined">{{this.anime.year}}</p>
                <p>{{this.anime.synopsis}}</p>
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

import {getAnimeCharacters} from '@/assets/services/api/AnimRepo'

export default{
    name: 'AnimeDetails',

    props :{
        anime: { 
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

    created:function(){
        this.chargeCharacters()
    },

    methods:{
        close(){
            this.$emit('close');
        },

        displayGenres(){
            let genreTab = [];
            for (let i in this.anime.genres) {
            genreTab.push(this.anime.genres[i].name);
            }
        return genreTab;
        },
        async chargeCharacters(){
            this.characters = await getAnimeCharacters(this.anime.mal_id);
            console.log(this.characters)
        },

    },
}
</script>

<style>

.popup {
    position: fixed; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0; 
    background : linear-gradient(to right bottom, #B1E5EFff,  #fff);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 950;
    overflow: auto;

  }

  .popup-inner {
    background-color: white;
  padding: 20px;
  max-width: 600px;
  max-height: 80%;
  width: 100%;
  position: absolute;
  margin: 3em;
  border-radius: 1vh;
  overflow: auto;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
}
  
  .popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin: auto;
}

.popup-header h2 {
  margin: auto;
  font-size:1em;
  color: #A09BF3ff;

}

.popup-header button {
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  position : absolute;
  top: 10px;
  right: 10px;
}

.animeImage{
    max-width: 20%;
    z-index: auto;
    position : absolute;
    top:1%;
    left:1%;
    margin : 1em;
    z-index: 955;

}

.characters .characters-content{
    display:flex;
    overflow-x:auto ;
    flex-direction:row;
}

.characters .characters-img img{
    display: flex;
    padding-left:5px;
    transition: transform 0.25s;
    width: 10vh;
    height: 10vh;
}


</style>


