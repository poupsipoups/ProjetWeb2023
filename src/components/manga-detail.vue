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

/* .popup {
    position: fixed; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0; 
    background : linear-gradient(to right bottom, hotpink, tomato);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .popup-inner {
  background-color: white;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80%;
  position: relative;
  overflow: visible;
  border-radius: 1vh;
  background: linear-gradient(to right bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.3));
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
  color: tomato;

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

.popup-inner .mangaImage{
    max-width: 25%;
    z-index: auto;
    position : absolute;
    top:-10%;
    left:-8%;
    margin : 1em;

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
} */


</style>


