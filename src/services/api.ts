import axios from "axios";

export const api = axios.create({
    baseURL: 'https://sigeevarginha.com.br',
    headers: {
        'Content-Type': 'application/json',
    },
})