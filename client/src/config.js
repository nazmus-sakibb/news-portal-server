import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://news-portal2.herokuapp.com/api"
});