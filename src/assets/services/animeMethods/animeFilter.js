/* FILTER METHODS */

function filterGenre(genre){

    if(genre.value == "Genre"){
      this.filteredList = this.animeList;
    }
    else{
    this.filteredList = this.animeList.filter(anime => {
      let genreTab = [];
      for (let i in anime.genres) {
        genreTab.push(anime.genres[i].name);
      }
      
      if(genreTab.includes(genre.value))
        return true;
      else
        return false;
    });
  }
  }

  function filterYear(year){

    if(year.value == "Year"){
      this.filteredList = this.animeList;
    }
    else{
    this.filteredList = this.animeList.filter(anime => anime.year===year.value);
    }

  }

  export {filterGenre, filterYear};