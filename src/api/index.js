import axios from 'axios';
import config from '@/common/config';

let apiURL = 'http://localhost:8080/';

const http = axios.create({
    baseURL: config.API_URL
});

export default http;