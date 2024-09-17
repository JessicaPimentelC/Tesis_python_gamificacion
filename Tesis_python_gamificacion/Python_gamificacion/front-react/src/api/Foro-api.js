import axios from "axios"

const apiURL = axios.create({
    baseURL: "http://localhost:8000/myapp/api/"
})

export const createForo = (foro) => apiURL.post('/foros/', foro);