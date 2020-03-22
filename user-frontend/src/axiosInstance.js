import axios from 'axios';
// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});
export default instance;