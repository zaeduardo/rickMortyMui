import axios from "axios";


export const api  = axios.create ({
    baseURL:"https://rickandmortyapi.com/api"
})
export const api_users = axios.create ({
    baseURL:"https://jwt-bearer-auth1.p.rapidapi.com"
})
