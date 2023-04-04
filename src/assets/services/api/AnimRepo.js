import axios from 'axios';

async function getTopAnime(){
    let response = await axios.get('https://api.jikan.moe/v4/top/anime');

    return response.data.data;
}

// async function getTopManga(){
//     let response = await axios.get('https://api.jikan.moe/v4/top/manga');

//     return response.data.data;
// }

// async function getRecommendAnime(){
//     let response = await axios.get('https://api.jikan.moe/v4/recommendations/anime');

//     return response.data.data;
// }

// async function getRecommendManga(){
//     let response = await axios.get('https://api.jikan.moe/v4/recommendations/manga');

//     return response.data.data;
// }


export {getTopAnime};
