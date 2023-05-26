function updateFavorites(newFavorite){

    var index = this.favoriteMangas.findIndex(mangaF => (mangaF.mal_id === newFavorite.mal_id));

    if(index === -1){
      this.favoriteMangas.push(newFavorite);
    }
    else{
      this.favoriteMangas.splice(index, 1);
    }

    //stock the tab in local storage
    localStorage.setItem("favoris-m", JSON.stringify(this.favoriteMangas));    
  }

  export {updateFavorites};
