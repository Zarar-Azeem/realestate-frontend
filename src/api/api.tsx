import axios from "axios";

export const token = localStorage.getItem("token") ?? ''

export const api = axios.create({
    baseURL:  "http://localhost:3000/",
    headers: {
        'authToken': token
    }
})