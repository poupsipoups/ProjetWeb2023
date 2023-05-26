import {getTopAnime} from '@/assets/services/api/AnimRepo'
import axios from 'axios'
 
 /* CHARGING DATA METHODS */

 async function chargeAnimeDatas (){
    this.animeList = await getTopAnime(this.page);
    this.filteredList = this.animeList;
    this.page++;
  }

  async function handleSearch (search){
    if(search !== ""){
      this.animeList = (await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`)).data.data;
    }
    else{
      this.animeList = await getTopAnime();
    }

    this.filteredList = this.animeList;
    
  }

  /* SCROLL CALL */

  async function endScroll(){

    console.log("je suis appelé")

    const bodyHeight = document.body.scrollHeight;
    const scrollPos = window.innerHeight + window.scrollY;

    if(scrollPos >= bodyHeight){
      //charge new datas
      const newPage = await getTopAnime(this.page);
      this.animeList = [...this.animeList, ...newPage];
      this.filteredList = this.animeList;
      this.page++;
    }

  }


  export {chargeAnimeDatas, handleSearch, endScroll};

  

  