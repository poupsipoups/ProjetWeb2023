import axios from 'axios';


async function getTopAnime(page) {
  let response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`);

  console.log(response.data.data)
  return response.data.data;
  }
  
async function getAnimeCharacters(id){
    let response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);

    console.log(response.data.data);

    return response.data.data.slice(0,20);
}

async function getTopManga(page){
    let response = await axios.get(`https://api.jikan.moe/v4/top/manga?page=${page}`);

    console.log(response.data.data)
    return response.data.data;
}

async function getMangaCharacters(id){
  let response = await axios.get(`https://api.jikan.moe/v4/manga/${id}/characters`);

  return response.data.data.slice(0,20);
}


async function getSearchAnime(search){
    let response = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`);

    return response.data.data;
}

async function getSearchManga(search){
  let response = await axios.get(`https://api.jikan.moe/v4/manga?q=${search}`);

  return response.data.data;
}


export {getTopAnime, getAnimeCharacters, getTopManga, getMangaCharacters, getSearchAnime, getSearchManga};
