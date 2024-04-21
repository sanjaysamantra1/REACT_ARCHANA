import axios from 'axios';

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`
});

export default client;
