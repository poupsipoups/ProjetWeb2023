import axios from 'axios';

async function getTopAnime(){
    // let total_result = [];
    // for(let i in [1,2,3]){
        let response = await axios.get(`https://api.jikan.moe/v4/top/anime`);
        // total_result.concat(response.data.data);
        
    // }

    console.log(response.data.data)

    // return total_result;

    return(response.data.data);
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
