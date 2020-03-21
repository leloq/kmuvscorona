import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://backend-jstusrzqea-ew.a.run.app/',
    // baseURL:'http://localhost:5000/',
});

export default instance;
