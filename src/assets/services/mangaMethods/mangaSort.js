/* SORTING METHODS */

  //MAIN SORTING
  function sortMangas(option){
    console.log("je passe")
    if(option.value == "popularity"){
      this.sortByPopularity();
    }
    if(option.value == "name"){
      this.sortByName();
    }
    if(option.value == "airing"){
      this.sortByAiringDate();
    }
    if(option.value == "score"){
      this.sortByScore();
    }
  }
  
  //SORTING BY POPULARITY

  function sortByPopularity(){
    this.mangaList.sort((a,b)=> b.popularity - a.popularity);
  }

  //SORTING BY NAME
  function sortByName(){
    this.mangaList.sort((a,b)=> a.title.localeCompare(b.title) );
  }

  //SORTING BY AIRING DATE
  function sortByAiringDate(){
    this.mangaList.sort((a,b)=> {
      const dateA = new Date(a.aired.from).getTime();
      const dateB = new Date(b.aired.from).getTime();

      if(dateA < dateB){
        return 1;
      }
      else{
        return -1;
      }
    });
  }

  //SORTING BY SCORE
  function sortByScore(){
    this.mangaList.sort((a,b)=> b.score - a.score);
  }

  export {sortMangas, sortByAiringDate, sortByName,sortByPopularity, sortByScore};
