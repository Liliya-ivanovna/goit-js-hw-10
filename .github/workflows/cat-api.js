function fetchBreeds(){
    const BASE_URL='https://api.thecatapi.com/v1/breeds'
    const API_KEY='live_FeYqdF0CKRVEREBgJHY24nUYqPw9DM2e1KV6QobFJ50vkeRRgUfFlHb92cnucnNC'
    return fetch(`${BASE_URL}?limit=10&page=0&breed_ids={breed.id}&api_key=${API_KEY}`)
    .then((resp)=> {if (!resp.ok){
        throw new Error(resp.statusText);
    }
    return resp.json()});
    }
    fetchBreeds().then(data=>console.log(data)).catch(err=>console.log(err))