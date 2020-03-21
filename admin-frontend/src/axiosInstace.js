import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://backend-jstusrzqea-ew.a.run.app/',
});

export default instance;
