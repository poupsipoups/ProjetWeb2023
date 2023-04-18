import axios from 'axios';

// async function getTopAnime() {
//     let totalResult = [];
  
//     for (let page = 1; page <= 2; page++) {
//       let response = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
//         params: { page: page, limit:100 }
//       });
//       await new Promise(resolve => setTimeout(resolve, 1000));
  
//       totalResult = totalResult.concat(response.data.data);
//     }

 
  
//     console.log(totalResult);

    
  
//     return totalResult;
//   }

async function getTopAnime() {
    let totalResult = [];
  
    for (let page = 1; page <= 3; page++) {
      let responseTv = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
        params: { page: page, type: "TV" }
      });
  
      // let responseMovie = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
      //   params: { page: page, type: "Movie" }
      // });
  
      // totalResult = totalResult.concat(responseTv.data.data, responseMovie.data.data);
  
      //await new Promise(resolve => setTimeout(resolve, 1000));
      totalResult = responseTv.data.data.sort(()=> Math.random()-0.5);
    }
  
    console.log(totalResult);
  
    return totalResult;
  }
  
async function getAnimeCharacters(id){
    let response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);

    console.log(response.data.data);

    return response.data.data.slice(0,20);
}

async function getTopManga(){
    let response = await axios.get('https://api.jikan.moe/v4/top/manga');

    console.log(response.data.data)
    return response.data.data;
}

async function getMangaCharacters(id){
  let response = await axios.get(`https://api.jikan.moe/v4/manga/${id}/characters`);

  console.log(response.data.data);

  return response.data.data.slice(0,20);
}

// async function getRecommendAnime(){
//     let response = await axios.get('https://api.jikan.moe/v4/recommendations/anime');

//     console.log(response.data.data)

//     return response.data.data;
// }

// async function getRecommendManga(){
//     let response = await axios.get('https://api.jikan.moe/v4/recommendations/manga');

//     return response.data.data;
// }

// async function getSearcAnime(animeId){
//     let response = await axios.get('')
// }


export {getTopAnime, getAnimeCharacters, getTopManga, getMangaCharacters};
