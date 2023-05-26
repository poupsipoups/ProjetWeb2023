import {getTopManga, getSearchManga} from '@/assets/services/api/AnimRepo'

/* CHARGING DATA METHODS */

  async function chargeMangaDatas (){
    this.mangaList = await getTopManga(this.page);
    this.filteredList = this.mangaList;
    this.page++;
  }

  async function handleSearch (search){
    if(search !== ""){
      this.mangaList = await getSearchManga(search);
    }
    else{
      this.mangaList = await getTopManga();
    }

    this.filteredList = this.mangaList;
    
  }

  async function endScroll(){

    const bodyHeight = document.body.scrollHeight;
    const scrollPos = window.innerHeight + window.scrollY;

    if(scrollPos >= bodyHeight){
      //charge new datas
      const newPage = await getTopManga(this.page);
      this.mangaList = [...this.mangaList, ...newPage];
      this.filteredList = this.mangaList;
      this.page++;
    }

  }

  export {chargeMangaDatas, handleSearch, endScroll};