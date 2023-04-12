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
  
    for (let page = 1; page <= 4; page++) {
      let responseTv = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
        params: { page: page, limit: 100, type: "TV" }
      });
  
      let responseMovie = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
        params: { page: page, limit: 100, type: "Movie" }
      });
  
      totalResult = totalResult.concat(responseTv.data.data, responseMovie.data.data);
  
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  
    console.log(totalResult);
  
    return totalResult;
  }
  
async function getAnimeCharacters(id){
    let response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);

    console.log(response.data.data);

    return response.data.data.slice(0,20);
}

// async function getTopManga(){
//     let response = await axios.get('https://api.jikan.moe/v4/top/manga');

//     return response.data.data;
// }

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


export {getTopAnime, getAnimeCharacters};
