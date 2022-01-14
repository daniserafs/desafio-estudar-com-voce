import axios from 'axios';

export const Api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': 'true'
    }
})