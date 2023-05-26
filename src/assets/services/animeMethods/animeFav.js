/* FAVORITES */

function updateFavorites(newFavorite){
    var index = this.favoriteAnimes.findIndex(animeF => (animeF.mal_id === newFavorite.mal_id));
    

    if(index === -1){
      this.favoriteAnimes.push(newFavorite);
    }
    else{
      this.favoriteAnimes.splice(index, 1);
    }

    //stock the tab in local storage
    localStorage.setItem("favoris", JSON.stringify(this.favoriteAnimes));

    var test = localStorage.getItem("favoris");

    var objTest = JSON.parse(test);

    console.log(objTest)

     
  }

  export {updateFavorites};