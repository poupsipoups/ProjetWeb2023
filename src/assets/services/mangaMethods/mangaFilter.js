 /* FILTER METHODS */

 function filterGenre(genre){

    if(genre.value == "Genre"){
      this.filteredList = this.mangaList;
    }
    else{
    this.filteredList = this.mangaList.filter(manga => {
      let genreTab = [];
      for (let i in manga.genres) {
        genreTab.push(manga.genres[i].name);
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
      this.filteredList = this.mangaList;
    }
    else{
    this.filteredList = this.mangaList.filter(manga => manga.year===year.value);
    }

  }

export {filterGenre, filterYear};